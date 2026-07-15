import { Download, RefreshCcw, Trash2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ResumeActions() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Resume Actions</h2>

        <p className="mt-2 text-slate-500">
          Manage your resume and generate a fresh AI analysis whenever you
          update it.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Button
          variant="outline"
          className="flex h-14 items-center justify-center gap-2"
        >
          <Download className="h-5 w-5" />
          Download Resume
        </Button>

        <Button
          variant="outline"
          className="flex h-14 items-center justify-center gap-2"
        >
          <RefreshCcw className="h-5 w-5" />
          Replace Resume
        </Button>

        <Button className="flex h-14 items-center justify-center gap-2">
          <Sparkles className="h-5 w-5" />
          Analyze Again
        </Button>

        <Button
          variant="destructive"
          className="flex h-14 items-center justify-center gap-2"
        >
          <Trash2 className="h-5 w-5" />
          Delete Resume
        </Button>
      </div>

      {/* Info */}
      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="font-semibold text-slate-900">💡 Tip</h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Whenever you upload a new version of your resume, run an AI analysis
          again to receive an updated ATS score, identify missing skills, and
          get personalized recommendations for improvement.
        </p>
      </div>
    </section>
  );
}
