import {
  BriefcaseBusiness,
  ClipboardList,
  Users,
  Eye,
} from "lucide-react";

const stats = [
  {
    title: "Active Internships",
    value: "0",
    icon: BriefcaseBusiness,
  },
  {
    title: "Total Applications",
    value: "0",
    icon: ClipboardList,
  },
  {
    title: "Candidates",
    value: "0",
    icon: Users,
  },
  {
    title: "Profile Views",
    value: "0",
    icon: Eye,
  },
];

export default function EmployerDashboard() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-slate-900">
          Welcome to your Employer Dashboard
        </h2>

        <p className="mt-2 text-slate-600">
          Manage your company profile, internships, and student applications.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{stat.title}</p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}