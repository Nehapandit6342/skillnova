import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";


const getLatestInternships = async () => {

    const response = await api.get(
        "/internships/latest"
    );

    return response.data.data;

};



export default function useLatestInternships() {

    return useQuery({

        queryKey: ["latest-internships"],

        queryFn: getLatestInternships,

    });

}