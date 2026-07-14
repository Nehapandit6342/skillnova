import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import SidebarItem from "./SidebarItem";

export default function MobileSidebar({
  open,
  onClose,
  items = [],
  title = "SkillNova",
}) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">{title}</h2>

          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 p-5">
          {items.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </nav>
      </aside>
    </>
  );
}
