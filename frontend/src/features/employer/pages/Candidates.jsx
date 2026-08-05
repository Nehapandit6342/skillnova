import { useNavigate } from "react-router-dom";

import useCandidates from "../hooks/useCandidates";



export default function Candidates(){


    const navigate = useNavigate();



    const {
        data,
        isLoading
    } = useCandidates();




    const candidates =
    data?.data || [];





    if(isLoading){

        return (

            <div className="p-6">

                Loading candidates...

            </div>

        );

    }








    return (


        <div className="space-y-6">



            <h1 className="text-2xl font-bold">

                Accepted Candidates

            </h1>







            {
                candidates.length === 0


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

                        No accepted candidates yet.


                    </div>


                )



                :



                (

                <div className="grid gap-5">





                {
                    candidates.map((application)=>(




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







                    {/* Header */}


                    <div
                    className="
                    flex
                    justify-between
                    items-start
                    "
                    >



                        <div>


                            <h2
                            className="
                            text-xl
                            font-bold
                            "
                            >

                                {
                                    application.student?.user?.name
                                    ||
                                    "Unknown Candidate"
                                }


                            </h2>




                            <p className="text-gray-600">


                                {
                                    application.student?.user?.email
                                    ||
                                    "No email"
                                }


                            </p>



                        </div>





                        <span

                        className="
                        bg-green-100
                        text-green-700
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-semibold
                        "

                        >

                            ACCEPTED


                        </span>



                    </div>









                    {/* Details */}


                    <div

                    className="
                    mt-5
                    space-y-2
                    text-sm
                    "

                    >




                        <p>

                            <b>
                            Internship:
                            </b>

                            {" "}

                            {
                                application.internship?.title
                                ||
                                "N/A"
                            }

                        </p>






                        <p>

                            <b>
                            College:
                            </b>

                            {" "}

                            {
                                application.student?.college
                                ||
                                "N/A"
                            }


                        </p>







                        <p>

                            <b>
                            Degree:
                            </b>

                            {" "}

                            {
                                application.student?.degree
                                ||
                                "N/A"
                            }


                        </p>







                        <p>

                            <b>
                            Semester:
                            </b>

                            {" "}

                            {
                                application.student?.semester
                                ||
                                "N/A"
                            }


                        </p>







                        <p>

                            <b>
                            CGPA:
                            </b>

                            {" "}

                            {
                                application.student?.cgpa
                                ||
                                "N/A"
                            }


                        </p>







                        <p>

                            <b>
                            Skills:
                            </b>

                            {" "}

                            {

                            application.student?.skills?.length

                            ?

                            application.student.skills.join(", ")

                            :

                            "N/A"

                            }


                        </p>







                        <p>

                            <b>
                            Phone:
                            </b>

                            {" "}

                            {
                                application.phone
                                ||
                                application.student?.phone
                                ||
                                "N/A"
                            }


                        </p>





                    </div>









                    {/* Actions */}


                    <div

                    className="
                    mt-6
                    flex
                    gap-3
                    "

                    >





                        <button


                        onClick={()=>{


                            navigate(
                                `/employer/candidates/${application.id}`
                            )


                        }}


                        className="
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        "

                        >

                            View Profile


                        </button>








                        {

                        application.student?.resumeUrl &&

                        (

                        <a


                        href={application.student.resumeUrl}


                        target="_blank"


                        rel="noopener noreferrer"


                        className="
                        bg-gray-800
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        "

                        >

                            View Resume


                        </a>


                        )

                        }





                    </div>







                    </div>




                    ))

                }






                </div>


                )

            }





        </div>


    );

}