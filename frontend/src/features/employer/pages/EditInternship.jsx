import {
    useParams,
    useNavigate
} from "react-router-dom";

import {
    useEffect,
    useState
} from "react";


import useInternshipById from "../hooks/useInternshipById";
import useUpdateInternship from "../hooks/useUpdateInternship";



export default function EditInternship(){


    const {id}=useParams();


    const navigate=useNavigate();



    const {
        data,
        isLoading
    }=useInternshipById(id);



    const updateInternship=
    useUpdateInternship();




    const initialForm={

        title:"",
        description:"",
        location:"",
        type:"",
        workMode:"",
        duration:"",
        stipend:"",
        openings:"",
        deadline:"",
        responsibilities:"",
        skills:"",
        qualifications:"",
        benefits:"",
        selectionProcess:""

    };



    const [form,setForm]=useState(initialForm);





    const internship=data?.data;





    useEffect(()=>{


        if(internship){


            setForm({


                title: internship.title || "",


                description:
                internship.description || "",


                location:
                internship.location || "",


                type:
                internship.type || "",


                workMode:
                internship.workMode || "",


                duration:
                internship.duration || "",


                stipend:
                internship.stipend || "",


                openings:
                internship.openings || "",


                deadline:
                internship.deadline
                ?
                internship.deadline.split("T")[0]
                :
                "",



                responsibilities:
                internship.responsibilities?.join("\n") || "",



                skills:
                internship.skills?.join(", ") || "",



                qualifications:
                internship.qualifications?.join("\n") || "",



                benefits:
                internship.benefits?.join("\n") || "",



                selectionProcess:
                internship.selectionProcess?.join("\n") || ""


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



        const payload={


            ...form,



            openings:
            form.openings
            ?
            Number(form.openings)
            :
            null,



            responsibilities:
            form.responsibilities
            .split("\n")
            .map(item=>item.trim())
            .filter(Boolean),




            skills:
            form.skills
            .split(",")
            .map(item=>item.trim())
            .filter(Boolean),




            qualifications:
            form.qualifications
            .split("\n")
            .map(item=>item.trim())
            .filter(Boolean),




            benefits:
            form.benefits
            .split("\n")
            .map(item=>item.trim())
            .filter(Boolean),




            selectionProcess:
            form.selectionProcess
            .split("\n")
            .map(item=>item.trim())
            .filter(Boolean)


        };





        updateInternship.mutate({

            id,

            data:payload


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

            <p className="p-6">

                Loading internship...

            </p>

        );


    }







    return (

        <div className="max-w-5xl mx-auto space-y-8">



            <div className="flex justify-between items-center">


                <div>

                    <h1 className="text-3xl font-bold text-slate-800">

                        Edit Internship

                    </h1>


                    <p className="text-slate-500 mt-2">

                        Update internship information.

                    </p>

                </div>



                <button

                onClick={()=>navigate(
                    "/employer/internships"
                )}

                className="
                border
                px-5
                py-2
                rounded-lg
                "

                >

                    Back

                </button>


            </div>







            <form

            onSubmit={handleSubmit}

            className="
            bg-white
            border
            rounded-2xl
            p-8
            space-y-8
            "

            >






                <div className="grid md:grid-cols-2 gap-5">



                {
                    [

                    ["title","Internship Title"],

                    ["location","Location"],

                    ["type","Internship Type"],

                    ["workMode","Work Mode"],

                    ["duration","Duration"],

                    ["stipend","Stipend"],

                    ["openings","Number of Openings"]

                    ]

                    .map(([name,placeholder])=>(


                        <input

                        key={name}

                        name={name}

                        value={form[name]}

                        onChange={handleChange}

                        placeholder={placeholder}

                        required

                        className="
                        w-full
                        border
                        rounded-lg
                        p-3
                        "

                        />


                    ))

                }





                <input

                type="date"

                name="deadline"

                value={form.deadline}

                onChange={handleChange}

                className="
                w-full
                border
                rounded-lg
                p-3
                "

                />


                </div>









                <textarea

                name="description"

                value={form.description}

                onChange={handleChange}

                rows="6"

                required

                placeholder="Internship description"

                className="
                w-full
                border
                rounded-lg
                p-4
                "

                />









                {

                [

                ["responsibilities",
                "Responsibilities (one per line)"],


                ["skills",
                "Required Skills (comma separated)"],


                ["qualifications",
                "Qualifications"],


                ["benefits",
                "Benefits"],


                ["selectionProcess",
                "Selection Process"]

                ]

                .map(([name,placeholder])=>(


                    <textarea

                    key={name}

                    name={name}

                    value={form[name]}

                    onChange={handleChange}

                    rows="4"

                    placeholder={placeholder}

                    className="
                    w-full
                    border
                    rounded-lg
                    p-4
                    "

                    />


                ))

                }







                <button

                disabled={
                    updateInternship.isPending
                }

                className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-3
                rounded-lg
                font-semibold
                "

                >

                {
                    updateInternship.isPending
                    ?
                    "Updating..."
                    :
                    "Update Internship"
                }


                </button>




            </form>



        </div>

    );


}