import { useQuery } from "@tanstack/react-query";
import { getStudentDashboardStats } from "@/api/studentDashboard.api";

export const useStudentDashboard = () => {
  return useQuery({
    queryKey: ["student-dashboard"],
    queryFn: getStudentDashboardStats,
  });
};
