import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";


const getFeaturedCompanies = async () => {

  const response = await api.get(
    "/employer/featured"
  );

  return response.data.data;

};



function useFeaturedCompanies() {

  return useQuery({

    queryKey: ["featured-companies"],

    queryFn: getFeaturedCompanies,

  });

}


export default useFeaturedCompanies;