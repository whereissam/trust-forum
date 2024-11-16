"use client";

import ConfirmVoteModal from "@/components/ConfirmVoteModal";
import DebateComments from "@/components/DebateComments";
import Image from "next/image";
import { use, useState } from "react";
import { format } from "date-fns";

const debateComments = [
  {
    name: "John Doe",
    username: "johndoe",
    votedFor: "yes",
    avatarUrl: "/shines_logo.png",
    comment:
      "I believe humans are inherently good. We are born with empathy and compassion, though our experiences can shape how we express these innate qualities.",
    createdAt: new Date("2024-11-12"),
    isLiked: false,
  },
  {
    name: "Jane Doe",
    username: "janedoe",
    votedFor: "no",
    avatarUrl: "/shines_logo.png",
    comment:
      "I believe humans are inherently bad. If there weren't laws and regulations, we would have committed the worst crimes.",
    createdAt: new Date("2024-11-14"),
    isLiked: true,
  },
];

export default function PollsDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [selected, setSelected] = useState<null | string>(null);
  const [isVoted, setIsVoted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="mx-auto py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Section */}
          <div className="col-span-12 md:col-span-9">
            <h1 className="text-4xl font-bold text-white mb-6">
              Are People Naturally Good or Evil?
            </h1>

            <div className="mb-6 rounded-lg border border-primary h-[450px] relative">
              <Image
                src="/shines_logo.png"
                fill
                alt="Poll Image"
                className="rounded-lg"
              />
            </div>

            <div className="text-gray-300 mb-6">
              <h3 className="text-xl text-primary font-bold">Description</h3>
              <p>
                This age-old philosophical question explores the fundamental
                nature of human morality. Share your perspective on whether
                humans are inherently good, naturally inclined towards evil, or
                shaped by their environment.
              </p>
            </div>

            {/* Debate Section */}
            <div>
              <h3 className="text-xl text-primary font-bold">Debate</h3>
              {debateComments.map((comment) => (
                <DebateComments
                  key={comment.username}
                  name={comment.name}
                  username={comment.username}
                  votedFor={comment.votedFor}
                  isLiked={comment.isLiked}
                  comment={comment.comment}
                  avatarUrl={comment.avatarUrl}
                  createdAt={format(comment.createdAt, "yyyy-MM-dd HH:mm")}
                />
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="col-span-12 md:col-span-3">
            <div className="bg-[#2D2D2D] rounded-lg p-6">
              {/* User Info */}
              <div className="flex items-center mb-6">
                <Image
                  src="/shines_logo.png"
                  width={40}
                  height={40}
                  alt="User Avatar"
                  className="rounded-full"
                />
                <div className="ml-3">
                  <div className="text-white font-semibold">John Doe</div>
                  <div className="text-gray-400 text-sm">@johndoe</div>
                </div>
              </div>

              {/* Poll Date */}
              <div className="mb-4">
                <div className="text-primary-purple flex items-center font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#808080]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  10/01/2023 - 17/01/2023
                </div>
              </div>

              {/* Vote Count */}
              <div className="mb-4">
                <div className="flex items-center text-primary-purple font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#808080]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  236 people voted
                </div>
                {/* Poll Bounty */}
                <div className="mt-3 flex items-center text-primary font-bold text-2xl">
                  <span className="text-xs">$</span>
                  <span className="">500</span>
                </div>
              </div>

              {/* Voting Section */}
              <div className="space-y-4">
                {/* YES */}
                <div
                  className={`relative flex items-center uppercase rounded-lg border border-solid ${
                    selected === "yes" && !isVoted
                      ? "border-primary"
                      : "border-white"
                  }`}
                  onClick={() => {
                    const input = document.getElementById(
                      "yes"
                    ) as HTMLInputElement;
                    input.checked = true;
                    setSelected("yes");
                  }}
                >
                  {/* Progress Bar - YES */}
                  <div
                    className={`p-3 rounded-md overflow-hidden flex items-center ${
                      isVoted ? "w-[60%] bg-primary" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id="yes"
                      name="vote"
                      className="appearance-none w-5 h-5 rounded-full border-2 border-white checked:border-primary relative mr-3
                    checked:before:content-[''] checked:before:absolute checked:before:w-3 checked:before:h-3 
                    checked:before:bg-primary checked:before:rounded-full checked:before:top-1/2 checked:before:left-1/2 
                    checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      onChange={() => setSelected("yes")}
                    />
                    <label
                      htmlFor="yes"
                      className={`font-bold ${
                        selected === "yes" ? "text-primary" : "text-white"
                      }`}
                    >
                      Yes
                    </label>
                  </div>
                  {/* Display voter count at the right */}
                  <span className="ml-auto pr-3 flex items-center text-[#808080] font-medium">
                    {/* user icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="text-sm">123</p>
                  </span>
                </div>
                {/* NO */}
                <div
                  className={`relative flex items-center uppercase rounded-lg border border-solid ${
                    selected === "no" && !isVoted
                      ? "border-primary-purple"
                      : "border-white"
                  }`}
                  onClick={() => {
                    const input = document.getElementById(
                      "no"
                    ) as HTMLInputElement;
                    input.checked = true;
                    setSelected("no");
                  }}
                >
                  {/* Progress Bar - NO */}
                  <div
                    className={`p-3 rounded-md overflow-hidden flex items-center ${
                      isVoted ? "w-[40%] bg-primary-purple" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id="no"
                      name="vote"
                      className="appearance-none w-5 h-5 rounded-full border-2 border-white checked:border-primary-purple relative mr-3
                    checked:before:content-[''] checked:before:absolute checked:before:w-3 checked:before:h-3 
                    checked:before:bg-primary-purple checked:before:rounded-full checked:before:top-1/2 checked:before:left-1/2 
                    checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      onChange={() => setSelected("no")}
                    />
                    <label
                      htmlFor="no"
                      className={`font-bold ${
                        selected === "no" ? "text-primary-purple" : "text-white"
                      }`}
                    >
                      No
                    </label>
                  </div>
                  {/* Display voter count at the right */}
                  <span className="ml-auto pr-3 flex items-center text-[#808080] font-medium">
                    {/* user icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="text-sm">123</p>
                  </span>
                </div>

                <button
                  className={`w-full py-2 rounded-md font-bold text-xl ${
                    selected
                      ? "bg-primary text-black"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!selected}
                  onClick={() => setOpenModal(true)}
                >
                  Vote Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!!selected && (
        <ConfirmVoteModal
          openModal={openModal}
          setOpen={setOpenModal}
          votedFor={selected}
        />
      )}
    </div>
  );
}
