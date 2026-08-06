import { 
    useQuery 
} from "@tanstack/react-query";


import {
    getCandidates
} from "@/api/candidate.api";



export default function useCandidates() {


    return useQuery({


        queryKey: [
            "employer-candidates"
        ],



        queryFn: getCandidates



    });


}