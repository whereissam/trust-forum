import { AuthAdapter, MFA_LEVELS } from "@web3auth/auth-adapter";
import { UX_MODE, WEB3AUTH_NETWORK } from "@web3auth/base";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3AuthOptions } from "@web3auth/modal";
import {
  BUTTON_POSITION,
  CONFIRMATION_STRATEGY,
  WalletServicesPlugin,
} from "@web3auth/wallet-services-plugin";

import { chain } from "@/config/chainConfig";

const clientId =
  "BAdZXDm_RIDI4htBGR4qMzMFlA89L5XLXwk5g0rXYTAdnFf1f6XV5Qim7StbPdkTzGFQOQkpe79AfYlboK8ACHM";

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: {
    chainConfig: chain.ethereum,
  },
});

const web3AuthOptions: Web3AuthOptions = {
  chainConfig: chain.ethereum,
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
};

// const authAdapter = new AuthAdapter({
//   loginSettings: {
//     mfaLevel: MFA_LEVELS.OPTIONAL,
//   },
//   adapterSettings: {
//     uxMode: UX_MODE.REDIRECT, // "redirect" | "popup"
//   },
// });

const worldcoinAuthAdapter = new AuthAdapter({
  loginSettings: {
    mfaLevel: MFA_LEVELS.OPTIONAL,
  },
  adapterSettings: {
    uxMode: UX_MODE.POPUP,
    loginConfig: {
      jwt: {
        verifier: "web3auth-worldcoin-verifier", // Pass the Verifier name here
        typeOfLogin: "jwt", // Pass on the login provider of the verifier you've created
        clientId: "ZhzsfLjlf8FT2l7syQpDtmCpROld8oLg", // Pass on the Auth0 `Client ID` here
      },
    },
  },
});

const walletServicesPlugin = new WalletServicesPlugin({
  wsEmbedOpts: {},
  walletInitOptions: {
    whiteLabel: {
      showWidgetButton: true,
      buttonPosition: BUTTON_POSITION.BOTTOM_RIGHT,
    },
    confirmationStrategy: CONFIRMATION_STRATEGY.MODAL,
  },
});

const adapters = await getDefaultExternalAdapters({ options: web3AuthOptions });

const web3AuthContextConfig = {
  web3AuthOptions,
  adapters: [worldcoinAuthAdapter, ...adapters],
  plugins: [walletServicesPlugin],
};

export default web3AuthContextConfig;
