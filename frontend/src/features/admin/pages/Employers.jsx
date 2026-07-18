import { Link } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import EmployerTable from "../components/EmployerTable";

export default function Employers() {
  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Employers</h1>
          <p className="mt-1 text-gray-500">
            Manage all registered employers.
          </p>
        </div>

        <Link
          to="/admin/add-employer"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Employer
        </Link>
      </div>

      {/* Search Box */}
      <div className="mb-6 relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search employer..."
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
        />
      </div>

      {/* Employer Table */}
      <EmployerTable />
    </div>
  );
}