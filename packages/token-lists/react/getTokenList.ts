/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
import { TokenList, TokenInfo } from '@pancakeswap/token-lists'
import uriToHttp from '@pancakeswap/utils/uriToHttp'
import remove from 'lodash/remove'
import Ajv from 'ajv'
import schema from '../schema/pancakeswap.json'

export const tokenListValidator = new Ajv({ allErrors: true }).compile(schema)

// Characters allowed by the token-list schema for `name` and `symbol`.
// Any character outside these sets (e.g. emojis) is stripped instead of failing validation.
const DISALLOWED_NAME_CHARS = /[^ \w.'+\-%/@À-ÖØ-öø-ÿ:&\[\]()]/gu
const DISALLOWED_SYMBOL_CHARS = /[^a-zA-Z0-9+\-%/$.]/gu

/**
 * Removes characters that aren't allowed by the token-list schema from each token's
 * name and symbol, so unsupported characters (like emojis) don't fail validation.
 */
function sanitizeTokenList(tokens: TokenInfo[]): void {
  for (const token of tokens) {
    if (typeof token.name === 'string') {
      token.name = token.name.replace(DISALLOWED_NAME_CHARS, '').trim()
    }
    if (typeof token.symbol === 'string') {
      token.symbol = token.symbol.replace(DISALLOWED_SYMBOL_CHARS, '')
    }
  }
}

/**
 * Contains the logic for resolving a list URL to a validated token list
 * @param listUrl list url
 */
export default async function getTokenList(listUrl: string): Promise<TokenList> {
  const urls: string[] = uriToHttp(listUrl)

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    const isLast = i === urls.length - 1
    let response
    try {
      response = await fetch(url)
    } catch (error) {
      console.error('Failed to fetch list', listUrl, error)
      if (isLast) throw new Error(`Failed to download list ${listUrl}`)
      continue
    }

    if (!response.ok) {
      if (isLast) throw new Error(`Failed to download list ${listUrl}`)
      continue
    }

    const json = await response.json()
    if (json.tokens) {
      sanitizeTokenList(json.tokens)
      remove<TokenInfo>(json.tokens, (token) => {
        return !token.symbol || !token.name
      })
    }
    if (!tokenListValidator(json)) {
      const validationErrors: string =
        tokenListValidator.errors?.reduce<string>((memo, error) => {
          const add = `${(error as any).dataPath} ${error.message ?? ''}`
          return memo.length > 0 ? `${memo}; ${add}` : `${add}`
        }, '') ?? 'unknown error'
      throw new Error(`Token list failed validation: ${validationErrors}`)
    }
    return json as TokenList
  }
  throw new Error('Unrecognized list URL protocol.')
}
