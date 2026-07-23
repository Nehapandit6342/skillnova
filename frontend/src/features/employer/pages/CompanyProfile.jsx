import { useState } from "react";

import useEmployerProfile from "../hooks/useEmployerProfile";
import useUpdateEmployerProfile from "../hooks/useUpdateEmployerProfile";


export default function CompanyProfile(){


    const {
        data,
        isLoading
    } = useEmployerProfile();



    const updateProfile =
    useUpdateEmployerProfile();



    const profile =
    data?.data;



    const [form,setForm]=useState({

        companyName:"",
        website:"",
        industry:"",
        description:""

    });



    if(isLoading){

        return <p>Loading...</p>;

    }



    if(profile && !form.companyName){

        setForm({

            companyName:profile.companyName || "",

            website:profile.website || "",

            industry:profile.industry || "",

            description:profile.description || ""

        });

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

            <h1 className="text-2xl font-bold">
                Company Profile
            </h1>


            <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white p-6 rounded-xl border"
            >


                <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border p-3 rounded"
                />



                <input
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="Website"
                className="w-full border p-3 rounded"
                />



                <input
                name="industry"
                value={form.industry}
                onChange={handleChange}
                placeholder="Industry"
                className="w-full border p-3 rounded"
                />



                <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Company Description"
                className="w-full border p-3 rounded"
                />



                <button
                className="bg-blue-600 text-white px-5 py-3 rounded"
                >
                    Save Changes
                </button>


            </form>


        </div>

    );

}