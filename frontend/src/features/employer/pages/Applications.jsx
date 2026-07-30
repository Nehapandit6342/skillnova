import useEmployerApplications from "../hooks/useEmployerApplications";


export default function Applications(){


    const {
        data,
        isLoading
    } = useEmployerApplications();



    const applications =
    data?.data || [];



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




            {
                applications.length === 0

                ?

                <div
                className="
                bg-white
                border
                rounded-xl
                p-6
                "
                >

                    No applications received yet.

                </div>


                :


                <div className="grid gap-5">


                    {
                        applications.map((application)=>(


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
                                className="text-xl font-bold"
                                >

                                    {
                                        application.internship?.title
                                    }

                                </h2>





                                <div className="mt-3 space-y-2">


                                    <p>

                                        Candidate:
                                        {" "}

                                        {
                                            application.student
                                            ?.user
                                            ?.name
                                        }

                                    </p>





                                    <p>

                                        Email:
                                        {" "}

                                        {
                                            application.student
                                            ?.user
                                            ?.email
                                        }

                                    </p>





                                    <p>

                                        Education:
                                        {" "}

                                        {
                                            application.student
                                            ?.college || "N/A"
                                        }

                                    </p>





                                    <p>

                                        Status:
                                        {" "}

                                        <span
                                        className="
                                        font-semibold
                                        "
                                        >

                                        {
                                            application.status
                                        }

                                        </span>

                                    </p>



                                </div>





                                <div className="mt-5 flex gap-3">


                                    <button

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




                            </div>


                        ))
                    }


                </div>

            }



        </div>

    );

}