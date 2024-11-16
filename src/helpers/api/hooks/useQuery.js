import { useQuery as useTanstackQuery } from "@tanstack/react-query";

export function useQuery(options = {}) {
  const { queryKey, queryFn, ...remainingOptions } = options;

  // let enabled;
  // if (typeof remainingOptions.enabled !== "undefined") {
  //   enabled = remainingOptions.enabled;
  // } else {
  //   enabled = !!targetId;
  // }

  return useTanstackQuery({
    ...remainingOptions,
    queryKey: [...queryKey],
    queryFn: queryFn,
    // enabled,
    retry: false,
  });
}
