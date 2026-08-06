import { useState } from "react";


import useEmployerApplications 
from "../hooks/useEmployerApplications";


import {
    updateApplicationStatus
} from "@/api/application.api";


import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";


import toast from "react-hot-toast";



export default function Applications(){


    const {
        data,
        isLoading,
        isError,
        error
    } = useEmployerApplications();




    const queryClient =
    useQueryClient();




    const [filter,setFilter] =
    useState("ALL");





    const statusMutation =
    useMutation({


        mutationFn:updateApplicationStatus,



        onSuccess:()=>{


            toast.success(
                "Application status updated"
            );



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



            queryClient.invalidateQueries({

                queryKey:[
                    "employer-dashboard-stats"
                ]

            });



        },


        onError:(error)=>{


            toast.error(

                error?.response?.data?.message
                ||
                "Failed to update status"

            );


        }


    });






    if(isLoading){

        return (

            <div className="p-6">

                Loading applications...

            </div>

        );

    }





    if(isError){

        return (

            <div className="
            p-6
            bg-red-50
            border
            rounded-xl
            text-red-600
            ">

                {
                    error?.response?.data?.message
                    ||
                    "Failed to load applications"
                }

            </div>

        );

    }





    const applications =
    data?.data || [];





    const filteredApplications =

    filter==="ALL"

    ?

    applications

    :

    applications.filter(

        application=>

        application.status===filter

    );







    const changeStatus=(id,status)=>{


        statusMutation.mutate({

            id,

            status

        });


    };






    return (

        <div className="space-y-6">


            <h1 className="
            text-2xl
            font-bold
            ">

                Applications

            </h1>





            <div className="flex gap-3 flex-wrap">


                {
                    [
                        "ALL",
                        "PENDING",
                        "REVIEWING",
                        "ACCEPTED",
                        "REJECTED"

                    ].map(status=>(


                        <button

                        key={status}

                        onClick={()=>setFilter(status)}

                        className={`
                        
                        px-4
                        py-2
                        rounded-lg
                        border

                        ${
                            filter===status
                            ?
                            "bg-blue-600 text-white"
                            :
                            "bg-white"
                        }

                        `}

                        >

                            {status}

                        </button>


                    ))
                }


            </div>






            {
                filteredApplications.length===0

                ?

                (

                    <div className="
                    bg-white
                    border
                    rounded-xl
                    p-6
                    ">

                        No applications found.

                    </div>

                )


                :


                (

                <div className="grid gap-5">


                {
                    filteredApplications.map(application=>(


                    <div

                    key={application.id}

                    className="
                    bg-white
                    border
                    rounded-xl
                    p-6
                    shadow-sm
                    "

                    >



                        <h2 className="
                        text-xl
                        font-bold
                        ">

                            {
                                application.internship?.title
                            }

                        </h2>





                        <div className="
                        mt-4
                        space-y-2
                        text-sm
                        ">


                            <p>
                                <b>Candidate:</b>{" "}
                                {
                                    application.student?.user?.name
                                }
                            </p>



                            <p>
                                <b>Email:</b>{" "}
                                {
                                    application.student?.user?.email
                                }
                            </p>



                            <p>
                                <b>College:</b>{" "}
                                {
                                    application.student?.college || "N/A"
                                }
                            </p>



                            <p>
                                <b>Degree:</b>{" "}
                                {
                                    application.student?.degree || "N/A"
                                }
                            </p>



                            <p>
                                <b>Skills:</b>{" "}
                                {
                                    application.student?.skills?.join(", ")
                                    ||
                                    "N/A"
                                }
                            </p>



                            <p>

                                <b>Status:</b>{" "}

                                <span className="font-semibold">

                                    {
                                        application.status
                                    }

                                </span>

                            </p>


                        </div>







                        {
                            !["ACCEPTED","REJECTED"]
                            .includes(application.status)

                            &&


                            <div className="
                            mt-5
                            flex
                            gap-3
                            ">



                                <button

                                disabled={
                                    statusMutation.isPending
                                }

                                onClick={()=>changeStatus(
                                    application.id,
                                    "ACCEPTED"
                                )}

                                className="
                                bg-green-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                disabled:opacity-50
                                "

                                >

                                    Accept

                                </button>





                                <button

                                disabled={
                                    statusMutation.isPending
                                }

                                onClick={()=>changeStatus(
                                    application.id,
                                    "REJECTED"
                                )}

                                className="
                                bg-red-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                disabled:opacity-50
                                "

                                >

                                    Reject

                                </button>



                            </div>


                        }



                    </div>


                    ))
                }


                </div>

                )

            }



        </div>

    );

}