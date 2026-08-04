import { Brain } from "lucide-react";

export default function ResumeReportHeader() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-white">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-white/20 p-4">
          <Brain className="h-8 w-8" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">Resume Intelligence Report</h1>

          <p className="mt-2 text-blue-100">
            AI-powered analysis of your resume including ATS score, missing
            skills, personalized roadmap, project ideas, internship
            recommendations, and learning plan.
          </p>
        </div>
      </div>
    </div>
  );
}
