"use client";

import { CHAIN_NAMESPACES } from "@web3auth/base";
import { createPublicClient, createWalletClient, custom, defineChain, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

const incoChain = defineChain({
  id: 21097,
  name: "Inco Rivest Testnet",
  network: "inco_testnet",
  nativeCurrency: {
    decimals: 18,
    name: "inco",
    symbol: "inco",
  },
  rpcUrls: {
    default: {
      http: ["https://validator.rivest.inco.org"],
      webSocket: [],
    },
    public: {
      http: ["https://validator.rivest.inco.org"],
      webSocket: [],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.rivest.inco.org" },
  },
  contracts: {},
});

export const publicClient = createPublicClient({
  chain: incoChain,
  transport: http(),
});
