import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reAnalyzeResume } from "@/api/ai.api";
import toast from "react-hot-toast";

export const useReAnalyzeResume = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reAnalyzeResume,

    onSuccess: () => {
      toast.success("Resume analyzed successfully!");

      queryClient.invalidateQueries({
        queryKey: ["resume-analysis"],
      });

      queryClient.invalidateQueries({
        queryKey: ["skill-gap"],
      });

      queryClient.invalidateQueries({
        queryKey: ["recommended-internships"],
      });

      queryClient.invalidateQueries({
        queryKey: ["career-roadmap"],
      });

      queryClient.invalidateQueries({
        queryKey: ["learning-plan"],
      });
    },

    onError: () => {
      toast.error("Resume analysis failed.");
    },
  });
};
