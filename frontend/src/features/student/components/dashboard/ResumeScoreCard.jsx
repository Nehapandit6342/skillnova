import { ArrowUpRight, CheckCircle2, FileText, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ResumeScoreCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            <Sparkles className="h-4 w-4" />
            AI Resume Analysis
          </div>

          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Resume Score
          </h2>

          <p className="mt-2 text-slate-500">
            Improve your ATS score with AI suggestions.
          </p>
        </div>

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <FileText className="h-10 w-10 text-blue-600" />
        </div>
      </div>

      {/* Score */}
      <div className="mt-8">
        <div className="flex items-end gap-2">
          <h1 className="text-6xl font-bold text-blue-600">89</h1>
          <span className="pb-2 text-2xl font-semibold text-slate-500">
            /100
          </span>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-[89%] rounded-full bg-blue-600" />
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-3 rounded-xl bg-green-50 p-3">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <p className="text-sm text-slate-700">
            Strong technical skills section.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-green-50 p-3">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <p className="text-sm text-slate-700">
            ATS-friendly formatting detected.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-3">
          <ArrowUpRight className="h-5 w-5 text-yellow-600" />
          <p className="text-sm text-slate-700">
            Add one more internship project.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-3">
          <ArrowUpRight className="h-5 w-5 text-yellow-600" />
          <p className="text-sm text-slate-700">
            Include measurable achievements.
          </p>
        </div>
      </div>

      <Button className="mt-8 w-full">Analyze Resume Again</Button>
    </div>
  );
}
