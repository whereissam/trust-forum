import { getFhevmInstance } from "./index";
import { VoteContractAddress } from "../../contracts/voteContract";

/**
 *
 * @param {*} votingContract
 * @param {*} signersAddress
 * @param {string} targetUser
 * @param {number} like like = 1, dislike = 0
 */
export async function getVoteUserParams(
  signersAddress: string,
  targetUser: string,
  like: 1 | 0
) {
  const instance = await getFhevmInstance();
  const input = instance.createEncryptedInput(
    VoteContractAddress,
    signersAddress
  );
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
    encryptedVotingCount.inputProof,
  ];
}
