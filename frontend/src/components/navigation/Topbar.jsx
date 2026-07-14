import { Bell, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Topbar({
  title = "Dashboard",
  subtitle = "Welcome back! Continue building your career.",
  user = {
    name: "Neha Pandit",
    role: "Student",
    profileImage: "",
  },
  onMenuClick,
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile Sidebar Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Page Title */}
          <div>
            <h1 className="text-xl font-bold text-slate-900">{title}</h1>

            <p className="hidden text-sm text-slate-500 md:block">{subtitle}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <Input placeholder="Search..." className="w-72 pl-10" />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative rounded-xl">
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>

          {/* User */}
          <button className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-slate-100">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.name}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-blue-100"
              />
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                {user.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>
            )}

            <div className="hidden text-left lg:block">
              <p className="text-sm font-semibold text-slate-900">
                {user.name}
              </p>

              <p className="text-xs text-slate-500">{user.role}</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
