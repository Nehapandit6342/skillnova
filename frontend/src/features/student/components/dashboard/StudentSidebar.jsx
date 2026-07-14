import {
  LayoutDashboard,
  User,
  FileText,
  ScanSearch,
  BarChart3,
  Map,
  Briefcase,
  ClipboardList,
  Settings,
} from "lucide-react";

import Sidebar from "@/components/navigation/Sidebar";

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
    path: "/student/resume",
    icon: FileText,
  },
  {
    title: "Resume Analysis",
    path: "/student/resume-analysis",
    icon: ScanSearch,
  },
  {
    title: "Skill Gap Analysis",
    path: "/student/skill-gap",
    icon: BarChart3,
  },
  {
    title: "Career Roadmap",
    path: "/student/roadmap",
    icon: Map,
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
  return <Sidebar title="Student Portal" items={studentSidebarItems} />;
}
