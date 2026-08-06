import {
    useQuery
} from "@tanstack/react-query";


import {
    getApplicationStatus
} from "@/api/dashboard.api";



export default function useApplicationStatus(){


    return useQuery({


        queryKey:[

            "application-status"

        ],



        queryFn:
        getApplicationStatus,



        staleTime:
        1000 * 60 * 5,


        retry:1


    });


}