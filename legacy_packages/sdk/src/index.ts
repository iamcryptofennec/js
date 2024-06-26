// handle browser vs node global

// eslint-disable-next-line better-tree-shaking/no-top-level-side-effects
globalThis.global = globalThis;

export type {
  NFTMetadataInput,
  NFT,
  NFTMetadata,
  NFTMetadataOrUri,
  BasicNFTInput,
} from "./core/schema/nft";

export type { CurrencyValue, TokenMetadata } from "./core/schema/token";
export { getRpcUrl } from "./core/constants/urls";

export { checkClientIdOrSecretKey } from "./core/utils/apiKey";

export type { QueryAllParams } from "./core/schema/QueryParams";

// export EVM by default
export * from "./evm";

export type {
  FeatureName,
  FeatureWithEnabled,
} from "./evm/constants/contract-features";
export type { ContractWrapper } from "./evm/core/classes/internal/contract-wrapper";
export type { DeploymentTransaction } from "./evm/types/any-evm/deploy-data";
