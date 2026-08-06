import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import useCandidateDetails from "../hooks/useCandidateDetails";


// Convert Cloudinary attachment URL to inline preview URL
const getPreviewUrl = (url) => {

    if (!url) return "";

    return url.replace(
        "/upload/",
        "/upload/fl_inline/"
    );

};



export default function CandidateDetails() {


    const { id } = useParams();

    const navigate = useNavigate();


    const [resumePreview, setResumePreview] = useState(null);



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




    const student = candidate.student || {};





    return (

        <div className="space-y-6">



            {/* Back Button */}

            <button

                onClick={() => navigate(-1)}

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


                        <h1 className="text-2xl font-bold">

                            {
                                student.user?.name ||
                                "Unknown Student"
                            }

                        </h1>



                        <p className="text-gray-600">

                            {
                                student.user?.email ||
                                "No email"
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

                        {candidate.status}

                    </span>


                </div>


            </div>









            {/* Student Information */}


            <div
                className="
                bg-white
                border
                rounded-xl
                p-6
                "
            >

                <h2 className="text-xl font-bold mb-4">
                    Student Information
                </h2>




                <div className="space-y-2">


                    <p>
                        <b>Phone:</b>{" "}
                        {
                            candidate.phone ||
                            student.phone ||
                            "N/A"
                        }
                    </p>



                    <p>
                        <b>College:</b>{" "}
                        {
                            student.college ||
                            "N/A"
                        }
                    </p>



                    <p>
                        <b>Degree:</b>{" "}
                        {
                            student.degree ||
                            "N/A"
                        }
                    </p>



                    <p>
                        <b>Semester:</b>{" "}
                        {
                            student.semester ||
                            "N/A"
                        }
                    </p>



                    <p>
                        <b>CGPA:</b>{" "}
                        {
                            student.cgpa ||
                            "N/A"
                        }
                    </p>



                    <p>

                        <b>Skills:</b>{" "}

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

                <h2 className="text-xl font-bold mb-4">
                    Application Details
                </h2>



                <div className="space-y-2">


                    <p>

                        <b>Internship:</b>{" "}

                        {
                            candidate.internship?.title ||
                            "N/A"
                        }

                    </p>



                    <p>

                        <b>Availability:</b>{" "}

                        {
                            candidate.availability ||
                            "N/A"
                        }

                    </p>




                    <p>
                        <b>Cover Letter:</b>
                    </p>



                    <p className="text-gray-600">

                        {
                            candidate.coverLetter ||
                            "No cover letter"
                        }

                    </p>


                </div>


            </div>









            {/* Portfolio & Resume */}


            <div
                className="
                bg-white
                border
                rounded-xl
                p-6
                "
            >


                <h2 className="text-xl font-bold mb-4">
                    Portfolio & Resume
                </h2>




                <div className="space-y-4">






                    {
                        student.github &&

                        <p>

                            <b>GitHub:</b>{" "}

                            <a
                                href={student.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >

                                View

                            </a>

                        </p>

                    }







                    {
                        student.linkedin &&

                        <p>

                            <b>LinkedIn:</b>{" "}

                            <a
                                href={student.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >

                                View

                            </a>

                        </p>

                    }







                    {
                        student.portfolio &&

                        <p>

                            <b>Portfolio:</b>{" "}

                            <a
                                href={student.portfolio}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >

                                View

                            </a>

                        </p>

                    }








                    {/* Resume */}

                    {
                        candidate.resume &&

                        <div>


                            <p className="mb-3">

                                <b>Resume</b>

                            </p>




                            <button

                                onClick={() =>
                                    setResumePreview(
                                        getPreviewUrl(
                                            candidate.resume
                                        )
                                    )
                                }


                                className="
                                bg-blue-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                hover:bg-blue-700
                                "

                            >

                                👁 View Resume

                            </button>



                        </div>

                    }



                </div>



            </div>









            {/* Resume Preview Modal */}



            {
                resumePreview &&


                <div

                    className="
                    fixed
                    inset-0
                    bg-black/60
                    flex
                    items-center
                    justify-center
                    z-50
                    "

                >



                    <div

                        className="
                        bg-white
                        w-[90%]
                        h-[90%]
                        rounded-xl
                        overflow-hidden
                        flex
                        flex-col
                        "

                    >




                        <div

                            className="
                            flex
                            justify-between
                            items-center
                            px-6
                            py-4
                            border-b
                            "

                        >


                            <h2 className="font-bold text-lg">

                                Resume Preview

                            </h2>



                            <button

                                onClick={() =>
                                    setResumePreview(null)
                                }

                                className="
                                text-red-600
                                font-semibold
                                "

                            >

                                Close

                            </button>



                        </div>







                        <iframe

                            src={`${resumePreview}#toolbar=1`}

                            className="
                            flex-1
                            w-full
                            "

                            title="Resume Preview"

                        />




                    </div>


                </div>

            }



        </div>

    );

}