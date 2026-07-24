import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "@/lib/api";
import EmployerForm from "../components/EmployerForm";


export default function EditEmployer(){

  const { id } = useParams();

  const navigate = useNavigate();


  const [employer,setEmployer] = useState(null);



  useEffect(()=>{

    fetchEmployer();

  },[]);



  const fetchEmployer = async()=>{

    try{

      const response = await api.get(
        `/admin/employers/${id}`
      );


      if(response.data.success){

        const data = response.data.data;


        setEmployer({

          companyName: data.companyName,

          website: data.website || "",

          industry: data.industry || "",


          hrName: data.user?.name || "",

          email: data.user?.email || "",


          status: data.user?.isActive 
              ? "Active" 
              : "Inactive"

        });


      }


    }catch(error){

      console.log(
        "Fetch Employer Error:",
        error
      );

    }

  };





  const updateEmployer = async(data)=>{


    try{


      const response = await api.put(

        `/admin/employers/${id}`,

        data

      );



      if(response.data.success){

        alert(
          "Employer updated successfully"
        );


        navigate("/admin/employers");

      }



    }catch(error){

      console.log(
        "Update Employer Error:",
        error
      );

    }


  };






  if(!employer){

    return (

      <p className="p-6">
        Loading...
      </p>

    );

  }





  return (

    <div className="p-6">


      <h1 className="mb-6 text-3xl font-bold">

        Edit Employer

      </h1>



      <EmployerForm

        initialData={employer}

        onSubmit={updateEmployer}

      />


    </div>

  );


}