"use client";

import LeaderboardCard from "@/components/LeaderboardCard";
import PollCard from "@/components/PollCard";

export default function Home() {
  return (
    <div>
      <div className="mx-auto py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Ongoing Polls Section */}
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Ongoing Polls
            </h2>

            {/* Search Bar */}
            <div className="flex gap-4 mb-8">
              <input
                type="text"
                placeholder="Search polls..."
                className="flex-1 px-4 py-2 rounded-md bg-[#2D2D2D] text-white focus:outline-none"
              />
              <button className="px-6 py-2 bg-primary text-black rounded-md font-medium">
                Search
              </button>
            </div>

            {/* Polls Grid */}
            <div className="grid grid-cols-3 gap-6">
              <PollCard />
              <PollCard />
              <PollCard />
              <PollCard />
              <PollCard />
              <PollCard />
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Leaderboard
            </h2>
            <div className="space-y-4">
              <LeaderboardCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
