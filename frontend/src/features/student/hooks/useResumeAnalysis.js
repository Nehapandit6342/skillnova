import { useQuery } from "@tanstack/react-query";
import { getResumeAnalysis } from "@/api/ai.api";

export const useResumeAnalysis = () => {
  return useQuery({
    queryKey: ["resume-analysis"],
    queryFn: getResumeAnalysis,
  });
};
