import { FileText, Briefcase, CheckCircle2, User } from "lucide-react";

const activities = [
  {
    icon: FileText,
    color: "text-blue-600 bg-blue-100",
    title: "Resume uploaded successfully",
    time: "2 hours ago",
  },
  {
    icon: Briefcase,
    color: "text-green-600 bg-green-100",
    title: "Applied for Frontend Internship",
    time: "Yesterday",
  },
  {
    icon: CheckCircle2,
    color: "text-purple-600 bg-purple-100",
    title: "AI Resume Analysis Completed",
    time: "2 days ago",
  },
  {
    icon: User,
    color: "text-orange-600 bg-orange-100",
    title: "Profile updated",
    time: "3 days ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Recent Activity</h2>

      <p className="mt-2 text-slate-500">
        Your latest activities on SkillNova.
      </p>

      <div className="mt-8 space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div key={activity.title} className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${activity.color}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <p className="font-medium text-slate-900">{activity.title}</p>

                <p className="text-sm text-slate-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
