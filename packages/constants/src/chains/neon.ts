import {FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS} from '../common/swap'
import IceChain from '../ice-chain'

export const neon: IceChain = {
  id: 245022934,
  name: 'Neon EVM Mainnet',
  features: ['swap', 'bridge', 'staking', 'farms'],
  network: 'neon',
  rpcUrls: {
    public: { http: ['https://neon-proxy-mainnet.solana.p2p.org'] },
    default: { http: ['https://neon-proxy-mainnet.solana.p2p.org'] },
  },
  blockExplorers: {
    default: { name: 'Neon EVM Explorer', url: 'https://neon.blockscout.com' },
  },
  nativeCurrency: {
    name: 'Neon EVM',
    symbol: 'NEON',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62',
      blockCreated: 236956242,
    },
  },
  blockInterval: 0.4,
  wrappedNative: {
    address: '0x202C35e517Fa803B537565c40F0a6965D7204609',
    decimals: 18,
    symbol: 'WNEON',
    name: 'Wrapped NEON',
  },
  iceAddress: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
  stableToken: {
    address: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    routerAddress: ROUTER_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
  smartRouterAddress: '0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083',
  farmV2Address: '0xe028aa99fe8e4c562f2477306eb7b98c8e083e4d',
}
