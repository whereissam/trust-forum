import { useQuery } from "@/helpers/api/hooks/useQuery";
import { getPolls } from "../api/getPolls";

export function useGetPolls() {
  return useQuery({
    queryKey: ["polls"],
    queryFn: async () => {
      return await getPolls();
    },
    retry: false,
  });
}
