import {
    useQuery
} from "@tanstack/react-query";


import {
    getEmployerApplications
} from "@/api/application.api";



export default function useEmployerApplications(){


    return useQuery({


        queryKey:[

            "employer-applications"

        ],



        queryFn:

        getEmployerApplications,



        staleTime:

        1000 * 60 * 5,



        retry:1,



        refetchOnWindowFocus:false


    });


}