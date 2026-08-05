import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

const getHomeData = async () => {
  const { data } = await api.get("/public/home");
  return data.data;
};

export default function useHome() {
  return useQuery({
    queryKey: ["home"],
    queryFn: getHomeData,
  });
}