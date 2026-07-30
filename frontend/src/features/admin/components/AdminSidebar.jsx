import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  FileText,
  Settings,
  LogOut
} from "lucide-react";

import { NavLink } from "react-router-dom";


export default function AdminSidebar(){


const menuItems = [

  {
    name:"Dashboard",
    path:"/admin/dashboard",
    icon:<LayoutDashboard />
  },


  {
    name:"Students",
    path:"/admin/students",
    icon:<Users />
  },


  {
    name:"Employers",
    path:"/admin/employers",
    icon:<Building2 />
  },


  {
    name:"Internships",
    path:"/admin/internships",
    icon:<Briefcase />
  },


  {
    name:"Applications",
    path:"/admin/applications",
    icon:<FileText />
  },


  {
    name:"Settings",
    path:"/admin/settings",
    icon:<Settings />
  }

];



return (

<div>

{
menuItems.map((item)=>(
  
<NavLink

key={item.name}

to={item.path}

className="flex items-center gap-3 p-3"

>

{item.icon}

<span>
{item.name}
</span>


</NavLink>

))

}


<button className="flex items-center gap-3 p-3">

<LogOut />

Logout

</button>


</div>

);


}