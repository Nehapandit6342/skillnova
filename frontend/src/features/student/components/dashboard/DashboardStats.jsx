import { Briefcase, FileText, Bookmark, Trophy } from "lucide-react";

import StatCard from "./StatCard";
import { useStudentDashboard } from "../../hooks/useStudentDashboard";

export default function DashboardStats() {
  const { data, isLoading } = useStudentDashboard();

  if (isLoading) {
    return (
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-40 animate-pulse rounded-2xl bg-slate-100"
          />
        ))}
      </section>
    );
  }

  const statsData = data?.stats;

  const stats = [
    {
      title: "Resume Score",
      value: `${statsData?.resumeScore ?? 0}%`,
      description: "AI ATS Resume Score",
      icon: FileText,
      color: "bg-blue-600",
    },
    {
      title: "Applications",
      value: statsData?.applications ?? 0,
      description: "Internships Applied",
      icon: Briefcase,
      color: "bg-green-600",
    },
    {
      title: "Recommended",
      value: statsData?.recommendedInternships ?? 0,
      description: "AI Internship Matches",
      icon: Bookmark,
      color: "bg-orange-500",
    },
    {
      title: "Learning Tasks",
      value: statsData?.learningTasks ?? 0,
      description: "AI Learning Plan",
      icon: Trophy,
      color: "bg-purple-600",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
}
