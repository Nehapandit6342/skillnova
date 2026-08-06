import { useState } from "react";
import {
  Bell,
  Menu,
  Search
} from "lucide-react";


import {
  Button
} from "@/components/ui/button";


import {
  Input
} from "@/components/ui/input";


import useNotifications
from "@/features/employer/hooks/useNotifications";



export default function Topbar({

  title = "Dashboard",

  subtitle = "Welcome back! Continue building your career.",

  user = {

    name: "Employer User",

    role: "Employer",

    profileImage: "",

  },

  onMenuClick,

}) {


  const [openNotification, setOpenNotification] =
  useState(false);



  const {
    data,
    isLoading
  } = useNotifications();



  const notifications =
  data?.data || [];



  const unreadCount =
  notifications.filter(
    (item)=>!item.isRead
  ).length;



  return (

<header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">


<div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">



{/* LEFT */}

<div className="flex items-center gap-4">


<Button

variant="ghost"

size="icon"

className="lg:hidden"

onClick={onMenuClick}

>

<Menu className="h-6 w-6"/>

</Button>




<div>

<h1 className="text-xl font-bold text-foreground">

{title}

</h1>


<p className="hidden text-sm text-muted-foreground md:block">

{subtitle}

</p>


</div>


</div>





{/* RIGHT */}


<div className="flex items-center gap-3">



{/* SEARCH */}


<div className="relative hidden lg:block">


<Search
className="
absolute
left-3
top-1/2
h-4
w-4
-translate-y-1/2
text-slate-400
"
/>


<Input

placeholder="Search..."

className="w-72 pl-10"

/>


</div>







{/* NOTIFICATION */}


<div className="relative">


<Button

variant="ghost"

size="icon"

className="relative rounded-xl"

onClick={()=>setOpenNotification(!openNotification)}

>


<Bell className="h-5 w-5"/>



{
unreadCount > 0 &&

<span
className="
absolute
right-0
top-0
flex
h-5
w-5
items-center
justify-center
rounded-full
bg-red-500
text-[10px]
font-bold
text-white
"
>

{unreadCount}

</span>

}



</Button>





{/* DROPDOWN */}


{
openNotification &&

<div
className="
absolute
right-0
mt-3
w-80
rounded-xl
border
bg-white
shadow-lg
"
>


<div className="border-b p-4">


<h3 className="font-semibold">

Notifications

</h3>


</div>





<div className="max-h-80 overflow-y-auto">


{

isLoading ?

<p className="p-4 text-sm text-gray-500">

Loading...

</p>


:


notifications.length === 0 ?

<p className="p-4 text-sm text-gray-500">

No notifications

</p>


:

notifications.map((item)=>(


<div

key={item.id}

className="
border-b
p-4
hover:bg-gray-50
cursor-pointer
"

>


<p className="text-sm font-medium">

{item.title}

</p>



<p className="text-xs text-gray-500">

{item.message}

</p>



</div>


))


}



</div>


</div>


}



</div>








{/* USER */}



<button

className="
flex
items-center
gap-3
rounded-xl
p-2
transition-colors
hover:bg-muted
"

>


{

user.profileImage ?

<img

src={user.profileImage}

alt={user.name}

className="
h-11
w-11
rounded-full
object-cover
"

/>


:

<div

className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-blue-600
font-semibold
text-white
"

>


{
user.name
.split(" ")
.map(word=>word[0])
.join("")
.slice(0,2)

}


</div>


}



<div className="hidden text-left lg:block">


<p className="text-sm font-semibold">

{user.name}

</p>


<p className="text-xs text-muted-foreground">

{user.role}

</p>


</div>


</button>



</div>



</div>


</header>


);

}