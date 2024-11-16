import { useMutation as useTanstackMutation } from "@tanstack/react-query";

export function useMutation(options = {}) {
  return useTanstackMutation(options);
}
