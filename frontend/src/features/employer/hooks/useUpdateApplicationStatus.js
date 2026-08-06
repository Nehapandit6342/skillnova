import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";


import {
    updateApplicationStatus
} from "@/api/application.api";



export default function useUpdateApplicationStatus(){


    const queryClient = useQueryClient();



    return useMutation({


        mutationFn: updateApplicationStatus,



        onSuccess:()=>{


            queryClient.invalidateQueries({

                queryKey:[
                    "employer-applications"
                ]

            });



            queryClient.invalidateQueries({

                queryKey:[
                    "employer-candidates"
                ]

            });


        }



    });


}