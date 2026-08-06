import { useState } from "react";
import { Search } from "lucide-react";

import api from "@/lib/api";
import EmployerTable from "../components/EmployerTable";
import useEmployers from "../hooks/useEmployers";

export default function Employers() {
  const [search, setSearch] = useState("");

  const {
    data: employers = [],
    isLoading,
    isError,
    refetch,
  } = useEmployers();

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
        refetch();
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Loading Employers...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-500">
        Failed to load employers.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Employers
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all registered employers.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search employer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600"
        />
      </div>

        {/* Table */}
      <EmployerTable
        employers={filteredEmployers}
        onDelete={handleDelete}
        refetch={refetch}
      />
    </div>
  );
}