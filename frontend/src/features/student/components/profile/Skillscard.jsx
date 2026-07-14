import { Brain, Code2, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

const skills = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "PostgreSQL", level: "Beginner" },
  { name: "Git", level: "Intermediate" },
  { name: "REST API", level: "Intermediate" },
];

export default function SkillsCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Skills</h2>

          <p className="mt-1 text-sm text-slate-500">
            Showcase your technical expertise.
          </p>
        </div>

        <Button variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Skill
        </Button>
      </div>

      {/* AI Summary */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl bg-blue-50 p-4">
        <Brain className="h-6 w-6 text-blue-600" />

        <div>
          <h3 className="font-semibold text-slate-900">AI Skill Analysis</h3>

          <p className="text-sm text-slate-600">
            Your strongest skills are Frontend Development and JavaScript.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 transition hover:border-blue-300 hover:bg-blue-50"
          >
            <Code2 className="h-4 w-4 text-blue-600" />

            <span className="font-medium text-slate-800">{skill.name}</span>

            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
