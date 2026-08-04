import { useMutation, useQueryClient } from "@tanstack/react-query";
import { analyzeResume } from "@/api/ai.api";
import toast from "react-hot-toast";

export const useAnalyzeResume = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: analyzeResume,

    onSuccess: () => {
      toast.success("Resume uploaded successfully!");

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
      toast.error("Resume upload failed.");
    },
  });
};
