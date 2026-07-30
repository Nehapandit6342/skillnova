function ApplicationTable({ applications = [] }) {

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-semibold">
          Recent Applications
        </h2>

        <button className="text-blue-600 text-sm">
          View All
        </button>

      </div>


      {
        applications.length === 0 ? (

          <p className="text-gray-500">
            No applications found
          </p>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left p-3">
                    Student
                  </th>

                  <th className="text-left p-3">
                    Internship
                  </th>

                  <th className="text-left p-3">
                    Status
                  </th>

                </tr>

              </thead>


              <tbody>

                {
                  applications.map((app)=>(
                    
                    <tr 
                      key={app.id}
                      className="border-b"
                    >

                      <td className="p-3">
                        {app.student?.user?.name}
                      </td>


                      <td className="p-3">
                        {app.internship?.title}
                      </td>


                      <td className="p-3">

                        <span className="
                          px-3 
                          py-1 
                          rounded-full 
                          text-xs
                          bg-yellow-100
                        ">
                          {app.status}
                        </span>

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