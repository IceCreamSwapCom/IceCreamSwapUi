import IceChain from '../ice-chain'

export const boba: IceChain = {
  id: 288,
  name: 'Boba Network',
  features: ['swap', 'bridge'], // 'info'
  network: 'boba',
  rpcUrls: {
    public: { http: ['https://mainnet.boba.network'] },
    default: { http: ['https://mainnet.boba.network'] },
  },
  blockExplorers: {
    default: { name: 'Boba Explorer', url: 'https://bobascan.com' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xb6D5B39F96d379569d47cC84024f3Cd78c5Ef651',
      blockCreated: 1138229,
    },
  },
  blockInterval: 3,
  wrappedNative: {
    address: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  iceAddress: '0xd65CceCFf339e5680b1A1E7821421932cc2b114f',
  stableToken: {
    address: '0x7D5a56742C082FcDfc240cd7D1775f00e059771F',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: '0x39135bD1FD3A04381C1094AB0Dd35c7bbe61b3C5',
    routerAddress: '0x9eC206B37659f8eD9c5F9A051F05FDbC3baA5CE6',
    initCodeHash: '0x0437378fc27e93c612c5c385779bf540ca2064b54705e48c313aa216da380100',
    deploymentTs: 1713906000,
  },
  smartRouterAddress: '0xA608FF30563cEed3f0BC52eFc4abfc9502F1a71C',
}
