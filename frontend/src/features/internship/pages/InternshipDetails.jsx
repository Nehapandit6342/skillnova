import {
    useParams,
    useNavigate
} from "react-router-dom";


import {
    MapPin,
    Clock,
    Banknote,
    Briefcase,
    CheckCircle,
    Building2
} from "lucide-react";


import useInternshipById 
from "../hooks/useInternshipById";


import {
    useAuth
} from "@/context/AuthContext";







export default function InternshipDetails(){


    const {
        id
    } = useParams();



    const navigate =
    useNavigate();




    const {
        token,
        user
    } = useAuth();






    const {
        data,
        isLoading
    } = useInternshipById(id);





    const internship =
    data?.data;









    if(isLoading){


        return (

            <div
            className="
            min-h-screen
            flex
            items-center
            justify-center
            "
            >

                Loading internship details...

            </div>

        );

    }









    if(!internship){


        return (

            <div
            className="
            p-10
            text-center
            "
            >

                Internship not found

            </div>

        );

    }









    const handleApply = ()=>{



        // =========================
        // GUEST USER
        // =========================


        if(!token){


            navigate(

                "/login",

                {

                    state:{

                        from:
                        `/internships/${id}/apply`

                    }

                }

            );


            return;


        }






        // =========================
        // ONLY STUDENT APPLY
        // =========================


        if(user?.role !== "STUDENT"){


            return;


        }






        navigate(

            `/internships/${id}/apply`

        );



    };









    return (

        <div
        className="
        max-w-6xl
        mx-auto
        py-10
        space-y-8
        "
        >







            {/* HEADER */}


            <div
            className="
            bg-white
            rounded-3xl
            border
            shadow-sm
            p-10
            "
            >



                <div
                className="
                flex
                justify-between
                flex-wrap
                gap-6
                "
                >




                    <div>



                        <h1
                        className="
                        text-4xl
                        font-bold
                        text-gray-800
                        "
                        >

                            {internship.title}

                        </h1>






                        <div
                        className="
                        flex
                        items-center
                        gap-2
                        mt-3
                        text-gray-500
                        "
                        >


                            <Building2 size={20}/>



                            {
                            internship.employer?.companyName
                            ||
                            internship.employer?.user?.name
                            ||
                            "Company"
                            }



                        </div>




                    </div>









                    {


                    (!user || user.role === "STUDENT")

                    &&


                    (

                    <button


                    onClick={handleApply}


                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-10
                    py-3
                    rounded-xl
                    font-semibold
                    h-fit
                    "

                    >

                        Apply Now


                    </button>


                    )

                    }









                    {


                    user &&

                    (
                    user.role === "EMPLOYER"
                    ||
                    user.role === "ADMIN"
                    )

                    &&


                    (

                    <button


                    disabled


                    className="
                    bg-gray-300
                    text-gray-600
                    px-10
                    py-3
                    rounded-xl
                    font-semibold
                    cursor-not-allowed
                    h-fit
                    "

                    >

                        View Only


                    </button>


                    )


                    }





                </div>












                {/* INFORMATION */}



                <div
                className="
                grid
                md:grid-cols-4
                gap-5
                mt-10
                "
                >





                    <Info

                    icon={<MapPin/>}

                    label="Location"

                    value={
                        internship.location
                        ||
                        "Remote"
                    }

                    />







                    <Info

                    icon={<Briefcase/>}

                    label="Type"

                    value={
                        internship.type
                        ||
                        "Not specified"
                    }

                    />







                    <Info

                    icon={<Clock/>}

                    label="Duration"

                    value={
                        internship.duration
                        ||
                        "Not specified"
                    }

                    />







                    <Info

                    icon={<Banknote/>}

                    label="Stipend"

                    value={

                        internship.stipend

                        ?

                        `NPR ${internship.stipend}`

                        :

                        "Unpaid"

                    }

                    />






                </div>




            </div>













            <Section

            title="About Internship"

            >


                <p
                className="
                text-gray-600
                leading-7
                "
                >

                    {
                        internship.description
                    }


                </p>



            </Section>









            {


            internship.responsibilities?.length > 0

            &&


            (

            <Section

            title="Roles & Responsibilities"

            >


                <List

                items={
                    internship.responsibilities
                }

                />


            </Section>


            )


            }









            {


            internship.skills?.length > 0

            &&


            (

            <Section

            title="Required Skills"

            >



                <div

                className="
                flex
                flex-wrap
                gap-3
                "

                >



                {

                internship.skills.map(

                (skill,index)=>(


                    <span


                    key={index}


                    className="
                    bg-blue-100
                    text-blue-700
                    px-4
                    py-2
                    rounded-full
                    "

                    >

                        {skill}


                    </span>


                )


                )

                }



                </div>




            </Section>


            )


            }









            {


            internship.benefits?.length > 0

            &&


            (

            <Section

            title="Benefits"

            >


                <List

                items={
                    internship.benefits
                }

                />


            </Section>


            )


            }








        </div>

    );


}









function Info({

    icon,

    label,

    value

}){


return (

<div

className="
bg-gray-50
rounded-xl
p-4
"

>


<div

className="
text-gray-500
flex
gap-2
items-center
text-sm
"

>


{icon}


{label}


</div>





<p

className="
font-semibold
mt-2
"

>


{value}


</p>





</div>

);


}









function Section({

title,

children

}){


return (

<div

className="
bg-white
border
rounded-3xl
shadow-sm
p-8
"

>


<h2

className="
text-xl
font-bold
mb-5
"

>

{title}


</h2>



{children}




</div>


);


}









function List({

items=[]

}){


return (

<div

className="
space-y-3
"

>



{

items.map(

(item,index)=>(


<div

key={index}

className="
flex
gap-3
items-center
text-gray-600
"

>


<CheckCircle

size={18}

className="text-green-600"

/>



{item}



</div>


)


)

}




</div>


);


}