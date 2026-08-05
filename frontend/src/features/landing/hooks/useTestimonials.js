import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

const getTestimonials = async () => {
  const response = await api.get("/testimonials");
  return response.data.data;
};

export default function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });
}