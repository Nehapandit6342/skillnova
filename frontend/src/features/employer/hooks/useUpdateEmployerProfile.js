import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";


import {
    updateEmployerProfile
} from "@/api/employer.api";


import toast from "react-hot-toast";



export default function useUpdateEmployerProfile(){


    const queryClient =
        useQueryClient();




    return useMutation({


        mutationFn:updateEmployerProfile,



        onSuccess:(data)=>{


            toast.success(

                data.message ||
                "Profile updated successfully"

            );



            queryClient.invalidateQueries({

                queryKey:[
                    "employer-profile"
                ]

            });


        },



        onError:(error)=>{


            toast.error(

                error.response?.data?.message
                ||
                "Failed to update profile"

            );


        }


    });


}