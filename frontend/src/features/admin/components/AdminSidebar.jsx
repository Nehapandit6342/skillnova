import { NavLink, Link } from "react-router-dom";

import {
  GraduationCap,
  MessageSquare,
  HelpCircle,
    Building2,

} from "lucide-react";

import {
  FaTachometerAlt,
  FaUserGraduate,
  FaFileAlt,
  FaBuilding,
  FaBriefcase,
  FaCog,
  FaSignOutAlt,
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
      name: "Applications",
      icon: <FaFileAlt />,
      path: "/admin/applications",
    },
    {
      name: "Internships",
      icon: <FaBriefcase />,
      path: "/admin/internships",
    },
    {
      name: "Employers",
      icon: <FaBuilding />,
      path: "/admin/employers",
    },
    
    
    {
      name: "FAQ",
      icon: <HelpCircle size={20} />,
      path: "/admin/faqs",
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
    <aside className="w-72 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="border-b border-slate-200">
        <Link
  to="/"
  className="flex items-center gap-3 p-6 hover:bg-slate-50 transition"
>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
            <GraduationCap className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              SkillNova
            </h1>

            <p className="text-sm text-slate-500">
              Admin Portal
            </p>
          </div>
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-5 py-8">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-2xl mb-3 font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 py-5 text-center">
        <p className="text-sm text-gray-400">
          © 2026 SkillNova
        </p>
      </div>
    </aside>
  );
}

export default AdminSidebar;