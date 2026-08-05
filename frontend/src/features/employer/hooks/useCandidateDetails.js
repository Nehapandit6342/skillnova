import { useQuery } from "@tanstack/react-query";

import {
    getCandidateDetails
} from "@/api/candidate.api";



export default function useCandidateDetails(id) {


    return useQuery({


        queryKey: [
            "candidate-details",
            id
        ],



        queryFn: () => getCandidateDetails(id),



        enabled: !!id


    });


}