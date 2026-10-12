import IceChain from '../ice-chain'

export const rari: IceChain = {
  id: 1380012617,
  name: 'Rari',
  features: ['swap'],
  network: 'rari',
  rpcUrls: {
    public: { http: ['https://mainnet.rpc.rarichain.org/http',] },
    default: { http: ['https://mainnet.rpc.rarichain.org/http',] },
  },
  blockExplorers: {
    default: { name: 'Rari Explorer', url: 'https://mainnet.explorer.rarichain.org' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xb6D5B39F96d379569d47cC84024f3Cd78c5Ef651',
      blockCreated: 290957,
    },
  },
  blockInterval: 1,
  wrappedNative: {
    address: '0xBb5e1777A331ED93E07cF043363e48d320eb96c4',
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
    factoryAddress: "0x8bCf938b30575594B02420e86b100121c92A54a3",
    initCodeHash: "0x0437378fc27e93c612c5c385779bf540ca2064b54705e48c313aa216da380100",
    routerAddress: "0x60cA396F69b8D9b22886208984D89a682D9D6f04",
  },
  smartRouterAddress: '0x575C065Bf1Fa9D6F0F94AAC620a6936dD8517c7D',
}
