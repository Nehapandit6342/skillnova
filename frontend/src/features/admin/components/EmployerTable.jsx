import { Link } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function EmployerTable({ employers }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-md">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left">Company</th>
            <th className="px-6 py-3 text-left">HR Name</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Industry</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employers.length > 0 ? (
            employers.map((employer) => (
              <tr
                key={employer.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  {employer.companyName}
                </td>

                <td className="px-6 py-4">
                  {employer.user?.name}
                </td>

                <td className="px-6 py-4">
                  {employer.user?.email}
                </td>

                <td className="px-6 py-4">
                  {employer.industry || "N/A"}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      employer.user?.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {employer.user?.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <Link
                      to={`/admin/employer/${employer.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      to={`/admin/edit-employer/${employer.id}`}
                      className="text-green-600 hover:text-green-800"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="py-6 text-center text-gray-500"
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