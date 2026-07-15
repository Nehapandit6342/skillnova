import { BadgeAlert, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const missingSkills = [
  {
    name: "Docker",
    priority: "High",
  },
  {
    name: "AWS",
    priority: "High",
  },
  {
    name: "CI/CD",
    priority: "Medium",
  },
  {
    name: "Redis",
    priority: "Medium",
  },
  {
    name: "GraphQL",
    priority: "Low",
  },
  {
    name: "Kubernetes",
    priority: "Low",
  },
];

const badgeVariant = {
  High: "destructive",
  Medium: "secondary",
  Low: "outline",
};

export default function MissingSkillsCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-red-100 p-3">
          <BadgeAlert className="h-6 w-6 text-red-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">Missing Skills</h2>

          <p className="text-slate-500">
            AI detected skills commonly required for your target internships.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-8 space-y-4">
        {missingSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-blue-600" />

              <span className="font-medium text-slate-800">{skill.name}</span>
            </div>

            <Badge variant={badgeVariant[skill.priority]}>
              {skill.priority}
            </Badge>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 rounded-2xl bg-blue-50 p-5">
        <p className="text-sm text-slate-600">
          💡 Learning these skills could significantly improve your internship
          match score and ATS ranking.
        </p>
      </div>
    </section>
  );
}
