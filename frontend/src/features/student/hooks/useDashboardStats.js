import { useQuery } from "@tanstack/react-query";
import { getResumeAnalysis, getLearningPlan } from "@/api/ai.api";

export const useDashboardStats = () => {
  const resumeQuery = useQuery({
    queryKey: ["resume-analysis"],
    queryFn: getResumeAnalysis,
  });

  const learningQuery = useQuery({
    queryKey: ["learning-plan"],
    queryFn: getLearningPlan,
  });

  return {
    resumeQuery,
    learningQuery,
  };
};
