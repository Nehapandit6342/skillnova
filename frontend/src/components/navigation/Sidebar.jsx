import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

export default function Sidebar({ items = [], title = "Student Portal" }) {
  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col border-r border-slate-200 bg-white h-screen sticky top-0">
      {/* Logo */}

      <div className="border-b border-slate-200 p-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <GraduationCap className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">SkillNova</h1>

            <p className="text-sm text-slate-500">{title}</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto p-5 space-y-2">
        {items.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 p-5">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} SkillNova
        </p>
      </div>
    </aside>
  );
}
