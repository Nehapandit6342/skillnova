import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "@/lib/api";


export default function EmployerDetails() {

  const { id } = useParams();

  const [employer, setEmployer] = useState(null);



  useEffect(() => {

    fetchEmployer();

  }, []);



  const fetchEmployer = async () => {

    try {

      const response = await api.get(
        `/admin/employers/${id}`
      );


      console.log(response.data);


      if (response.data.success) {

        setEmployer(response.data.data);

      }


    } catch (error) {

      console.log(
        "Employer Details Error:",
        error.response?.data || error.message
      );

    }

  };




  if (!employer) {

    return (
      <p className="p-6">
        Loading...
      </p>
    );

  }





  return (

    <div className="p-6">


      <div className="mb-6 flex justify-between items-center">


        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Employer Details
          </h1>

          <p className="text-gray-500 mt-1">
            View complete employer information.
          </p>

        </div>



        <Link

          to="/admin/employers"

          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"

        >
          Back
        </Link>


      </div>






      <div className="bg-white rounded-xl shadow p-6 space-y-4">



        <div>
          <span className="font-semibold">
            Company Name:
          </span>

          <span className="ml-2">
            {employer.companyName}
          </span>
        </div>





        <div>
          <span className="font-semibold">
            HR Name:
          </span>

          <span className="ml-2">
            {employer.user?.name}
          </span>
        </div>





        <div>
          <span className="font-semibold">
            Email:
          </span>

          <span className="ml-2">
            {employer.user?.email}
          </span>
        </div>





        <div>
          <span className="font-semibold">
            Industry:
          </span>

          <span className="ml-2">
            {employer.industry || "N/A"}
          </span>
        </div>





        <div>
          <span className="font-semibold">
            Website:
          </span>

          <span className="ml-2">
            {employer.website || "N/A"}
          </span>
        </div>





        <div>
          <span className="font-semibold">
            Location:
          </span>

          <span className="ml-2">
            {employer.location || "N/A"}
          </span>
        </div>





        <div>
          <span className="font-semibold">
            Company Size:
          </span>

          <span className="ml-2">
            {employer.companySize || "N/A"}
          </span>
        </div>





        <div>
          <span className="font-semibold">
            Founded Year:
          </span>

          <span className="ml-2">
            {employer.foundedYear || "N/A"}
          </span>
        </div>





        <div>
          <span className="font-semibold">
            Description:
          </span>

          <p className="mt-1 text-gray-600">
            {employer.description || "N/A"}
          </p>

        </div>





        <div>

          <span className="font-semibold">
            Status:
          </span>


          <span
            className={`ml-2 px-3 py-1 rounded-full text-sm ${
              employer.user?.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
            }`}
          >

            {employer.user?.isActive
              ? "Active"
              : "Inactive"}

          </span>

        </div>





        <Link

          to={`/admin/edit-employer/${employer.id}`}

          className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"

        >
          Edit Employer

        </Link>



      </div>


    </div>

  );

}