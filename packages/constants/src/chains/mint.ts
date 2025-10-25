import IceChain from '../ice-chain'

export const mint: IceChain = {
  id: 185,
  name: 'Mint Network',
  features: ['swap'], // 'info'
  network: 'mint',
  rpcUrls: {
    public: { http: ['https://rpc.mintchain.io'] },
    default: { http: ['https://rpc.mintchain.io'] },
  },
  blockExplorers: {
    default: { name: 'Mint Explorer', url: 'https://explorer.mintchain.io' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xf8ac4BEB2F75d2cFFb588c63251347fdD629B92c',
      blockCreated: 467882,
    },
  },
  blockInterval: 2,
  wrappedNative: {
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  stableToken: {
    address: '0x05D032ac25d322df992303dCa074EE7392C117b9',
    decimals: 6,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: '0xC87De04e2EC1F4282dFF2933A2D58199f688fC3d',
    routerAddress: '0xE578184bC88EB48485Bba23a37B5509578d2aE38',
    initCodeHash: '0x0437378fc27e93c612c5c385779bf540ca2064b54705e48c313aa216da380100',
    deploymentTs: 1716544680,
  },
  smartRouterAddress: '0x16A3247Db4588176c24C6A5F6d3fd2C174122DF5',
}
