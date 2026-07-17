import { Outlet } from "react-router-dom";

import Topbar from "@/components/navigation/Topbar";
import EmployerSidebar from "@/features/employer/components/dashboard/EmployerSidebar";

const demoEmployer = {
  name: "Employer User",
  role: "Employer",
  profileImage: "",
};

export default function EmployerLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <EmployerSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar
          title="Employer Dashboard"
          subtitle="Manage internships, applications, and your company profile."
          user={demoEmployer}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}