"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Web3AuthInnerContext,
  Web3AuthProvider,
} from "@web3auth/modal-react-hooks";
import { WalletServicesProvider } from "@web3auth/wallet-services-plugin-react-hooks";
import DefeaultLayout from "./DefaultLayout";
import web3AuthContextConfig from "@/helpers/web3auth";
import { SessionProvider } from "next-auth/react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Web3AuthProvider config={web3AuthContextConfig}>
        <WalletServicesProvider context={Web3AuthInnerContext}>
          <SessionProvider>
            <DefeaultLayout>{children}</DefeaultLayout>
          </SessionProvider>
        </WalletServicesProvider>
      </Web3AuthProvider>
    </QueryClientProvider>
  );
}
