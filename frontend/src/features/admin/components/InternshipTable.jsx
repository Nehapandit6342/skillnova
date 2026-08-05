import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

function InternshipTable({
  internships = [],
  onDelete,
}) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            All Internships
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Manage all internships posted by employers.
          </p>
        </div>

        <Link
          to="/admin/internships/add"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Internship
        </Link>
      </div>

      {internships.length === 0 ? (
        <div className="py-16 text-center text-gray-500">
          No internships found.
        </div>
      ) : (
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Title
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Company
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Location
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Type
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Stipend
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Applicants
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {internships.map((internship) => (
              <tr
                key={internship.id}
                className="border-b border-gray-100 last:border-0 hover:bg-blue-50 transition"
              >
                <td className="px-6 py-5 font-medium text-gray-900">
                  {internship.title}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {internship.employer?.companyName || "N/A"}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {internship.location}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {internship.type}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  Rs. {internship.stipend}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {internship._count?.applications ?? 0}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      internship.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {internship.isActive ? "Open" : "Closed"}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-3">
                    {/* View */}
                    <Link
                      to={`/admin/internships/${internship.id}`}
                      className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      <Eye size={18} />
                    </Link>

                    {/* Edit */}
                    <Link
                      to={`/admin/internships/edit/${internship.id}`}
                      className="rounded-lg bg-green-100 p-2 text-green-600 transition hover:bg-green-600 hover:text-white"
                    >
                      <Pencil size={18} />
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => onDelete?.(internship.id)}
                      className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default InternshipTable;