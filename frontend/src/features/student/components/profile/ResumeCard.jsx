import { Download, Eye, FileText, Sparkles, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ResumeCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Resume</h2>

          <p className="mt-1 text-sm text-slate-500">
            Upload and manage your latest resume.
          </p>
        </div>

        <Button variant="outline" size="sm">
          <Upload className="mr-2 h-4 w-4" />
          Replace
        </Button>
      </div>

      {/* Resume Preview */}
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
            <FileText className="h-10 w-10" />
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            Resume_Neha_Pandit.pdf
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Uploaded on 12 July 2026 • 1.2 MB
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button>
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>

            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* AI Resume Analysis */}
      <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6" />

          <h3 className="text-lg font-semibold">AI Resume Analysis</h3>
        </div>

        <p className="mt-3 text-sm leading-6 text-blue-100">
          Your resume score is <strong>82%</strong>. Add more projects and
          technical skills to improve your chances of getting shortlisted.
        </p>

        <Button className="mt-5 bg-white text-blue-700 hover:bg-slate-100">
          Analyze Resume
        </Button>
      </div>
    </section>
  );
}
