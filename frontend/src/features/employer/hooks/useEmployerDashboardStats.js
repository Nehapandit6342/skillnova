import { 
    useQuery 
} from "@tanstack/react-query";


import {
    getEmployerDashboardStats
} from "@/api/dashboard.api";



export default function useEmployerDashboardStats(){


    return useQuery({


        queryKey:[

            "employer-dashboard-stats"

        ],



        queryFn:

        getEmployerDashboardStats,



        staleTime:

        1000 * 60 * 5,



        retry:1,



        refetchOnWindowFocus:false


    });


}