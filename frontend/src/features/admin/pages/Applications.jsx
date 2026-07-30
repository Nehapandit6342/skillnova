import { useEffect, useState } from "react";
import api from "@/lib/api";
import ApplicationTable from "../components/ApplicationTable";


function Applications() {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {


    const fetchApplications = async () => {


      try {


        setLoading(true);
        setError("");



        const response = await api.get(
          "/applications/admin"
        );



        console.log(
          "APPLICATION DATA:",
          response.data
        );



        if(response.data.success){


          setApplications(
            response.data.data || []
          );


        } else {


          setError(
            response.data.message || 
            "Failed to load applications"
          );


        }



      } catch(error){


        console.log(
          "APPLICATION ERROR:",
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



    fetchApplications();



  }, []);





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

        <div className="rounded-xl bg-red-100 p-5 text-red-600">

          {error}

        </div>


      </div>

    );


  }





  return (


    <div className="min-h-screen bg-slate-50 p-8">


      <h1 className="mb-6 text-3xl font-bold text-slate-800">

        Applications

      </h1>




      {
        applications.length === 0 ? (

          <div className="rounded-xl bg-white p-8 text-center shadow">

            <h2 className="text-xl font-semibold text-slate-700">

              No applications found

            </h2>


            <p className="mt-2 text-slate-500">

              No students have applied yet.

            </p>


          </div>


        ) : (


          <ApplicationTable

            applications={applications}

          />


        )
      }



    </div>


  );


}


export default Applications;