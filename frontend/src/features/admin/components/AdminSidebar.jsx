import { NavLink } from "react-router-dom";
import { MessageSquare, Building2, HelpCircle } from "lucide-react";
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
      name: "Companies",
      icon: <Building2 size={20} />,
      path: "/admin/companies",
    },

    {
      name: "Employers",
      icon: <FaBuilding />,
      path: "/admin/employers",
    },

    {
      name: "Testimonials",
      icon: <MessageSquare size={20} />,
      path: "/admin/testimonials",
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
      <div className="h-24 flex items-center px-8 border-b border-gray-200">
        <div>
          <h1 className="text-4xl font-bold text-blue-600">
            SkillNova
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Admin Portal
          </p>
        </div>
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