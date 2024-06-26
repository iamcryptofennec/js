import type { Chain } from "../src/types";
export default {
  "chain": "iChain",
  "chainId": 3639,
  "explorers": [
    {
      "name": "iChainscan",
      "url": "https://ichainscan.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmcumhDxUyoLTHkcMKgPqkpGnnjwSTqE2KGFnDXXFY8mMo",
    "width": 40,
    "height": 38,
    "format": "png"
  },
  "infoURL": "https://islamicoin.finance",
  "name": "iChain Network",
  "nativeCurrency": {
    "name": "ISLAMICOIN",
    "symbol": "ISLAMI",
    "decimals": 18
  },
  "networkId": 3639,
  "rpc": [
    "https://3639.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.ichainscan.com"
  ],
  "shortName": "ISLAMI",
  "slug": "ichain-network",
  "testnet": false
} as const satisfies Chain;