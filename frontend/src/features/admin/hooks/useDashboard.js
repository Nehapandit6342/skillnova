import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";


export default function useDashboard(){


  const fetchDashboard = async()=>{

    const response = await api.get(
      "/admin/dashboard"
    );

    return response.data.data;

  };



  const result = useQuery({

    queryKey:["admin-dashboard"],

    queryFn:fetchDashboard,

  });



  return result;

}