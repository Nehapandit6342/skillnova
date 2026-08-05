import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";


export default function useStudents() {

  return useQuery({

    queryKey: ["students"],


    queryFn: async () => {

      const response = await api.get(
        "/admin/students"
      );


      return response.data.data;   // 👈 yaha change

    },

  });

}