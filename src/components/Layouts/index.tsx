"use client";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Web3AuthInnerContext,
  Web3AuthProvider,
} from "@web3auth/modal-react-hooks";
import { WalletServicesProvider } from "@web3auth/wallet-services-plugin-react-hooks";
import DefeaultLayout from "./DefaultLayout";
import web3AuthContextConfig from "@/helpers/web3auth";
import { SessionProvider } from "next-auth/react";
import { rainbowWallet, metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";

import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { WagmiProvider, http } from "wagmi";
import { rainbowWeb3AuthConnector } from "@/RainbowWeb3authConnector";
import { sepolia, mainnet, polygon } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "04309ed1007e77d1f119b85205bb779d",
  chains: [
    {
      id: 21097,
      network: "Rivest",
      name: "Rivest Testnet",
      nativeCurrency: {
        name: "INCO",
        symbol: "INCO",
        decimals: 18,
      },
      rpcUrls: {
        default: {
          http: ["https://validator.rivest.inco.org"],
        },
        public: {
          http: ["https://validator.rivest.inco.org"],
        },
      },
      blockExplorers: {
        default: {
          name: "Explorer",
          url: "https://explorer.rivest.inco.org",
        },
      },
    },
    mainnet,
    sepolia,
    polygon,
  ],
  transports: {
    21097: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
  },
  wallets: [
    {
      groupName: "Recommended",
      wallets: [rainbowWallet, rainbowWeb3AuthConnector, metaMaskWallet],
    },
  ],
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Web3AuthProvider config={web3AuthContextConfig}>
            <WalletServicesProvider context={Web3AuthInnerContext}>
              <SessionProvider>
                <DefeaultLayout>{children}</DefeaultLayout>
              </SessionProvider>
            </WalletServicesProvider>
          </Web3AuthProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
