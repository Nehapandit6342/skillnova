import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";


import {
    updateInternship
} from "@/api/internship.api";


import toast from "react-hot-toast";



export default function useUpdateInternship(){


    const queryClient =
    useQueryClient();



    return useMutation({


        mutationFn:updateInternship,



        onSuccess:()=>{


            toast.success(
                "Internship updated successfully"
            );



            queryClient.invalidateQueries({

                queryKey:[
                    "my-internships"
                ]

            });


        },



        onError:(error)=>{


            toast.error(

                error.response?.data?.message
                ||
                "Update failed"

            );


        }


    });


}