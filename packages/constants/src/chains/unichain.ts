import IceChain from '../ice-chain'

export const unichain: IceChain = {
  id: 130,
  name: 'Unichain',
  features: ['swap'],
  network: 'unichain',
  rpcUrls: {
    public: { http: ['https://mainnet.unichain.org'] },
    default: { http: ['https://mainnet.unichain.org'] },
  },
  blockExplorers: {
    default: { name: 'Unichain Explorer', url: 'https://uniscan.xyz' },
  },
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x16A3247Db4588176c24C6A5F6d3fd2C174122DF5',
      blockCreated: 8543498,
    },
  },
  blockInterval: 1,
  wrappedNative: {
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped ETH',
  },
  swap: {
    factoryAddress: '0xC87De04e2EC1F4282dFF2933A2D58199f688fC3d',
    routerAddress: '0xeAA02505CDF4c9F72fB653cDDBE4B09f52F0dBBa',
    initCodeHash: '0x0437378fc27e93c612c5c385779bf540ca2064b54705e48c313aa216da380100',
    deploymentTs: 1739291789,
  },
  smartRouterAddress: '0xb4FE60CD05A3e68668007Cee83DDFD9A50A45B36',
}
