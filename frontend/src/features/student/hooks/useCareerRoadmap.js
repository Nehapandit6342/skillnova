import { useQuery } from "@tanstack/react-query";
import { getCareerRoadmap } from "@/api/ai.api";

export const useCareerRoadmap = () => {
  return useQuery({
    queryKey: ["career-roadmap"],
    queryFn: getCareerRoadmap,
  });
};
