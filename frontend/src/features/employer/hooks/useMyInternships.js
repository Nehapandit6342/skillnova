import {
    useQuery
} from "@tanstack/react-query";


import {
    getMyInternships
} from "@/api/internship.api";




export default function useMyInternships(){



    return useQuery({



        queryKey:[
            "my-internships"
        ],




        queryFn:getMyInternships,




        staleTime:
        1000 * 30,




        retry:1



    });


}