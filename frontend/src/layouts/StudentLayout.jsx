import { Outlet } from "react-router-dom";

import Topbar from "@/components/navigation/Topbar";
import StudentSidebar from "@/features/student/components/dashboard/StudentSidebar";

const demoUser = {
  name: "Neha Pandit",
  role: "Student",
  profileImage: "https://i.pravatar.cc/150?img=12",
};

export default function StudentLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar
          title="Student Dashboard"
          subtitle="Track your progress, internships, and career roadmap."
          user={demoUser}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
