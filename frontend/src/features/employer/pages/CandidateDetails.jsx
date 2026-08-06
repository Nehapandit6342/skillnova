import { useParams, useNavigate } from "react-router-dom";

import useCandidateDetails from "../hooks/useCandidateDetails";



export default function CandidateDetails(){


    const { id } = useParams();

    const navigate = useNavigate();



    const {
        data,
        isLoading,
        isError
    } = useCandidateDetails(id);




    const candidate = data?.data;





    if(isLoading){

        return (

            <div className="p-6">

                Loading candidate details...

            </div>

        );

    }





    if(isError || !candidate){

        return (

            <div className="p-6 text-red-500">

                Candidate not found.

            </div>

        );

    }





    const student = candidate.student;





    return (

        <div className="space-y-6">



            {/* Back Button */}

            <button

                onClick={()=>navigate(-1)}

                className="
                bg-gray-200
                px-4
                py-2
                rounded-lg
                "

            >

                ← Back

            </button>







            {/* Header */}

            <div
            className="
            bg-white
            border
            rounded-xl
            p-6
            shadow-sm
            "
            >


                <div className="flex justify-between">


                    <div>


                        <h1
                        className="
                        text-2xl
                        font-bold
                        "
                        >

                            {
                                student?.user?.name
                            }

                        </h1>



                        <p className="text-gray-600">

                            {
                                student?.user?.email
                            }

                        </p>


                    </div>




                    <span
                    className="
                    bg-green-100
                    text-green-700
                    px-4
                    py-2
                    rounded-full
                    font-semibold
                    "
                    >

                        {
                            candidate.status
                        }

                    </span>


                </div>



            </div>










            {/* Student Profile */}


            <div
            className="
            bg-white
            border
            rounded-xl
            p-6
            "
            >


                <h2
                className="
                text-xl
                font-bold
                mb-4
                "
                >

                    Student Information

                </h2>




                <div className="space-y-2">


                    <p>

                    <b>
                    Phone:
                    </b>

                    {" "}

                    {
                        candidate.phone ||
                        student.phone ||
                        "N/A"
                    }

                    </p>




                    <p>

                    <b>
                    College:
                    </b>

                    {" "}

                    {
                        student.college ||
                        "N/A"
                    }

                    </p>




                    <p>

                    <b>
                    Degree:
                    </b>

                    {" "}

                    {
                        student.degree ||
                        "N/A"
                    }

                    </p>




                    <p>

                    <b>
                    Semester:
                    </b>

                    {" "}

                    {
                        student.semester ||
                        "N/A"
                    }

                    </p>




                    <p>

                    <b>
                    CGPA:
                    </b>

                    {" "}

                    {
                        student.cgpa ||
                        "N/A"
                    }

                    </p>




                    <p>

                    <b>
                    Skills:
                    </b>

                    {" "}

                    {
                        student.skills?.length
                        ?
                        student.skills.join(", ")
                        :
                        "N/A"
                    }

                    </p>



                </div>


            </div>









            {/* Application Details */}


            <div
            className="
            bg-white
            border
            rounded-xl
            p-6
            "
            >


                <h2
                className="
                text-xl
                font-bold
                mb-4
                "
                >

                    Application Details

                </h2>



                <div className="space-y-2">


                    <p>

                    <b>
                    Internship:
                    </b>

                    {" "}

                    {
                        candidate.internship?.title
                    }

                    </p>



                    <p>

                    <b>
                    Availability:
                    </b>

                    {" "}

                    {
                        candidate.availability ||
                        "N/A"
                    }

                    </p>




                    <p>

                    <b>
                    Cover Letter:
                    </b>

                    </p>


                    <p className="text-gray-600">

                        {
                            candidate.coverLetter ||
                            "No cover letter"
                        }

                    </p>


                </div>


            </div>









            {/* Links */}


            <div
            className="
            bg-white
            border
            rounded-xl
            p-6
            "
            >


                <h2
                className="
                text-xl
                font-bold
                mb-4
                "
                >

                    Portfolio & Resume

                </h2>




                <div className="space-y-3">


                    {
                        student.github &&

                        <p>

                            GitHub:

                            {" "}

                            <a
                            href={student.github}
                            target="_blank"
                            className="text-blue-600"
                            >

                                View

                            </a>

                        </p>
                    }





                    {
                        student.linkedin &&

                        <p>

                            LinkedIn:

                            {" "}

                            <a
                            href={student.linkedin}
                            target="_blank"
                            className="text-blue-600"
                            >

                                View

                            </a>

                        </p>
                    }






                    {
                        student.portfolio &&

                        <p>

                            Portfolio:

                            {" "}

                            <a
                            href={student.portfolio}
                            target="_blank"
                            className="text-blue-600"
                            >

                                View

                            </a>

                        </p>
                    }





                    {
                        candidate.resume &&

                        <p>

                            Resume:

                            {" "}

                            <a
                            href={candidate.resume}
                            target="_blank"
                            className="text-blue-600"
                            >

                                Open Resume

                            </a>

                        </p>

                    }



                </div>



            </div>



        </div>

    );

}