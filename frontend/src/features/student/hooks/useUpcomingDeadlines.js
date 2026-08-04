import { useQuery } from "@tanstack/react-query";
import { getUpcomingDeadlines } from "../../../api/student.api";

export const useUpcomingDeadlines = () => {
  return useQuery({
    queryKey: ["upcoming-deadlines"],
    queryFn: getUpcomingDeadlines,
  });
};
