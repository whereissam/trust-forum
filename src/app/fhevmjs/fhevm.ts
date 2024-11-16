"use client";

import { createInstance, initFhevm } from "fhevmjs";
import { VoteContractAddress } from "../../contracts/voteContract";

let fhevmInstance: any = null;

export const createFhevmInstance = async () => {
  if (!fhevmInstance) {
    await initFhevm();
    fhevmInstance = await createInstance({
      chainId: 21097,
      networkUrl: "https://validator.rivest.inco.org/",
      gatewayUrl: "https://gateway.rivest.inco.org/",
      aclAddress: "0x2Fb4341027eb1d2aD8B5D9708187df8633cAFA92",
    });
  }
  return fhevmInstance;
};

export const getFhevmInstance = async () => {
  if (!fhevmInstance) {
    fhevmInstance = await createFhevmInstance();
  }
  return fhevmInstance;
};

/**
 * 
 * @param {*} votingContract 
 * @param {*} signersAddress 
 * @param {string} targetUser
 * @param {number} like like = 1, dislike = 0
 */
export async function getVoteUserParams(signersAddress: string, targetUser: string, like: 1 | 0) {
  const instance = await getFhevmInstance();
  const input = instance.createEncryptedInput(VoteContractAddress, signersAddress);
  input.add64(like);
  const encryptedVotingCount = input.encrypt();

  // const castVoteTx = await votingContract.vote(
  //   targetUser,
  //   encryptedVotingCount.handles[0],
  //   encryptedVotingCount.inputProof,
  // );

  return [
    targetUser,
    encryptedVotingCount.handles[0],
    encryptedVotingCount.inputProof
  ]
}