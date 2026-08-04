import { 
    useQuery 
} from "@tanstack/react-query";


import {
    getInternships
} from "@/api/internship.api";



export default function useInternships(){


    return useQuery({

        queryKey:[
            "internships"
        ],


        queryFn:getInternships


    });


}