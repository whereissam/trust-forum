import { useQuery as useTanstackQuery } from "@tanstack/react-query";

export function useGeneralQuery(options = {}) {
  //Only used when login is not required (e.g. feature flags)

  return useTanstackQuery(options);
}
