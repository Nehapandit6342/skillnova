import {
    useQuery
} from "@tanstack/react-query";


import {
    getApplicationTrend
} from "@/api/dashboard.api";



export default function useApplicationTrend(){


    return useQuery({


        queryKey:[

            "application-trend"

        ],



        queryFn:
        getApplicationTrend,



        staleTime:
        1000 * 60 * 5,


        retry:1


    });


}