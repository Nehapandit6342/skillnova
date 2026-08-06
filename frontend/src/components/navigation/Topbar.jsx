import { useEffect, useRef, useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NOTIFICATIONS_STORAGE_KEY = "skillnova-notifications";

const DEFAULT_NOTIFICATIONS = [
  {
    id: "resume-analysis",
    title: "Resume analysis completed",
    message: "Your resume was analyzed. Check your ATS score and suggestions.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "new-match",
    title: "New internship matches your skills",
    message: "A new internship matching your profile was just posted.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: "profile-completion",
    title: "Profile completion reached 90%",
    message: "Great job! Add a few more details to reach 100%.",
    time: "Yesterday",
    read: false,
  },
  {
    id: "application-submitted",
    title: "Application submitted successfully",
    message: "Your application was submitted. Keep an eye on your inbox.",
    time: "2 days ago",
    read: true,
  },
];

function useNotifications() {
  const [notifications, setNotifications] = useState(() => {
    try {
      const stored = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);

      if (!stored) return DEFAULT_NOTIFICATIONS;

      const parsed = JSON.parse(stored);

      return Array.isArray(parsed) ? parsed : DEFAULT_NOTIFICATIONS;
    } catch {
      return DEFAULT_NOTIFICATIONS;
    }
  });
  // Persist read/unread state so it survives a browser refresh.
  useEffect(() => {
    try {
      localStorage.setItem(
        NOTIFICATIONS_STORAGE_KEY,
        JSON.stringify(notifications),
      );
    } catch {
      // Ignore storage write failures (e.g. private browsing mode).
    }
  }, [notifications]);

  const unreadCount = Array.isArray(notifications)
    ? notifications.filter((n) => !n.read).length
    : 0;

  const markAsRead = (id) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );

  const markAllAsRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  return { notifications, unreadCount, markAsRead, markAllAsRead };
}

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
  const [query, setQuery] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const notificationsRef = useRef(null);
  const { notifications, unreadCount, markAsRead, markAllAsRead } =
    useNotifications();

  // Close the notification dropdown on outside click or Escape.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setNotificationsOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const keyword = query.trim();
    // Students search inside their dashboard; everyone else uses the public page.
    const basePath = pathname.startsWith("/student")
      ? "/student/internships"
      : "/internships";
    navigate(
      keyword ? `${basePath}?search=${encodeURIComponent(keyword)}` : basePath,
    );
    setQuery("");
  };

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

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative hidden lg:block"
            role="search"
          >
            <button
              type="submit"
              aria-label="Search internships"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-blue-600"
            >
              <Search className="h-4 w-4" />
            </button>

            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-72 pl-10"
            />
          </form>

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-xl"
              onClick={() => setNotificationsOpen((open) => !open)}
              aria-label={`Notifications (${unreadCount} unread)`}
              aria-haspopup="true"
              aria-expanded={notificationsOpen}
            >
              <Bell className="h-5 w-5" />

              {unreadCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold leading-none text-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </Button>

            {notificationsOpen && (
              <div className="absolute right-0 top-12 z-50 w-80 max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">
                    Notifications
                  </p>

                  {unreadCount > 0 && (
                    <button
                      type="button"
                      onClick={markAllAsRead}
                      className="text-xs font-medium text-blue-600 transition-colors hover:text-blue-700"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>

                <div className="max-h-80 overflow-y-auto">
                  {(Array.isArray(notifications) ? notifications : []).map(
                    (notification) => (
                      <button
                        key={notification.id}
                        type="button"
                        onClick={() => markAsRead(notification.id)}
                        className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-muted ${
                          notification.read ? "" : "bg-blue-50/60"
                        }`}
                      >
                        <span
                          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                            notification.read ? "bg-slate-300" : "bg-blue-600"
                          }`}
                        />

                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-foreground">
                            {notification.title}
                          </span>

                          <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                            {notification.message}
                          </span>

                          <span className="mt-1 block text-[11px] text-slate-400">
                            {notification.time}
                          </span>
                        </span>
                      </button>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>





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