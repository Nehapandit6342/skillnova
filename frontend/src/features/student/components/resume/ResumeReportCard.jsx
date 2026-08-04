import {
  Brain,
  FileText,
  Sparkles,
  ArrowRight,
  Download,
  Pencil,
} from "lucide-react";

import { format } from "date-fns";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { useResumeAnalysis } from "../../hooks/useResumeAnalysis";

export default function ResumeReportCard({ onReplace, isUploading }) {
  const { data, isLoading } = useResumeAnalysis();

  if (isLoading) {
    return (
      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        Loading...
      </section>
    );
  }

  const resume = data?.data;

  const analysis = resume?.analysis;

  if (!analysis) {
    return (
      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        No report available.
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-violet-100 p-3">
          <Brain className="h-6 w-6 text-violet-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Resume Intelligence Report</h2>

          <p className="text-slate-500">
            AI generated report based on your latest resume.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">ATS Score</p>

          <h2 className="mt-2 text-4xl font-bold text-blue-600">
            {analysis.atsScore}/100
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Last Updated</p>

          <h2 className="mt-2 font-semibold">
            {resume.resumeUploadedAt
              ? format(new Date(resume.resumeUploadedAt), "MMM dd, yyyy")
              : "-"}
          </h2>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-5">
        <h3 className="font-semibold">Report Includes</h3>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>✅ AI Analysis</div>

          <div>✅ ATS Score</div>

          <div>✅ Missing Skills</div>

          <div>✅ Learning Plan</div>

          <div>✅ Career Roadmap</div>

          <div>✅ Internship Suggestions</div>

          <div>✅ Portfolio Projects</div>

          <div>✅ Improvement Tips</div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/student/resume-analysis">
            <Sparkles className="mr-2 h-4 w-4" />
            View Full Report
          </Link>
        </Button>

        <Button variant="outline" onClick={onReplace} disabled={isUploading}>
          <Pencil className="mr-2 h-4 w-4" />
          Replace Resume
        </Button>
      </div>
    </section>
  );
}
