import { useEffect, useState } from "react";
import api from "@/lib/api";
import ApplicationTable from "../components/ApplicationTable";

function Applications() {

  const [applications, setApplications] = useState([]);


  useEffect(() => {

    const fetchApplications = async () => {

      try {

        const { data } = await api.get("/admin/applications");

        console.log("Applications:", data);

        if (data.success) {
          setApplications(data.data || []);
        }

      } catch (error) {

        console.log(
          "Application API Error:",
          error.response?.data || error.message
        );

      }

    };


    fetchApplications();

  }, []);



  return (

    <div className="min-h-screen bg-slate-50 p-8">

      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Applications
      </h1>


      <ApplicationTable
        applications={applications}
      />


    </div>

  );

}


export default Applications;