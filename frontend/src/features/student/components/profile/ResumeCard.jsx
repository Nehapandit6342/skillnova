import { Download, Eye, FileText, Sparkles, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ResumeCard({ profile }) {
  const student = profile?.studentProfile;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Resume</h2>

          <p className="text-sm text-slate-500">
            Upload and manage your latest resume.
          </p>
        </div>

        <Button variant="outline" size="sm">
          <Upload className="mr-2 h-4 w-4" />
          Replace
        </Button>
      </div>

      <div className="rounded-2xl border border-dashed p-6">
        {student?.resume ? (
          <div className="flex flex-col items-center text-center">
            <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
              <FileText className="h-10 w-10" />
            </div>

            <h3 className="mt-4 text-lg font-semibold">Resume Uploaded</h3>

            <p className="mt-1 text-sm text-slate-500">
              Your latest resume is available.
            </p>

            <div className="mt-6 flex gap-3">
              <Button onClick={() => window.open(student.resume, "_blank")}>
                <Eye className="mr-2 h-4 w-4" />
                View
              </Button>

              <Button
                variant="outline"
                onClick={() => window.open(student.resume)}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <FileText className="mx-auto h-12 w-12 text-slate-400" />

            <h3 className="mt-4 text-lg font-semibold">No Resume Uploaded</h3>

            <p className="text-sm text-slate-500">
              Upload your resume to get AI analysis.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6" />

          <h3 className="text-lg font-semibold">AI Resume Analysis</h3>
        </div>

        <p className="mt-3 text-sm text-blue-100">
          Resume score:
          <strong> {student?.resumeScore || 0}%</strong>
        </p>

        <Button className="mt-5 bg-white text-blue-700 hover:bg-slate-100">
          Analyze Resume
        </Button>
      </div>
    </section>
  );
}
