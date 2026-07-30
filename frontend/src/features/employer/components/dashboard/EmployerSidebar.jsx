import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  Briefcase,
  ClipboardList,
  Users,
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
    path: "/employer/post-internship",
    icon: PlusCircle,
  },


  {
    title: "My Internships",
    path: "/employer/internships",
    icon: Briefcase,
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



export default function EmployerSidebar(){

  return (

    <Sidebar
      title="Employer Portal"
      items={employerSidebarItems}
    />

  );

}