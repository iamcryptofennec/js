import type { Chain } from "../src/types";
export default {
  "chain": "Nahmii",
  "chainId": 4062,
  "explorers": [
    {
      "name": "Nahmii 3 Testnet Explorer",
      "url": "https://explorer.testnet.nahmii.io",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmZhKXgoGpzvthr2eh8ZNgT75YvMtEBegdELAaMPPzf5QT",
        "width": 384,
        "height": 384,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmZhKXgoGpzvthr2eh8ZNgT75YvMtEBegdELAaMPPzf5QT",
    "width": 384,
    "height": 384,
    "format": "png"
  },
  "infoURL": "https://nahmii.io",
  "name": "Nahmii 3 Testnet",
  "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 4062,
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://accounts.testnet.nahmii.io"
      }
    ]
  },
  "rpc": [
    "https://4062.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.testnet.nahmii.io"
  ],
  "shortName": "Nahmii3Testnet",
  "slip44": 1,
  "slug": "nahmii-3-testnet",
  "status": "active",
  "testnet": true
} as const satisfies Chain;