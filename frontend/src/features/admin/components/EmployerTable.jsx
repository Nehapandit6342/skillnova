import { Link } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";
import api from "@/lib/api";

export default function EmployerTable({
  employers,
  onDelete,
  refetch,
}) {

  const changeStatus = async (id, status) => {

    try {

      await api.patch(`/employer/${id}/status`, {
        status,
      });

      alert(`Employer ${status}`);

      refetch?.();

    } catch (error) {

      console.log(error);

      alert("Failed to update status");

    }

  };

  return (
    <div className="overflow-x-auto rounded-2xl bg-white border border-gray-200 shadow-sm">
      <table className="min-w-full">

        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left">Company</th>
            <th className="px-6 py-4 text-left">HR Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Industry</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {employers.map((employer) => (

            <tr
              key={employer.id}
              className="border-b hover:bg-gray-50"
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
                {employer.industry}
              </td>

              <td className="px-6 py-4">

                <select
                  value={employer.status}
                  onChange={(e) =>
                    changeStatus(
                      employer.id,
                      e.target.value
                    )
                  }
                  className="border rounded-lg px-2 py-1"
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

                  <option value="SUSPENDED">
                    Suspended
                  </option>
                </select>

              </td>

              <td className="px-6 py-4">

                <div className="flex justify-center gap-2">

                  <Link
                    to={`/admin/employer/${employer.id}`}
                    className="p-2 rounded bg-blue-100 text-blue-600"
                  >
                    <Eye size={18}/>
                  </Link>

                  <Link
                    to={`/admin/edit-employer/${employer.id}`}
                    className="p-2 rounded bg-green-100 text-green-600"
                  >
                    <Pencil size={18}/>
                  </Link>

                  <button
                    onClick={() => onDelete?.(employer)}
                    className="p-2 rounded bg-red-100 text-red-600"
                  >
                    <Trash2 size={18}/>
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