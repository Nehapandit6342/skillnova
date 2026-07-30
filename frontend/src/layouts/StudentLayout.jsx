import { Outlet } from "react-router-dom";

import Topbar from "@/components/navigation/Topbar";
import StudentSidebar from "@/features/student/components/dashboard/StudentSidebar";
import { useAuth } from "@/context/AuthContext";

export default function StudentLayout() {

  const { user } = useAuth();

  const currentUser = {
    name: user?.name || "Student",
    role: user?.role || "Student",
    profileImage: user?.profileImage || "",
  };

  return (
    <div className="flex min-h-screen bg-slate-50">

      <StudentSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <Topbar
          title="Student Dashboard"
          subtitle="Track your progress, internships, and career roadmap."
          user={currentUser}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}