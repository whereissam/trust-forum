"use client";

import { CHAIN_NAMESPACES } from "@web3auth/base";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export const web3AuthClientId =
  "BAdZXDm_RIDI4htBGR4qMzMFlA89L5XLXwk5g0rXYTAdnFf1f6XV5Qim7StbPdkTzGFQOQkpe79AfYlboK8ACHM";

export const web3AuthChainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x1", // Please use 0x1 for Ethereum Mainnet
  rpcTarget: "https://rpc.ankr.com/eth",
  // Avoid using public rpcTarget in production.
  // Use services like Infura, Quicknode etc
  displayName: "Ethereum Mainnet",
  blockExplorerUrl: "https://etherscan.io/",
  ticker: "ETH",
  tickerName: "Ethereum",
};
