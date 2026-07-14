import { Brain, ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

const skills = [
  {
    name: "React.js",
    progress: 85,
    color: "bg-green-500",
  },
  {
    name: "Node.js",
    progress: 60,
    color: "bg-blue-500",
  },
  {
    name: "Docker",
    progress: 25,
    color: "bg-orange-500",
  },
  {
    name: "AWS",
    progress: 15,
    color: "bg-red-500",
  },
];

export default function SkillGapCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-purple-100 p-4">
          <Brain className="h-8 w-8 text-purple-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            AI Skill Gap Analysis
          </h2>

          <p className="text-slate-500">
            Skills required for your target role.
          </p>
        </div>
      </div>

      {/* Skills */}

      <div className="mt-8 space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between">
              <span className="font-medium text-slate-700">{skill.name}</span>

              <span className="text-sm text-slate-500">{skill.progress}%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
              <div
                className={`h-full rounded-full ${skill.color}`}
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* AI Suggestion */}

      <div className="mt-8 rounded-2xl bg-blue-50 p-5">
        <div className="flex gap-3">
          <BookOpen className="mt-1 h-5 w-5 text-blue-600" />

          <div>
            <h3 className="font-semibold text-slate-900">AI Recommendation</h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Learning <strong>Docker</strong> and <strong>AWS</strong> can
              increase your internship match score by approximately
              <span className="font-semibold text-blue-600"> 25%.</span>
            </p>
          </div>
        </div>
      </div>

      <Button className="mt-8 w-full">
        View Learning Roadmap
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
