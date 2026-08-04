import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";


import {
    applyInternship
} from "@/api/application.api";


import toast from "react-hot-toast";



export default function useApplyInternship(){


    const queryClient =
    useQueryClient();



    return useMutation({


        mutationFn:applyInternship,


        onSuccess:()=>{


            toast.success(
                "Application submitted successfully"
            );


            queryClient.invalidateQueries({

                queryKey:[
                    "my-applications"
                ]

            });


        },


        onError:(error)=>{


            toast.error(

                error?.response?.data?.message
                ||
                "Application failed"

            );


        }


    });


}