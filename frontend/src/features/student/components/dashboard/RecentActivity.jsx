import { FileText, Briefcase, CheckCircle2, User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useRecentActivities } from "../../hooks/useRecentActivities";

const activityIcons = {
  resume_upload: FileText,
  resume_analysis: CheckCircle2,
  application: Briefcase,
  profile_update: User,
};

const activityColors = {
  resume_upload: "text-blue-600 bg-blue-100",
  resume_analysis: "text-purple-600 bg-purple-100",
  application: "text-green-600 bg-green-100",
  profile_update: "text-orange-600 bg-orange-100",
};

export default function RecentActivity() {
  const { data, isLoading } = useRecentActivities();

  if (isLoading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Recent Activity</h2>

        <p className="mt-2 text-slate-500">Loading activities...</p>
      </div>
    );
  }

  const activities = data?.activities || [];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Recent Activity</h2>

      <p className="mt-2 text-slate-500">
        Your latest activities on SkillNova.
      </p>

      {activities.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed p-8 text-center text-slate-500">
          No recent activity found.
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          {activities.map((activity, index) => {
            const Icon = activityIcons[activity.type] || FileText;

            const color =
              activityColors[activity.type] || "text-slate-600 bg-slate-100";

            return (
              <div key={index} className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <p className="font-medium text-slate-900">{activity.title}</p>

                  <p className="text-sm text-slate-500">
                    {formatDistanceToNow(new Date(activity.time), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
