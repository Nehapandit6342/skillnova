import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";


import {
    deleteInternship
} from "@/api/internship.api";


import toast from "react-hot-toast";



export default function useDeleteInternship(){


    const queryClient =
    useQueryClient();



    return useMutation({


        mutationFn: deleteInternship,


        onSuccess:()=>{


            toast.success(
                "Internship deleted successfully"
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
                "Delete failed"

            );


        }


    });


}