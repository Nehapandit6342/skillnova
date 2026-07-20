import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaBuilding,
  FaBriefcase,
  FaCog,
  FaSignOutAlt,
  FaUserPlus,
} from "react-icons/fa";

function AdminSidebar() {
  const menu = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard",
    },
    {
      name: "Students",
      icon: <FaUserGraduate />,
      path: "/admin/students",
    },
    {
      name: "Add Student",
      icon: <FaUserPlus />,
      path: "/admin/add-student",
    },
    {
      name: "Employers",
      icon: <FaBuilding />,
      path: "/admin/employers",
    },
    {
      name: "Internships",
      icon: <FaBriefcase />,
      path: "/admin/internships",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
    {
      name: "Logout",
      icon: <FaSignOutAlt />,
      path: "/login",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col shadow-xl">

      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          SkillNova
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">

        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl mb-3 transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>

            <span className="font-medium">
              {item.name}
            </span>
          </NavLink>
        ))}

      </nav>

    </aside>
  );
}

export default AdminSidebar;