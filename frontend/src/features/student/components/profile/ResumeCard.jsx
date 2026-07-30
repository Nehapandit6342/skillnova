import { useRef } from "react";
import { Download, Eye, FileText, Sparkles, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ResumeCard({ profile }) {
  const student = profile?.studentProfile;

  const fileInputRef = useRef(null);
  const handleResumeSelect = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF or DOCX file.");
      return;
    }
    // Validate file size (5 MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert("Resume must be smaller than 5 MB.");
      return;
    }
    console.log(file);
    e.target.value = "";

    // Upload API will be added later
  };
  const handleDownload = () => {
    if (!student?.resume) return;

    const link = document.createElement("a");
    link.href = student.resume;
    link.download = "";
    link.click();
  };
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Resume</h2>

          <p className="text-sm text-slate-500">
            Upload and manage your latest resume.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="mr-2 h-4 w-4" />
          {student?.resume ? "Replace" : "Upload Resume"}
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
              <Button
                onClick={() =>
                  window.open(student.resume, "_blank", "noopener,noreferrer")
                }
              >
                <Eye className="mr-2 h-4 w-4" />
                View
              </Button>

              <Button variant="outline" onClick={handleDownload}>
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
              Upload your resume (PDF or DOCX) to receive AI-powered feedback
              and improve your internship opportunities.
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
          <strong> {student?.resumeScore ?? 0}%</strong>
        </p>

        <Button
          disabled
          className="mt-5 bg-white text-blue-700 hover:bg-slate-100"
        >
          Analyze Resume (Coming Soon)
        </Button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        hidden
        onChange={handleResumeSelect}
      />
    </section>
  );
}
