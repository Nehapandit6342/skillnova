import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import api from "@/lib/api";
import EmployerTable from "../components/EmployerTable";

export default function Employers() {
  const [employers, setEmployers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployers();
  }, []);

  const fetchEmployers = async () => {
    try {
      const response = await api.get("/admin/employers");

      console.log("Employers Data:", response.data);

      if (response.data.success) {
        setEmployers(response.data.data);
      }
    } catch (error) {
      console.log(
        "Employer Fetch Error:",
        error.response?.data || error.message
      );
    }
  };

  const handleDelete = async (employer) => {
    const confirmDelete = window.confirm(
      `Delete ${employer.companyName}?`
    );

    if (!confirmDelete) return;

    try {
      const response = await api.delete(
        `/admin/employers/${employer.id}`
      );

      if (response.data.success) {
        alert("Employer deleted successfully");

        setEmployers((prev) =>
          prev.filter((e) => e.id !== employer.id)
        );
      }
    } catch (error) {
      console.log(error);
      alert("Failed to delete employer");
    }
  };

  const filteredEmployers = employers.filter((employer) =>
    employer.companyName
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Employers
        </h1>

        <p className="mt-1 text-gray-500">
          Manage all registered employers.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search employer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
        />
      </div>

      {/* Table */}
      <EmployerTable
        employers={filteredEmployers}
        onDelete={handleDelete}
      />
    </div>
  );
}