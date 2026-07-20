function RecentStudents({ students }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mt-8">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Recent Students
        </h2>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-200">

              <th className="text-left py-3 text-slate-500 font-semibold">
                Name
              </th>

              <th className="text-left py-3 text-slate-500 font-semibold">
                Email
              </th>

              <th className="text-left py-3 text-slate-500 font-semibold">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {students.length > 0 ? (

              students.map((student) => (

                <tr
                  key={student.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition"
                >

                  <td className="py-4 font-medium text-slate-800">
                    {student.name}
                  </td>

                  <td className="py-4 text-slate-600">
                    {student.email}
                  </td>

                  <td className="py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      Active
                    </span>
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="3"
                  className="text-center py-10 text-slate-400"
                >
                  No students found
                </td>

              </tr>

            )}

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default RecentStudents;