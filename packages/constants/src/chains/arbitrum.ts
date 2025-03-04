import IceChain from '../ice-chain'

export const arbitrum: IceChain = {
  id: 42161,
  name: 'Arbitrum One',
  features: ['swap', 'bridge'],
  network: 'arbitrum',
  rpcUrls: {
    public: { http: ['https://arbitrum-one.publicnode.com',] },
    default: { http: ['https://arbitrum-one.publicnode.com',] },
  },
  blockExplorers: {
    default: { name: 'Arbitrum One Explorer', url: 'https://arbiscan.io' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x16A3247Db4588176c24C6A5F6d3fd2C174122DF5',
      blockCreated: 202100344,
    },
  },
  blockInterval: 12,  // calling block.number in solidity returns the Ethereum block number, not Arbitrum
  wrappedNative: {
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  stableToken: {
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    decimals: 6,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: '0x0a354845411CC1212cfb33Acc6A52Fcd4A80e3Ae',
    initCodeHash: '0x0437378fc27e93c612c5c385779bf540ca2064b54705e48c313aa216da380100',
    routerAddress: '0xA1d3462AFbFFe3BA45A5044FB899e6E219Ec842A',
  },
  smartRouterAddress: '0xeAA02505CDF4c9F72fB653cDDBE4B09f52F0dBBa',
}