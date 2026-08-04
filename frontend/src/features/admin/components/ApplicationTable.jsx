import { Trash2 } from "lucide-react";


function ApplicationTable({
  applications = [],
  onStatusUpdate,
  onDelete,
}) {


  return (

    <div className="bg-white rounded-xl shadow-md p-6">


      <h2 className="text-2xl font-bold mb-6">
        All Applications
      </h2>





      {
        applications.length === 0 ? (

          <div className="text-center py-10 text-gray-500">

            No applications found

          </div>


        ) : (


          <div className="overflow-x-auto">


            <table className="w-full">


              <thead className="bg-gray-100">


                <tr>


                  <th className="text-left p-4">
                    Student
                  </th>


                  <th className="text-left p-4">
                    Email
                  </th>


                  <th className="text-left p-4">
                    Internship
                  </th>


                  <th className="text-left p-4">
                    Company
                  </th>


                  <th className="text-left p-4">
                    Status
                  </th>


                  <th className="text-center p-4">
                    Action
                  </th>


                </tr>


              </thead>





              <tbody>


                {
                  applications.map((app)=>(


                    <tr

                      key={app.id}

                      className="border-b hover:bg-gray-50"

                    >




                      <td className="p-4 font-medium">

                        {
                          app.student?.user?.name ||
                          "N/A"
                        }

                      </td>






                      <td className="p-4">

                        {
                          app.student?.user?.email ||
                          "N/A"
                        }

                      </td>







                      <td className="p-4">

                        {
                          app.internship?.title ||
                          "N/A"
                        }

                      </td>







                      <td className="p-4">

                        {
                          app.internship?.employer?.companyName ||
                          "N/A"
                        }

                      </td>







                      <td className="p-4">


                        <select


                          value={app.status}


                          onChange={(e)=>

                            onStatusUpdate &&
                            onStatusUpdate(
                              app.id,
                              e.target.value
                            )

                          }


                          className={`
                            rounded-lg px-3 py-2 border
                            ${
                              app.status === "APPROVED"
                              ? "bg-green-100 text-green-700"
                              :
                              app.status === "REJECTED"
                              ? "bg-red-100 text-red-700"
                              :
                              "bg-yellow-100 text-yellow-700"
                            }
                          `}


                        >


                          <option value="PENDING">
                            Pending
                          </option>


                          <option value="APPROVED">
                            Approved
                          </option>


                          <option value="REJECTED">
                            Rejected
                          </option>



                        </select>



                      </td>







                      <td className="p-4 text-center">


                        <button


                          onClick={()=>

                            onDelete &&
                            onDelete(app.id)

                          }


                          className="hover:bg-red-100 p-2 rounded-full"

                        >


                          <Trash2

                            size={20}

                            className="text-red-600"

                          />


                        </button>



                      </td>





                    </tr>


                  ))

                }



              </tbody>



            </table>



          </div>


        )

      }



    </div>


  );


}


export default ApplicationTable;