import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";


import {
    createInternship
} from "@/api/internship.api";


import toast from "react-hot-toast";




export default function useCreateInternship(){


    const queryClient = useQueryClient();



    return useMutation({



        mutationFn:createInternship,



        onSuccess:(response)=>{


            toast.success(
                response?.message ||
                "Internship posted successfully"
            );



            // Refresh employer internship list

            queryClient.invalidateQueries({

                queryKey:[
                    "my-internships"
                ]

            });




            // Refresh dashboard numbers

            queryClient.invalidateQueries({

                queryKey:[
                    "employer-dashboard-stats"
                ]

            });




            // Refresh public internship list

            queryClient.invalidateQueries({

                queryKey:[
                    "internships"
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