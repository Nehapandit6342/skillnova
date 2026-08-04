import { useQuery } from "@tanstack/react-query";
import { getLearningPlan } from "@/api/ai.api";

export const useLearningPlan = () => {
  return useQuery({
    queryKey: ["learning-plan"],
    queryFn: getLearningPlan,
  });
};
