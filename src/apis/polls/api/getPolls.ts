"use client";

import { get } from "@/helpers/api";

export function getPolls() {
  //   return get("api/fp/customers", { page: page, query: query });
  return Promise.resolve([
    {
      id: 1,
      title: "Are People Naturally Good or Evil?",
      startDate: "10/01/2023",
      endDate: "10/01/2023",
      image: "/people.avif",
      description: `This age-old philosophical question explores the fundamental nature of
                  human morality. Share your perspective on whether humans are
                  inherently good, naturally inclined towards evil, or shaped by their
                  environment.`,
      bounty: 500,
    },
    {
      id: 2,
      title: "Is sleeping early good for health?",
      startDate: "10/01/2023",
      endDate: "10/01/2023",
      image: "/sleep.avif",
      description: `This age-old philosophical question explores the fundamental nature of
                  human morality. Share your perspective on whether humans are
                  inherently good, naturally inclined towards evil, or shaped by their
                  environment.`,
      bounty: 500,
    },
    {
      id: 3,
      title: "Memes are art. Do you agree?",
      startDate: "10/01/2023",
      endDate: "10/01/2023",
      image: "/meme.avif",
      description: `This age-old philosophical question explores the fundamental nature of
                    human morality. Share your perspective on whether humans are
                    inherently good, naturally inclined towards evil, or shaped by their
                    environment.`,
      bounty: 500,
    },
  ]);
}
