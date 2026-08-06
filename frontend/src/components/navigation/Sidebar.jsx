import { GraduationCap, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

export default function Sidebar({ items = [], title = "Student Portal", onLogout }) {
  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col border-r border-border bg-card h-screen sticky top-0">
      {/* Logo */}

      <div className="border-b border-border p-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <GraduationCap className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-foreground">SkillNova</h1>

            <p className="text-sm text-muted-foreground">{title}</p>
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

      <div className="border-t border-border p-5">
        {onLogout && (
          <button
            type="button"
            onClick={onLogout}
            className="mb-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground transition-all duration-200 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="h-5 w-5" />

            <span className="font-medium">Logout</span>
          </button>
        )}

        <p className="text-center text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} SkillNova
        </p>
      </div>
    </aside>
  );
}
