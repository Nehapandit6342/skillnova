import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";


export default function useInternships() {


  return useQuery({

    queryKey: ["internships"],


    queryFn: async () => {


      const response = await api.get(
        "/admin/internships"
      );


      return response.data.data;


    },


  });


}