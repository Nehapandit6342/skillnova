import { Briefcase, FileText, Bookmark, Trophy } from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats() {
  const stats = [
    {
      title: "Resume Score",
      value: "89%",
      description: "Excellent ATS compatibility",
      icon: FileText,
      color: "bg-blue-600",
    },
    {
      title: "Applications",
      value: "12",
      description: "Internships applied",
      icon: Briefcase,
      color: "bg-green-600",
    },
    {
      title: "Saved Jobs",
      value: "7",
      description: "Ready to apply",
      icon: Bookmark,
      color: "bg-orange-500",
    },
    {
      title: "Skills Learned",
      value: "18",
      description: "Completed roadmap skills",
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
