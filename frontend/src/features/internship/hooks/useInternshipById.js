import {
    useQuery
} from "@tanstack/react-query";


import {
    getInternshipById
} from "@/api/internship.api";



export default function useInternshipById(id){


    return useQuery({

        queryKey:[
            "internship",
            id
        ],


        queryFn:()=>getInternshipById(id),


        enabled:!!id


    });


}