import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

const getLatestInternships = async () => {
  const { data } = await api.get("/internships");

  const internships = data.data || [];

  return [...internships]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);
};

export default function useLatestInternships() {
  return useQuery({
    queryKey: ["latest-internships"],
    queryFn: getLatestInternships,
  });
}
