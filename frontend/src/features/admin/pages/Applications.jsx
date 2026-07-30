import { useEffect, useState } from "react";
import api from "@/lib/api";
import ApplicationTable from "../components/ApplicationTable";


export default function Applications() {


  const [applications, setApplications] = useState([]);


  const fetchApplications = async()=>{


    try{

      const res = await api.get("/admin/applications");


      console.log("Applications:", res.data);


      if(res.data.success){

        setApplications(res.data.data);

      }


    }catch(error){

      console.log(
        "Application Error:",
        error
      );

    }


  };



  useEffect(()=>{

    fetchApplications();

  },[]);



  return (

    <div className="p-8">


      <h1 className="text-3xl font-bold mb-6">
        Applications
      </h1>


      <ApplicationTable 
        applications={applications}
      />


    </div>

  );


}