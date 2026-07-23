import { useQuery } from "@tanstack/react-query";

import {
    getEmployerProfile
} from "@/api/employer.api";



export default function useEmployerProfile(){

    return useQuery({

        queryKey:[
            "employer-profile"
        ],

        queryFn:getEmployerProfile

    });

}