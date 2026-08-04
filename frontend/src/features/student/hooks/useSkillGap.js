import { useQuery } from "@tanstack/react-query";
import { getSkillGap } from "@/api/ai.api";

export const useSkillGap = () => {
  return useQuery({
    queryKey: ["skill-gap"],
    queryFn: getSkillGap,
  });
};
