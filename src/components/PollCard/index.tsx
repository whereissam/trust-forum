import Image from "next/image";
import Link from "next/link";

interface PollCardProps {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
  bounty: number;
}

export default function PollCard({
  id = 1,
  title = "Are People Naturally Good or Evil?",
  startDate = "10/01/2023",
  endDate = "10/01/2023",
  image = "/shines_logo.png",
  description = `This age-old philosophical question explores the fundamental nature of
          human morality. Share your perspective on whether humans are
          inherently good, naturally inclined towards evil, or shaped by their
          environment.`,
  bounty = 500,
}: PollCardProps) {
  return (
    <Link href={`/polls/${id}`}>
      <div className="bg-[#2D2D2D] rounded-md p-3">
        {/* Image */}
        <div className="relative w-full h-[150px]">
          <Image
            className="object-cover"
            src={image}
            fill
            alt="Poll placeholder image"
          />
        </div>
        {/* Poll Title */}
        <div className="text-2xl text-white font-bold">{title}</div>
        {/* Poll Valid Date, with time icon */}
        <div className="flex items-center mt-2 text-[#808080]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
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
          <span className="text-primary-purple text-sm font-medium">
            {startDate} - {endDate}
          </span>
        </div>

        {/* Poll Description, Truncated */}
        <div className="mt-2 text-gray-300 line-clamp-2">{description}</div>

        {/* Poll Bounty */}
        <div className="mt-3 flex items-center text-primary font-bold text-xl">
          <span className="text-xs">$</span>
          <span className="">{bounty}</span>
        </div>
      </div>
    </Link>
  );
}
