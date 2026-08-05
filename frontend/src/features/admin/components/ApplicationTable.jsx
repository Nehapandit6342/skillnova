import { Trash2 } from "lucide-react";

function ApplicationTable({
  applications = [],
  onStatusUpdate,
  onDelete,
}) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">
          All Applications
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage all internship applications.
        </p>
      </div>

      {applications.length === 0 ? (
        <div className="py-16 text-center text-gray-500">
          No applications found.
        </div>
      ) : (
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Student
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Internship
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Company
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b border-gray-100 last:border-0 hover:bg-blue-50 transition"
              >
                <td className="px-6 py-5 font-medium text-gray-900">
                  {app.student?.user?.name || "N/A"}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {app.student?.user?.email || "N/A"}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {app.internship?.title || "N/A"}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {app.internship?.employer?.companyName || "N/A"}
                </td>

                <td className="px-6 py-5">
                  <select
                    value={app.status}
                    onChange={(e) =>
                      onStatusUpdate?.(
                        app.id,
                        e.target.value
                      )
                    }
                    className={`rounded-lg border px-3 py-2 text-sm font-medium outline-none ${
                      app.status === "APPROVED"
                        ? "bg-green-100 text-green-700 border-green-200"
                        : app.status === "REJECTED"
                        ? "bg-red-100 text-red-700 border-red-200"
                        : "bg-yellow-100 text-yellow-700 border-yellow-200"
                    }`}
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

                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <button
                      onClick={() => onDelete?.(app.id)}
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

export default ApplicationTable;