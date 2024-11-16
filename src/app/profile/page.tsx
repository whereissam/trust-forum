"use client";

import { useWeb3Auth } from "@web3auth/modal-react-hooks";

{
  /* TODO: allow input of other usernames so it shows profiles of other users */
}
export default function ProfilePage() {
  const { userInfo, isInitialized } = useWeb3Auth();

  if (!isInitialized) {
    return null;
  }

  return (
    <div>
      <p>Profile: {JSON.stringify(userInfo)}</p>
    </div>
  );
}
