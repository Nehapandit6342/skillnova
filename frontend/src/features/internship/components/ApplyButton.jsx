import { useNavigate } from "react-router-dom";


export default function ApplyButton({ internshipId }){


    const navigate = useNavigate();



    const handleApply = ()=>{


        navigate(
            `/student/internships/${internshipId}/apply`
        );


    };



    return (

        <button

        onClick={handleApply}

        className="
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-lg
        hover:bg-blue-700
        transition
        "

        >

            Apply Now


        </button>

    );


}