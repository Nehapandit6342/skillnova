import { useQuery } from "@tanstack/react-query";

import {
    getEmployerProfile
} from "@/api/employer.api";

import {
    useAuth
} from "@/context/AuthContext";



export default function useEmployerProfile(){


    const {
        token
    } = useAuth();



    return useQuery({

        queryKey:[
            "employer-profile"
        ],


        queryFn:getEmployerProfile,


        enabled:!!token,


        retry:1,


        staleTime:1000 * 60 * 5

    });


}