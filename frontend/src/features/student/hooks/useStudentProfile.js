import { useQuery } from "@tanstack/react-query";
import { getStudentProfile } from "@/api/student.api";

export const useStudentProfile = () => {
  return useQuery({
    queryKey: ["student-profile"],
    queryFn: getStudentProfile,
  });
};
