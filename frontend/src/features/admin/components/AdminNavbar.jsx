import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function AdminNavbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm">
      
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72">
          <FaSearch className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
          />
        </div>

        {/* Notification */}
        <button className="relative p-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition">
          <FaBell className="text-slate-600 text-lg" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-blue-600" />

          <div>
            <p className="font-semibold text-slate-700">
              Admin
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}

export default AdminNavbar;