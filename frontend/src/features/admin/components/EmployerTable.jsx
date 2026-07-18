import { Link } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";

const employers = [
  {
    id: 1,
    company: "Google",
    hr: "Rahul Sharma",
    email: "hr@google.com",
    industry: "Technology",
    status: "Active",
  },
  {
    id: 2,
    company: "Microsoft",
    hr: "Neha Singh",
    email: "hr@microsoft.com",
    industry: "Software",
    status: "Active",
  },
  {
    id: 3,
    company: "LeoTech",
    hr: "Amit Verma",
    email: "hr@leotech.com",
    industry: "IT Services",
    status: "Pending",
  },
];

export default function EmployerTable() {
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
          {employers.map((employer) => (
            <tr
              key={employer.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-6 py-4">{employer.company}</td>
              <td className="px-6 py-4">{employer.hr}</td>
              <td className="px-6 py-4">{employer.email}</td>
              <td className="px-6 py-4">{employer.industry}</td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    employer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {employer.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">
                  {/* View */}
                  <Link
                    to={`/admin/employer/${employer.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Eye size={18} />
                  </Link>

                  {/* Edit */}
                  <Link
                    to={`/admin/edit-employer/${employer.id}`}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Pencil size={18} />
                  </Link>

                  {/* Delete */}
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}