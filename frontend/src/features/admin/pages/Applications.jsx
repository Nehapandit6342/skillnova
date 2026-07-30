import { useEffect, useState } from "react";
import api from "@/lib/api";
import ApplicationTable from "../components/ApplicationTable";


function Applications() {


  const [applications, setApplications] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");





  useEffect(() => {

    fetchApplications();

  }, []);





  const fetchApplications = async () => {

    try {

      setLoading(true);
      setError("");

      const response = await api.get(
        "/admin/applications"
      );


      console.log(
        "APPLICATION DATA:",
        response.data
      );


      if(response.data.success){

        setApplications(
          response.data.data || []
        );

      }


    } catch(error){

      console.log(
        "Fetch Applications Error:",
        error.response?.data || error.message
      );


      setError(
        error.response?.data?.message ||
        "Failed to load applications"
      );


    } finally {

      setLoading(false);

    }

  };







  // UPDATE STATUS

  const updateStatus = async (id,status)=>{


    try{


      const response = await api.put(

        `/admin/applications/${id}`,

        {
          status
        }

      );



      if(response.data.success){


        fetchApplications();


      }



    }catch(error){


      console.log(
        "Status Update Error:",
        error.response?.data || error.message
      );


    }


  };







  // DELETE APPLICATION

  const deleteApplication = async(id)=>{


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );


    if(!confirmDelete) return;



    try{


      const response = await api.delete(

        `/admin/applications/${id}`

      );



      if(response.data.success){


        setApplications((prev)=>

          prev.filter(
            (app)=> app.id !== id
          )

        );


      }



    }catch(error){


      console.log(
        "Delete Application Error:",
        error.response?.data || error.message
      );


    }


  };








  if(loading){


    return (

      <div className="p-8 text-center">

        <h2 className="text-xl font-semibold">
          Loading applications...
        </h2>

      </div>

    );


  }








  if(error){


    return (

      <div className="p-8">

        <div className="bg-red-100 text-red-600 p-5 rounded-xl">

          {error}

        </div>


      </div>

    );


  }








  return (

    <div className="min-h-screen bg-slate-50 p-8">


      <h1 className="text-3xl font-bold mb-6">

        Applications

      </h1>




      <ApplicationTable

        applications={applications}

        onStatusUpdate={updateStatus}

        onDelete={deleteApplication}

      />



    </div>

  );


}


export default Applications;