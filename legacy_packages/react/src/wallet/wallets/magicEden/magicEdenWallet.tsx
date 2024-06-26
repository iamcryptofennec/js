import type { WalletOptions, WalletConfig } from "@thirdweb-dev/react-core";
import { MagicEdenWallet } from "@thirdweb-dev/wallets";
import { MagicEdenConnectUI } from "./MagicEdenConnectUI";
import { getInjectedMagicEdenProvider } from "@thirdweb-dev/wallets";

/**
 * @wallet
 */
export type MagicEdenWalletConfigOptions = {
  /**
   * If `true`, the wallet will be tagged as "recommended" in ConnectWallet Modal. Default is `false`
   */
  recommended?: boolean;
};

/**
 * A wallet configurator for [Phantom Wallet](https://phantom.app/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * phantomWallet({
 *  recommended: true,
 * })
 * ```
 *
 * @param options -
 * Optional configuration options for the wallet
 *
 * ### recommended (optional)
 * If `true`, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI. Default is `false`
 *
 * @wallet
 */
export const magicEdenWallet = (
  options?: MagicEdenWalletConfigOptions,
): WalletConfig<MagicEdenWallet> => {
  return {
    recommended: options?.recommended,
    id: "Magic Eden",
    meta: {
      name: "Magic Eden Wallet",
      urls: {
        chrome:
          "https://chromewebstore.google.com/detail/magic-eden-wallet/mkpegjkblkkefacfnmkajcjmabijhclg",
      },
      iconURL:
        "data:image/png;base64,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",
    },
    create: (walletOptions: WalletOptions) =>
      new MagicEdenWallet(walletOptions),
    connectUI: MagicEdenConnectUI,
    isInstalled() {
      return !!getInjectedMagicEdenProvider();
    },
  };
};
