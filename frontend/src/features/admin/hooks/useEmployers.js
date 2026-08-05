import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";


export default function useEmployers() {


  return useQuery({

    queryKey:["employers"],


    queryFn: async()=>{


      const response = await api.get(
        "/admin/employers"
      );


      return response.data.data;


    }


  });


}