import { useState } from "react";

import useEmployerApplications from "../hooks/useEmployerApplications";

import {
    updateApplicationStatus
} from "@/api/application.api";


import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";



export default function Applications(){



    const {
        data,
        isLoading
    } = useEmployerApplications();




    const queryClient = useQueryClient();



    const [filter,setFilter] = useState("ALL");





    const statusMutation = useMutation({


        mutationFn:updateApplicationStatus,


        onSuccess:()=>{


            queryClient.invalidateQueries({

                queryKey:[
                    "employer-applications"
                ]

            });


            queryClient.invalidateQueries({

                queryKey:[
                    "candidates"
                ]

            });


        }


    });







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









    if(isLoading){


        return (

            <p>
                Loading applications...
            </p>

        );


    }









    return (


        <div className="space-y-6">



            <h1 className="text-2xl font-bold">

                Applications

            </h1>







            {/* FILTER */}

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

                    <div
                    className="
                    bg-white
                    border
                    rounded-xl
                    p-6
                    "
                    >

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





                <h2
                className="
                text-xl
                font-bold
                "
                >

                    {
                        application.internship?.title
                    }


                </h2>







                <div
                className="
                mt-4
                space-y-2
                text-sm
                "
                >



                    <p>

                    <b>
                    Candidate:
                    </b>

                    {" "}

                    {
                        application.student?.user?.name
                    }

                    </p>





                    <p>

                    <b>
                    Email:
                    </b>

                    {" "}

                    {
                        application.student?.user?.email
                    }

                    </p>





                    <p>

                    <b>
                    College:
                    </b>

                    {" "}

                    {
                        application.student?.college || "N/A"
                    }

                    </p>





                    <p>

                    <b>
                    Degree:
                    </b>

                    {" "}

                    {
                        application.student?.degree || "N/A"
                    }

                    </p>






                    <p>

                    <b>
                    Skills:
                    </b>

                    {" "}

                    {

                    application.student?.skills?.join(", ")

                    ||

                    "N/A"

                    }


                    </p>





                    <p>

                    <b>
                    Status:
                    </b>


                    {" "}


                    <span className="font-semibold">


                    {
                        application.status
                    }


                    </span>



                    </p>



                </div>










                {
                    application.status !== "ACCEPTED"

                    &&

                    application.status !== "REJECTED"

                    &&


                    (

                    <div
                    className="
                    mt-5
                    flex
                    gap-3
                    "
                    >




                        <button


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
                        "
                        >

                            Accept

                        </button>







                        <button


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
                        "
                        >

                            Reject

                        </button>




                    </div>


                    )

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