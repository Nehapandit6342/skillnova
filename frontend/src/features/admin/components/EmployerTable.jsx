import { Link } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function EmployerTable({
  employers,
  onDelete,
}) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white border border-gray-200 shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Company
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              HR Name
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Email
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Industry
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
          {employers.length > 0 ? (
            employers.map((employer) => (
              <tr
                key={employer.id}
                className="border-b border-gray-100 last:border-0 hover:bg-blue-50 transition"
              >
                <td className="px-6 py-5 font-medium text-gray-900">
                  {employer.companyName}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {employer.user?.name}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {employer.user?.email}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {employer.industry || "N/A"}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      employer.user?.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {employer.user?.isActive
                      ? "Active"
                      : "Inactive"}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-3">
                    {/* View */}
                    <Link
                      to={`/admin/employer/${employer.id}`}
                      className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                      title="View Employer"
                    >
                      <Eye size={18} />
                    </Link>

                    {/* Edit */}
                    <Link
                      to={`/admin/edit-employer/${employer.id}`}
                      className="rounded-lg bg-green-100 p-2 text-green-600 transition hover:bg-green-600 hover:text-white"
                      title="Edit Employer"
                    >
                      <Pencil size={18} />
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => onDelete?.(employer)}
                      className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-600 hover:text-white"
                      title="Delete Employer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="py-12 text-center text-gray-500"
              >
                No Employers Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}