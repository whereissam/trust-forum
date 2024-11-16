"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPoll } from "../api/createPoll";

export function useCreatePoll() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPoll,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["polls"] });
    },
  });
}
