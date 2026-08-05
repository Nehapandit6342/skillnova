import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";

import api from "@/lib/api";
import useStudents from "../hooks/useStudents";

function Students() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const {
    data: students = [],
    isLoading,
    isError,
    refetch,
  } = useStudents();

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (student) => {
    navigate(`/admin/student/${student.id}`);
  };

  const handleEdit = (student) => {
    navigate(`/admin/edit-student/${student.id}`);
  };

  const handleDelete = async (student) => {
    const confirmDelete = window.confirm(
      `Delete ${student.name}?`
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/admin/students/${student.id}`);

      alert("Student deleted successfully");

      refetch();
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Loading Students...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-500">
        Failed to load students.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Students
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all registered students.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">
                Name
              </th>

              <th className="px-6 py-4 text-left font-semibold text-gray-700">
                Email
              </th>

              <th className="px-6 py-4 text-left font-semibold text-gray-700">
                College
              </th>

              <th className="px-6 py-4 text-center font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b last:border-0 hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-5 font-medium text-gray-800">
                    {student.name}
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {student.email}
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {student.studentProfile?.college || "N/A"}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleView(student)}
                        className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() => handleEdit(student)}
                        className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => handleDelete(student)}
                        className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
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
                  colSpan={4}
                  className="py-10 text-center text-gray-500"
                >
                  No Students Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;