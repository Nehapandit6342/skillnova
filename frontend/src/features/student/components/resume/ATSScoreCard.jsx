import { CheckCircle2, TrendingUp } from "lucide-react";

import { Progress } from "@/components/ui/progress";

export default function ATSScoreCard() {
  const score = 88;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">ATS Resume Score</h2>

        <p className="mt-2 text-slate-500">
          AI evaluated how well your resume performs with Applicant Tracking
          Systems.
        </p>
      </div>

      {/* Score */}
      <div className="mt-8 text-center">
        <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-8 border-blue-100 bg-blue-50">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">{score}</h3>

            <p className="text-sm text-slate-500">/100</p>
          </div>
        </div>

        <h4 className="mt-5 text-xl font-semibold text-green-600">Excellent</h4>

        <p className="mt-2 text-slate-500">
          Your resume is optimized for most ATS systems.
        </p>
      </div>

      {/* Progress */}
      <div className="mt-8">
        <Progress value={score} />
      </div>

      {/* Metrics */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-blue-600" />

            <div>
              <p className="text-sm text-slate-500">Keyword Match</p>

              <p className="font-semibold text-slate-900">91%</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-green-600" />

            <div>
              <p className="text-sm text-slate-500">Formatting</p>

              <p className="font-semibold text-slate-900">Excellent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
