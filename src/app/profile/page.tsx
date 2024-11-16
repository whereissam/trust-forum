"use client";

// import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import { useSession } from "next-auth/react";

{
  /* TODO: allow input of other usernames so it shows profiles of other users */
}
export default function ProfilePage() {
  // const { userInfo, isInitialized } = useWeb3Auth();
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>Not logged in</p>
      </div>
    );
  }

  return (
    <div>
      <p>Profile: {JSON.stringify(session?.user)}</p>
    </div>
  );
}
