import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStudentProfile } from "@/api/student.api";
import { useAuth } from "@/context/AuthContext";

export const useUpdateStudentProfile = () => {
  const queryClient = useQueryClient();
  const { updateUser } = useAuth();

  return useMutation({
    mutationFn: updateStudentProfile,

    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["student-profile"],
      });

      if (response.success && response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));

        // Update AuthContext
        updateUser(response.data);

        window.dispatchEvent(new Event("userUpdated"));
      }
    },
  });
};
