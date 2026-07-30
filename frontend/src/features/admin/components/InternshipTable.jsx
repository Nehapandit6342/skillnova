function InternshipTable({ internships = [] }) {

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-semibold">
          Recent Internships
        </h2>

      </div>


      {
        internships.length === 0 ? (

          <p className="text-gray-500">
            No internships found
          </p>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left p-3">
                    Title
                  </th>

                  <th className="text-left p-3">
                    Company
                  </th>

                  <th className="text-left p-3">
                    Applicants
                  </th>

                  <th className="text-left p-3">
                    Status
                  </th>

                </tr>

              </thead>


              <tbody>

                {
                  internships.map((internship) => (

                    <tr 
                      key={internship.id}
                      className="border-b"
                    >

                      <td className="p-3">
                        {internship.title}
                      </td>


                      <td className="p-3">
                        {internship.employer?.companyName || "N/A"}
                      </td>


                      <td className="p-3">
                        {internship._count?.applications || 0}
                      </td>


                      <td className="p-3">

                        <span className="
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          bg-green-100
                          text-green-700
                        ">
                          {internship.isActive ? "Open" : "Closed"}
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


export default InternshipTable;