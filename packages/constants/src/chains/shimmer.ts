import { INIT_CODE_HASH } from '../common/swap'
import IceChain from '../ice-chain'

export const shimmer: IceChain = {
  id: 148,
  name: 'ShimmerEVM',
  features: ['swap', 'bridge', 'farms', 'kyc'], // 'info'
  network: 'shimmer',
  rpcUrls: {
    public: { http: ['https://json-rpc.evm.shimmer.network'] },
    default: { http: ['https://json-rpc.evm.shimmer.network'] },
  },
  blockExplorers: {
    default: { name: 'Shimmer EVM Explorer', url: 'https://explorer.evm.shimmer.network/' },
  },
  nativeCurrency: {
    name: 'Shimmer',
    symbol: 'SMR',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62',
      blockCreated: 35400,
    },
  },
  blockInterval: 3,
  wrappedNative: {
    address: '0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b',
    decimals: 18,
    symbol: 'WSMR',
    name: 'Wrapped Shimmer',
  },
  iceAddress: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
  stableToken: {
    address: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: "0x24cb308a4e2F3a4352F513681Bd0c31a0bd3BA31",
    routerAddress: "0xBbB4CCfc93657AC125F4b1f734111349d1bFF611",
    initCodeHash: INIT_CODE_HASH,
    deploymentTs: 1695934800,
  },
  smartRouterAddress: '0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083',
  farmV2Address: '0xC4b5F645134DDc57c25D44095e5C1318A83C8481',
  kyc: {
    feeToken: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
    fee: 10,
    feeWallet: '0x2Bfd1fc5e25a8F55C2E849492ad7966EA8A0dd9E'
  },
}
