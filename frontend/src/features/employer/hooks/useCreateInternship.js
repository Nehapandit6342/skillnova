import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";


import {
    createInternship
} from "@/api/internship.api";


import toast from "react-hot-toast";



export default function useCreateInternship(){

    const queryClient =
    useQueryClient();


    return useMutation({

        mutationFn:createInternship,


        onSuccess:()=>{


            toast.success(
                "Internship posted successfully"
            );


            queryClient.invalidateQueries({

                queryKey:[
                    "my-internships"
                ]

            });


            queryClient.invalidateQueries({

                queryKey:[
                    "employer-dashboard-stats"
                ]

            });


        },


        onError:(error)=>{


            toast.error(

                error?.response?.data?.message ||
                "Failed to create internship"

            );

        }


    });


}