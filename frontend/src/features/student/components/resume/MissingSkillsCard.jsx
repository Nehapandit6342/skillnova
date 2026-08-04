import { useState } from "react";
import { BadgeAlert, TrendingUp } from "lucide-react";
import { useResumeAnalysis } from "../../hooks/useResumeAnalysis";

import { Badge } from "@/components/ui/badge";

export default function MissingSkillsCard() {
  const { data, isLoading } = useResumeAnalysis();
  const [showAll, setShowAll] = useState(false);

  if (isLoading) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        Loading...
      </section>
    );
  }

  const analysis = data?.data?.analysis;

  if (!analysis) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        No skill analysis available.
      </section>
    );
  }
  const missingSkills = analysis.missingSkills.map((skill, index) => ({
    name: skill,
    priority: index < 3 ? "High" : index < 6 ? "Medium" : "Low",
  }));

  const displayedSkills = showAll ? missingSkills : missingSkills.slice(0, 5);
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
        {displayedSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-blue-600" />

              <span className="font-medium text-slate-800">{skill.name}</span>
            </div>

            <Badge
              variant={
                skill.priority === "High"
                  ? "destructive"
                  : skill.priority === "Medium"
                    ? "secondary"
                    : "outline"
              }
            >
              {skill.priority}
            </Badge>
          </div>
        ))}
      </div>

      {missingSkills.length > 5 && (
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
          >
            {showAll ? "Show Less" : `Show ${missingSkills.length - 5} More`}
          </button>
        </div>
      )}
      {/* Footer */}
      <div className="mt-8 rounded-2xl bg-blue-50 p-5">
        <p className="text-sm text-slate-600">
          AI detected {missingSkills.length} important skills that can
          significantly improve your ATS score and internship opportunities.
        </p>
      </div>
    </section>
  );
}
