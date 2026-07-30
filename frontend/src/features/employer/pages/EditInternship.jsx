import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import useInternshipById from "../hooks/useInternshipById";
import useUpdateInternship from "../hooks/useUpdateInternship";


export default function EditInternship(){


    const {
        id
    } = useParams();


    const navigate = useNavigate();



    const {
        data,
        isLoading
    } = useInternshipById(id);



    const updateInternship =
    useUpdateInternship();




    const [form,setForm] = useState({

        title:"",
        description:"",
        location:"",
        type:"",
        stipend:"",
        deadline:""

    });





    const internship =
    data?.data;





    useEffect(()=>{


        if(internship){


            setForm({

                title: internship.title || "",

                description: internship.description || "",

                location: internship.location || "",

                type: internship.type || "",

                stipend: internship.stipend || "",

                deadline:
                internship.deadline
                ?
                internship.deadline.split("T")[0]
                :
                ""

            });


        }


    },[internship]);







    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:
            e.target.value

        });


    };







    const handleSubmit=(e)=>{


        e.preventDefault();



        updateInternship.mutate({

            id,

            data:form

        },{


            onSuccess:()=>{

                navigate(
                    "/employer/internships"
                );

            }


        });


    };






    if(isLoading){

        return (
            <p>
                Loading internship...
            </p>
        );

    }






    return (

        <div className="max-w-3xl space-y-6">


            <h1 className="text-2xl font-bold">

                Edit Internship

            </h1>




            <form

            onSubmit={handleSubmit}

            className="
            bg-white
            border
            rounded-xl
            p-6
            space-y-5
            ">


                <input

                name="title"

                value={form.title}

                onChange={handleChange}

                placeholder="Internship Title"

                className="w-full border p-3 rounded"

                />




                <textarea

                name="description"

                value={form.description}

                onChange={handleChange}

                placeholder="Description"

                className="w-full border p-3 rounded"

                />





                <input

                name="location"

                value={form.location}

                onChange={handleChange}

                placeholder="Location"

                className="w-full border p-3 rounded"

                />






                <input

                name="type"

                value={form.type}

                onChange={handleChange}

                placeholder="Type"

                className="w-full border p-3 rounded"

                />







                <input

                name="stipend"

                value={form.stipend}

                onChange={handleChange}

                placeholder="Stipend"

                className="w-full border p-3 rounded"

                />







                <input

                type="date"

                name="deadline"

                value={form.deadline}

                onChange={handleChange}

                className="w-full border p-3 rounded"

                />







                <button

                className="
                bg-blue-600
                text-white
                px-6
                py-3
                rounded
                "

                >

                    Update Internship

                </button>



            </form>


        </div>

    );


}