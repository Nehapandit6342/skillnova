import {
  LayoutDashboard,
  Building2,
  BriefcaseBusiness,
  PlusCircle,
  Users,
  ClipboardList,
  Settings,
} from "lucide-react";

import Sidebar from "@/components/navigation/Sidebar";

const employerSidebarItems = [
  {
    title: "Dashboard",
    path: "/employer/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Company Profile",
    path: "/employer/profile",
    icon: Building2,
  },
  {
    title: "Post Internship",
    path: "/employer/internships/create",
    icon: PlusCircle,
  },
  {
    title: "My Internships",
    path: "/employer/internships",
    icon: BriefcaseBusiness,
  },
  {
    title: "Applications",
    path: "/employer/applications",
    icon: ClipboardList,
  },
  {
    title: "Candidates",
    path: "/employer/candidates",
    icon: Users,
  },
  {
    title: "Settings",
    path: "/employer/settings",
    icon: Settings,
  },
];

export default function EmployerSidebar() {
  return <Sidebar title="Employer Portal" items={employerSidebarItems} />;
}