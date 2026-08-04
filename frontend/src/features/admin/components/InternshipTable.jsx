import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

function InternshipTable({
  internships = [],
  onDelete,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          All Internships
        </h2>

        <Link
          to="/admin/internships/add"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={18} />
          Add Internship
        </Link>

      </div>

      {internships.length === 0 ? (

        <div className="text-center py-10 text-gray-500">
          No internships found
        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="text-left p-4">Title</th>

                <th className="text-left p-4">Company</th>

                <th className="text-left p-4">Location</th>

                <th className="text-left p-4">Type</th>

                <th className="text-left p-4">Stipend</th>

                <th className="text-left p-4">Applicants</th>

                <th className="text-left p-4">Status</th>

                <th className="text-center p-4">Actions</th>

              </tr>

            </thead>

            <tbody>

              {internships.map((internship) => (

                <tr
                  key={internship.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4 font-medium">
                    {internship.title}
                  </td>

                  <td className="p-4">
                    {internship.employer?.companyName || "N/A"}
                  </td>

                  <td className="p-4">
                    {internship.location}
                  </td>

                  <td className="p-4">
                    {internship.type}
                  </td>

                  <td className="p-4">
                    Rs. {internship.stipend}
                  </td>

                  <td className="p-4">
                    {internship._count?.applications ?? 0}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        internship.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {internship.isActive ? "Open" : "Closed"}
                    </span>

                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-4">

                      <Link
                        to={`/admin/internships/${internship.id}`}
                      >
                        <Eye
                          size={20}
                          className="text-blue-600 hover:text-blue-800"
                        />
                      </Link>

                      <Link
                        to={`/admin/internships/edit/${internship.id}`}
                      >
                        <Pencil
                          size={20}
                          className="text-yellow-600 hover:text-yellow-800"
                        />
                      </Link>

                      <button
                        onClick={() =>
                          onDelete &&
                          onDelete(internship.id)
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

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default InternshipTable;