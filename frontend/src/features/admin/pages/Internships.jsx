import { useEffect, useState } from "react";
import api from "@/lib/api";
import InternshipTable from "../components/InternshipTable";

export default function Internships() {

  const [internships, setInternships] = useState([]);

  const fetchInternships = async () => {

    try {

      const res = await api.get("/admin/internships");

      console.log("Internships:", res.data);

      if(res.data.success){
        setInternships(res.data.data);
      }

    } catch(error){

      console.log("Internship Error:", error);

    }

  };


  useEffect(()=>{

    fetchInternships();

  },[]);


  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Internships
      </h1>


      <InternshipTable 
        internships={internships}
      />

    </div>

  );

}