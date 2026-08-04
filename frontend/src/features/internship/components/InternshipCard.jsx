import {
    MapPin,
    Clock,
    Banknote,
    Briefcase
} from "lucide-react";


import {
    useNavigate
} from "react-router-dom";



export default function InternshipCard({
    internship
}){


    const navigate = useNavigate();



    return (

        <div
        className="
        bg-white
        border
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-md
        transition
        "
        >


            <div className="flex justify-between">


                <div>


                    <h2 className="
                    text-xl
                    font-bold
                    text-slate-800
                    ">

                        {internship.title}

                    </h2>



                    <p className="
                    text-slate-500
                    mt-1
                    ">

                        {
                            internship.employer
                            ?.user
                            ?.name
                            ||
                            "Company"
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
                "
                >

                    Internship

                </span>


            </div>






            <div className="
            mt-5
            space-y-3
            text-sm
            text-slate-600
            ">


                <p className="
                flex
                gap-2
                items-center
                ">

                    <MapPin size={18}/>

                    {internship.location || "Remote"}

                </p>





                <p className="
                flex
                gap-2
                items-center
                ">

                    <Briefcase size={18}/>

                    {internship.type || "Internship"}

                </p>





                <p className="
                flex
                gap-2
                items-center
                ">

                    <Clock size={18}/>

                    {internship.duration || "3 Months"}

                </p>





                <p className="
                flex
                gap-2
                items-center
                ">

                    <Banknote size={18}/>

                    {internship.stipend || "Unpaid"}

                </p>



            </div>






            <div className="
            mt-5
            flex
            justify-end
            ">


                <button

                onClick={()=>navigate(
                    `/internships/${internship.id}`
                )}

                className="
                bg-blue-600
                text-white
                px-5
                py-2
                rounded-lg
                hover:bg-blue-700
                "

                >

                    View Details

                </button>



            </div>




        </div>

    );


}