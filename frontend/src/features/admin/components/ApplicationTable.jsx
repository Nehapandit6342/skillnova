import { Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";


export default function ApplicationTable({
  applications = [],
  onDelete,
}) {


  return (

    <div className="overflow-x-auto rounded-xl bg-white shadow-md">


      <table className="w-full">


        <thead className="bg-gray-100">

          <tr>


            <th className="px-6 py-4 text-left">
              Student
            </th>


            <th className="px-6 py-4 text-left">
              Internship
            </th>


            <th className="px-6 py-4 text-left">
              Company
            </th>


            <th className="px-6 py-4 text-left">
              Status
            </th>


            <th className="px-6 py-4 text-center">
              Actions
            </th>


          </tr>


        </thead>




        <tbody>


          {
            applications.length > 0 ?


            applications.map((application)=>(


              <tr
                key={application.id}
                className="border-t hover:bg-gray-50"
              >



                <td className="px-6 py-4">


                  {
                    application.student?.user?.name
                    ||
                    "N/A"
                  }


                </td>





                <td className="px-6 py-4">


                  {
                    application.internship?.title
                    ||
                    "N/A"
                  }


                </td>





                <td className="px-6 py-4">


                  {
                    application.internship?.employer?.companyName
                    ||
                    "N/A"
                  }


                </td>






                <td className="px-6 py-4">


                  <span

                    className={`
                    
                    px-3 py-1 rounded-full text-sm font-medium

                    ${
                      application.status === "APPROVED"

                      ? "bg-green-100 text-green-700"

                      :

                      application.status === "REJECTED"

                      ? "bg-red-100 text-red-700"

                      :

                      "bg-yellow-100 text-yellow-700"

                    }

                    `}

                  >

                    {application.status}


                  </span>


                </td>







                <td className="px-6 py-4">


                  <div className="flex justify-center items-center gap-4">



                    <Link
                      to={`/admin/application/${application.id}`}
                    >

                      <Eye

                        size={20}

                        className="text-blue-600 hover:text-blue-800"

                      />


                    </Link>






                    <button

                      onClick={() =>
                        onDelete && onDelete(application.id)
                      }

                    >

                      <Trash2

                        size={20}

                        className="text-red-600 hover:text-red-800"

                      />


                    </button>



                  </div>


                </td>




              </tr>


            ))



            :



            <tr>


              <td

                colSpan="5"

                className="py-6 text-center text-gray-500"

              >

                No applications found


              </td>


            </tr>


          }



        </tbody>


      </table>


    </div>

  );

}