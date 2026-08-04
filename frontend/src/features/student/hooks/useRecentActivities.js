import { useQuery } from "@tanstack/react-query";
import { getRecentActivities } from "../../../api/student.api";

export const useRecentActivities = () => {
  return useQuery({
    queryKey: ["recent-activities"],
    queryFn: getRecentActivities,
  });
};
