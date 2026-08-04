import { useEffect, useState } from "react";

import api from "@/lib/api";

import InternshipTable from "../components/InternshipTable";


function Internships() {


  const [internships, setInternships] = useState([]);



  useEffect(() => {

    fetchInternships();

  }, []);



  const fetchInternships = async () => {

    try {

      const { data } = await api.get("/admin/internships");


      console.log("Internships:", data);


      if (data.success) {

        setInternships(
          data.data || []
        );

      }


    } catch (error) {

      console.log(
        "Internship Error:",
        error.response?.data || error.message
      );

    }

  };



  // DELETE INTERNSHIP

  const deleteInternship = async (id) => {

    try {


      await api.delete(
        `/admin/internships/${id}`
      );


      setInternships((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );


      console.log("Internship deleted successfully");


    } catch (error) {


      console.log(
        "Delete Error:",
        error.response?.data || error.message
      );


    }

  };





  return (

    <div className="min-h-screen bg-slate-50 p-8">


      <h1 className="text-3xl font-bold mb-6">
        Internships
      </h1>



      <InternshipTable

        internships={internships}

        onDelete={deleteInternship}

      />



    </div>

  );

}


export default Internships;