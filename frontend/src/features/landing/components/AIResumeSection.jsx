import {
  BrainCircuit,
  BadgeCheck,
  FileSearch,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

const features = [
  "AI Resume Score",
  "ATS Compatibility Check",
  "Strengths & Weaknesses",
  "Personalized Suggestions",
];

export default function AIResumeSection() {
  return (
    <SectionContainer>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <SectionHeading
            badge="AI Resume Analysis"
            title="Build a Resume That Stands Out"
            description="Upload or create your resume and let AI analyze it for ATS compatibility, missing keywords, strengths, weaknesses, and actionable improvements."
          />

          <div className="mt-8 space-y-4">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />

                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <Button className="mt-8">Analyze Resume</Button>
        </div>

        {/* Right */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Resume Analysis</h3>

            <BrainCircuit className="text-blue-600" />
          </div>

          <div className="mt-8">
            <p className="text-sm text-slate-500">Resume Score</p>

            <h2 className="mt-2 text-5xl font-bold text-blue-600">
              92
              <span className="text-2xl text-slate-400">/100</span>
            </h2>

            <div className="mt-5 h-3 rounded-full bg-slate-200">
              <div className="h-full w-[92%] rounded-full bg-blue-600"></div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <BadgeCheck className="text-green-600" />
              <span className="font-semibold">Strengths</span>
            </div>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>✔ Strong technical skills</li>
              <li>✔ Excellent project portfolio</li>
              <li>✔ Good ATS formatting</li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="text-amber-500" />
              <span className="font-semibold">Suggestions</span>
            </div>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Add measurable achievements</li>
              <li>• Improve professional summary</li>
              <li>• Include relevant certifications</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
