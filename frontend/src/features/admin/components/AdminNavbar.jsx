import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

function AdminNavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-24 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Manage students, employers, internships and applications.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="flex items-center w-80 bg-gray-100 rounded-2xl px-5 py-3">
          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Notification */}
        <button className="relative h-12 w-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
          <FaBell className="text-red-500 text-lg" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
            AD
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="ml-4 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;