import {
    useState,
    useEffect
} from "react";


import useEmployerProfile from "../hooks/useEmployerProfile";
import useUpdateEmployerProfile from "../hooks/useUpdateEmployerProfile";



export default function CompanyProfile(){



    const {
        data,
        isLoading,
        isError
    } = useEmployerProfile();



    const updateProfile =
        useUpdateEmployerProfile();




    const profile =
        data?.data;




    const [form,setForm] = useState({

        companyName:"",
        website:"",
        industry:"",
        description:""

    });






    useEffect(()=>{


        if(profile){


            setForm({


                companyName:
                profile.companyName || "",


                website:
                profile.website || "",


                industry:
                profile.industry || "",


                description:
                profile.description || ""


            });


        }


    },[profile]);







    if(isLoading){

        return (

            <div className="p-6">

                Loading company profile...

            </div>

        );

    }







    if(isError){

        return (

            <div className="text-red-500">

                Failed to load company profile

            </div>

        );

    }







    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:
            e.target.value

        });


    };







    const handleSubmit=(e)=>{


        e.preventDefault();


        updateProfile.mutate(form);


    };








    return (

        <div className="max-w-3xl space-y-6">


            <h1 className="text-2xl font-bold text-slate-900">

                Company Profile

            </h1>





            <form

            onSubmit={handleSubmit}

            className="
            space-y-5
            bg-white
            p-6
            rounded-xl
            border
            shadow-sm
            "

            >




                <input

                name="companyName"

                value={form.companyName}

                onChange={handleChange}

                placeholder="Company Name"

                required

                className="
                w-full
                border
                p-3
                rounded-lg
                "

                />






                <input

                name="website"

                value={form.website}

                onChange={handleChange}

                placeholder="Website"

                className="
                w-full
                border
                p-3
                rounded-lg
                "

                />







                <input

                name="industry"

                value={form.industry}

                onChange={handleChange}

                placeholder="Industry"

                className="
                w-full
                border
                p-3
                rounded-lg
                "

                />







                <textarea

                name="description"

                value={form.description}

                onChange={handleChange}

                placeholder="Company Description"

                rows="5"

                className="
                w-full
                border
                p-3
                rounded-lg
                "

                />







                <button

                type="submit"

                disabled={updateProfile.isPending}

                className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6
                py-3
                rounded-lg
                disabled:opacity-50
                "

                >


                    {
                        updateProfile.isPending
                        ?
                        "Saving..."
                        :
                        "Save Changes"
                    }


                </button>





            </form>



        </div>

    );


}