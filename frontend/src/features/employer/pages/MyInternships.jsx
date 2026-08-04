import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Briefcase,
  Clock,
  Banknote,
  Users,
  CalendarDays,
  Pencil,
  Trash2,
  Eye
} from "lucide-react";


import useMyInternships from "../hooks/useMyInternships";

import useDeleteInternship from "../hooks/useDeleteInternship";




export default function MyInternships(){


    const navigate = useNavigate();



    const {
        data,
        isLoading
    } = useMyInternships();




    const deleteInternship =
    useDeleteInternship();




    const internships =
    data?.data || [];





    if(isLoading){

        return (

            <div className="p-6">

                <p className="text-slate-500">
                    Loading internships...
                </p>

            </div>

        );

    }







    const handleDelete = (id)=>{


        const confirmDelete =
        window.confirm(
            "Are you sure you want to delete this internship?"
        );



        if(confirmDelete){

            deleteInternship.mutate(id);

        }


    };









    return (


        <div className="space-y-8">



            {/* HEADER */}


            <div className="
                flex
                justify-between
                items-center
                flex-wrap
                gap-4
            ">


                <div>


                    <h1 className="
                    text-3xl
                    font-bold
                    text-slate-800
                    ">

                        My Internships

                    </h1>



                    <p className="text-slate-500 mt-2">

                        Manage your posted internship opportunities.

                    </p>


                </div>





                <button

                onClick={()=>navigate(
                    "/employer/internships/post"
                )}

                className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-5
                py-3
                rounded-lg
                "

                >

                    + Post Internship

                </button>



            </div>









            {
                internships.length === 0 ?



                (

                <div
                className="
                bg-white
                border
                rounded-xl
                p-8
                text-center
                "
                >

                    <h2 className="
                    text-xl
                    font-semibold
                    ">

                        No Internship Posted

                    </h2>



                    <p className="
                    text-slate-500
                    mt-2
                    ">

                        Start creating internship opportunities.

                    </p>


                </div>

                )



                :



                (

                <div className="grid gap-6">



                {

                internships.map((item)=>(



                    <div

                    key={item.id}

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





                        {/* TITLE SECTION */}



                        <div className="
                        flex
                        justify-between
                        gap-4
                        ">



                            <div>


                                <h2 className="
                                text-xl
                                font-bold
                                text-slate-800
                                ">

                                    {item.title}

                                </h2>




                                <p className="
                                text-slate-500
                                mt-2
                                line-clamp-2
                                ">

                                    {item.description}

                                </p>


                            </div>







                            <span

                            className={`
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            h-fit

                            ${
                                item.isActive

                                ?

                                "bg-green-100 text-green-700"

                                :

                                "bg-red-100 text-red-700"

                            }

                            `}

                            >


                            {
                                item.isActive
                                ?
                                "Active"
                                :
                                "Closed"
                            }



                            </span>



                        </div>









                        {/* DETAILS */}



                        <div

                        className="
                        grid
                        md:grid-cols-3
                        gap-4
                        mt-6
                        text-sm
                        "

                        >



                            <div className="
                            flex
                            items-center
                            gap-2
                            ">

                                <MapPin size={18}/>

                                {
                                item.location || "Remote"
                                }

                            </div>






                            <div className="
                            flex
                            items-center
                            gap-2
                            ">


                                <Briefcase size={18}/>


                                {
                                item.type || "Internship"
                                }


                            </div>







                            <div className="
                            flex
                            items-center
                            gap-2
                            ">


                                <Clock size={18}/>


                                {
                                item.duration || 
                                "Not specified"
                                }



                            </div>







                            <div className="
                            flex
                            items-center
                            gap-2
                            ">


                                <Banknote size={18}/>



                                {
                                item.stipend ||
                                "Unpaid"
                                }



                            </div>








                            <div className="
                            flex
                            items-center
                            gap-2
                            ">


                                <Users size={18}/>



                                {
                                item.openings || 1
                                }


                                {" "}
                                Openings


                            </div>







                            <div className="
                            flex
                            items-center
                            gap-2
                            ">


                                <Users size={18}/>



                                {
                                item._count?.applications || 0
                                }


                                {" "}
                                Applicants



                            </div>







                            <div className="
                            flex
                            items-center
                            gap-2
                            ">


                                <CalendarDays size={18}/>



                                {

                                item.deadline

                                ?

                                new Date(
                                    item.deadline
                                )
                                .toLocaleDateString()

                                :

                                "No deadline"

                                }


                            </div>



                        </div>









                        {/* SKILLS */}



                        {
                        item.skills?.length > 0 &&



                        <div className="mt-6">


                            <h3 className="
                            font-semibold
                            mb-3
                            ">

                                Required Skills

                            </h3>





                            <div className="
                            flex
                            flex-wrap
                            gap-2
                            ">



                            {

                            item.skills.map(
                            (skill,index)=>(


                                <span

                                key={index}

                                className="
                                bg-blue-100
                                text-blue-700
                                px-3
                                py-1
                                rounded-full
                                text-sm
                                "

                                >

                                    {skill}

                                </span>


                            ))

                            }



                            </div>


                        </div>

                        }









                        {/* ACTION BUTTONS */}



                        <div className="
                        mt-8
                        flex
                        gap-3
                        flex-wrap
                        ">





                            <button

                            onClick={()=>navigate(
                                `/employer/internships/edit/${item.id}`
                            )}

                            className="
                            flex
                            items-center
                            gap-2
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-5
                            py-2
                            rounded-lg
                            "

                            >

                                <Pencil size={16}/>

                                Edit

                            </button>









                            <button

                            onClick={()=>
                                handleDelete(item.id)
                            }


                            className="
                            flex
                            items-center
                            gap-2
                            bg-red-600
                            hover:bg-red-700
                            text-white
                            px-5
                            py-2
                            rounded-lg
                            "

                            >

                                <Trash2 size={16}/>

                                Delete

                            </button>









                            <button


                            onClick={()=>navigate(
                                `/employer/internships/${item.id}`
                            )}


                            className="
                            flex
                            items-center
                            gap-2
                            border
                            px-5
                            py-2
                            rounded-lg
                            "

                            >

                                <Eye size={16}/>

                                View

                            </button>





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