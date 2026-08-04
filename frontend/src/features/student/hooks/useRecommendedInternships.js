import { useQuery } from "@tanstack/react-query";
import { getRecommendedInternships } from "@/api/ai.api";

export const useRecommendedInternships = () => {
  return useQuery({
    queryKey: ["recommended-internships"],
    queryFn: getRecommendedInternships,
  });
};
