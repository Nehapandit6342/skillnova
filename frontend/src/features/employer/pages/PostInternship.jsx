import {
    useState
} from "react";


import useCreateInternship 
from "../hooks/useCreateInternship";



export default function PostInternship(){


    const mutation =
    useCreateInternship();



    const [form,setForm]=useState({

        title:"",
        description:"",
        location:"",
        type:"",
        stipend:"",
        deadline:""

    });



    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:
            e.target.value

        });


    };



    const submitHandler=(e)=>{


        e.preventDefault();


        mutation.mutate(form);


    };




    return (

        <div className="max-w-3xl">


            <h1 className="text-2xl font-bold mb-6">
                Post Internship
            </h1>



            <form

            onSubmit={submitHandler}

            className="space-y-5 bg-white p-6 rounded-xl border"

            >


                {
                Object.keys(form).map((field)=>(

                    <input

                    key={field}

                    name={field}

                    value={form[field]}

                    onChange={handleChange}

                    placeholder={
                        field
                    }

                    className="
                    w-full
                    border
                    rounded
                    p-3
                    "

                    />

                ))
                }



                <button

                className="
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-lg
                "

                >

                    Post Internship

                </button>



            </form>



        </div>

    );

}