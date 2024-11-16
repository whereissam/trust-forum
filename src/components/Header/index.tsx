/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWeb3Auth } from "@web3auth/modal-react-hooks";

const paths = [
  {
    path: "/",
    name: "Questions",
  },
  {
    path: "/results",
    name: "Results",
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
  },
];

export default function Header() {
  const { userInfo, connect, logout, isConnected } = useWeb3Auth();
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-md">
      {/* HEADER */}
      <div className="px-3 py-4 flex items-center justify-between">
        <div className="pl-5">
          <Image src="/shines_logo.png" height={35} width={120} alt="logo" />
        </div>

        {/* NAVIGATIONS */}
        <div className="flex items-center space-between gap-x-5">
          {paths.map((path) => (
            <Link
              key={path.path}
              href={path.path}
              className={`transition-all duration-200 hover:text-blue-500 ${
                pathname === path.path ? "border-b-2 border-blue-500" : ""
              }`}
            >
              {path.name}
            </Link>
          ))}
        </div>

        {/* USER DATA AND PROFILE */}
        <div className="pr-5 flex items-center gap-x-2">
          {isConnected ? (
            <>
              <button
                onClick={() => {
                  logout();
                }}
                className="text-white bg-blue-400 rounded px-3 py-1"
              >
                Hello {userInfo?.name} Logout
              </button>

              <a
                href="/profile"
                className="text-white bg-blue-400 rounded px-3 py-1"
              >
                Profile
              </a>
            </>
          ) : (
            <>
              <button
                onClick={connect}
                className="text-white bg-blue-400 rounded px-3 py-1"
              >
                Web3
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
