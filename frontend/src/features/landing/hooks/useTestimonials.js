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
    // Backend testimonials endpoint doesn't exist yet — keep the query
    // disabled (the section hides itself when there's no data) instead of
    // firing a guaranteed-failing request on every homepage load.
    enabled: false,
  });
}
