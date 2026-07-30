import { useNavigate } from "react-router-dom";

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

            <p>
                Loading internships...
            </p>

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

        <div className="space-y-6">


            <h1 className="text-2xl font-bold">
                My Internships
            </h1>





            {
                internships.length === 0


                ?

                <div
                className="
                bg-white
                border
                rounded-xl
                p-6
                "
                >

                    No internships posted yet.

                </div>



                :


                <div className="grid gap-5">


                {
                    internships.map((item)=>(


                        <div

                        key={item.id}

                        className="
                        bg-white
                        border
                        rounded-xl
                        p-6
                        shadow-sm
                        "

                        >



                            <h2 className="text-xl font-bold">

                                {item.title}

                            </h2>





                            <p className="text-gray-600 mt-2">

                                {item.description}

                            </p>





                            <div className="mt-4 space-y-1 text-sm">


                                <p>
                                    Location:
                                    {" "}
                                    {item.location || "N/A"}
                                </p>



                                <p>
                                    Type:
                                    {" "}
                                    {item.type || "N/A"}
                                </p>



                                <p>
                                    Stipend:
                                    {" "}
                                    {item.stipend || "N/A"}
                                </p>




                                <p>

                                    Deadline:
                                    {" "}

                                    {
                                        item.deadline

                                        ?

                                        new Date(
                                            item.deadline
                                        )
                                        .toLocaleDateString()

                                        :

                                        "N/A"
                                    }

                                </p>


                            </div>







                            <div className="mt-5 flex gap-3">





                                <button

                                onClick={()=>navigate(
                                    `/employer/edit-internship/${item.id}`
                                )}

                                className="
                                bg-blue-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                "

                                >

                                    Edit

                                </button>






                                <button

                                onClick={()=>
                                    handleDelete(item.id)
                                }

                                className="
                                bg-red-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                "

                                >

                                    Delete

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