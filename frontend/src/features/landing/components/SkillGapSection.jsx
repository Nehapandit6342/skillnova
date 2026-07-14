import { CheckCircle2, Circle, BrainCircuit } from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

const currentSkills = ["HTML", "CSS", "JavaScript", "Git"];

const requiredSkills = [
  { name: "HTML", learned: true },
  { name: "CSS", learned: true },
  { name: "JavaScript", learned: true },
  { name: "Git", learned: true },
  { name: "React", learned: false },
  { name: "Node.js", learned: false },
  { name: "PostgreSQL", learned: false },
];

export default function SkillGapSection() {
  return (
    <SectionContainer>
      <SectionHeading
        badge="AI Skill Gap Detection"
        title="Know Exactly What to Learn Next"
        description="SkillNova compares your current skills with industry requirements and identifies the missing technologies you should focus on."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Current Skills */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-xl font-semibold text-slate-900">
            Your Current Skills
          </h3>

          <div className="space-y-4">
            {currentSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-slate-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Analysis */}

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg">
          <div className="mb-6 flex items-center gap-3">
            <BrainCircuit className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-slate-900">
              AI Analysis
            </h3>
          </div>

          <div className="space-y-4">
            {requiredSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between"
              >
                <span className="text-slate-700">{skill.name}</span>

                {skill.learned ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <Circle className="h-5 w-5 text-orange-500" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Career Readiness</p>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[72%] rounded-full bg-blue-600" />
            </div>

            <p className="mt-2 font-semibold text-blue-600">72% Ready</p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-slate-900">Missing Skills</h4>

            <div className="mt-3 flex flex-wrap gap-2">
              {["React", "Node.js", "PostgreSQL"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <Button className="mt-8 w-full">Generate Learning Plan</Button>
        </div>
      </div>
    </SectionContainer>
  );
}
