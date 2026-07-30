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
        getEmployerApplications


    });


}