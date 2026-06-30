import { ChainId } from '@pancakeswap/sdk'
import { chains } from '@icecreamswap/constants'

export const PANCAKE_EXTENDED = 'https://tokens.pancakeswap.finance/pancakeswap-extended.json'
export const PANCAKE_BSC_MM = 'https://tokens.pancakeswap.finance/pancakeswap-bnb-mm.json'

// Nordstern per-chain token list endpoint
export const nordsternTokenList = (chainId: number) => `https://api.nordstern.finance/tokens/${chainId}`

// List of official tokens list
export const OFFICIAL_LISTS = [PANCAKE_EXTENDED]

// Additional third-party token lists per chain, merged on top of the Nordstern list
const EXTRA_LIST_URLS: { [chainId: number]: string[] } = {
  [ChainId.CORE]: [
    'https://token-list.sushi.com',
    'https://raw.githubusercontent.com/SVerseLab/tokens/master/tokenlist.json',
  ],
  [ChainId.BSC]: [
    PANCAKE_EXTENDED,
    'https://tokens.pancakeswap.finance/coingecko.json',
    PANCAKE_BSC_MM
  ],
  [ChainId.BASE]: [
    'https://tokens.pancakeswap.finance/pancakeswap-base-default.json',
    'https://static.optimism.io/optimism.tokenlist.json',
    'https://tokens.coingecko.com/base/all.json'
  ],
}

// The Nordstern per-chain list is added automatically for every supported chain.
// lower index == higher priority for token import, so EXTRA_LIST_URLS take precedence
// over the Nordstern list.
export const MULTI_CHAIN_LIST_URLS: { [chainId: number]: string[] } = chains.reduce(
  (acc, { id }) => {
    acc[id] = [...(EXTRA_LIST_URLS[id] ?? []), nordsternTokenList(id)]
    return acc
  },
  {} as { [chainId: number]: string[] },
)

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...Object.values(MULTI_CHAIN_LIST_URLS).flat(),
  ...UNSUPPORTED_LIST_URLS,
  ...WARNING_LIST_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
