import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStudentProfile } from "@/api/student.api";

export const useUpdateStudentProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStudentProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["student-profile"],
      });
    },
  });
};
