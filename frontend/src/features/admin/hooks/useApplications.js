import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";


export default function useApplications() {


  return useQuery({


    queryKey: ["applications"],


    queryFn: async () => {


      const response = await api.get(
        "/admin/applications"
      );


      return response.data.data;


    },


  });


}