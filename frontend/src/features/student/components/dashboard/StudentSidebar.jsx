import {
  LayoutDashboard,
  User,
  FileText,
  ScanSearch,
  Briefcase,
  ClipboardList,
  Settings,
  Route,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Sidebar from "@/components/navigation/Sidebar";
import { useAuth } from "@/context/AuthContext";

const studentSidebarItems = [
  {
    title: "Dashboard",
    path: "/student/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    path: "/student/profile",
    icon: User,
  },
  {
    title: "Resume Builder",
    path: "/student/resume-builder",
    icon: FileText,
  },
  {
    title: "Resume Analysis",
    path: "/student/resume-analysis",
    icon: ScanSearch,
  },
  {
    title: "Career Roadmap",
    path: "/student/career-roadmap",
    icon: Route,
  },

  {
    title: "Internships",
    path: "/student/internships",
    icon: Briefcase,
  },
  {
    title: "My Applications",
    path: "/student/applications",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    path: "/student/settings",
    icon: Settings,
  },
];

export default function StudentSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Sidebar
      title="Student Portal"
      items={studentSidebarItems}
      onLogout={handleLogout}
    />
  );
}
