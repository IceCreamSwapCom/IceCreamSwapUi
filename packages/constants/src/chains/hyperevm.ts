import IceChain from '../ice-chain'

export const hyperevm: IceChain = {
  id: 999,
  name: 'HyperEVM Mainnet',
  features: ['swap'],
  network: 'asset',
  rpcUrls: {
    public: { http: ['https://rpc.hyperliquid.xyz/evm'] },
    default: { http: ['https://rpc.hyperliquid.xyz/evm'] },
  },
  blockExplorers: {
    default: { name: 'HyperEVM Explorer', url: 'https://hyperliquid.cloud.blockscout.com' },
  },
  nativeCurrency: {
    name: 'HYPE',
    symbol: 'HYPE',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x63d3C7Ab37ca36A2A0A338076C163fF60c72527c',
      blockCreated: 106291,
    },
  },
  blockInterval: 2,
  wrappedNative: {
    address: '0x5555555555555555555555555555555555555555',
    decimals: 18,
    symbol: 'wHYPE',
    name: 'wrapped HYPE',
  },
  swap: {
    factoryAddress: '0xE578184bC88EB48485Bba23a37B5509578d2aE38',
    routerAddress: '0x16A3247Db4588176c24C6A5F6d3fd2C174122DF5',
    initCodeHash: '0x0437378fc27e93c612c5c385779bf540ca2064b54705e48c313aa216da380100',
    deploymentTs: 1740055348,
  },
  smartRouterAddress: '0x3FFc2315A992b01dc4B3f79C8EEa1921091Ee24f',
}
