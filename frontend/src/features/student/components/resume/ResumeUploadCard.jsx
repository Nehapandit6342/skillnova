import { CloudUpload, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ResumeUploadCard() {
  return (
    <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-blue-100 p-5">
          <CloudUpload className="h-10 w-10 text-blue-600" />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          Upload Your Resume
        </h2>

        <p className="mt-3 max-w-md text-slate-500">
          Drag & drop your resume here or browse your computer. Supported
          formats: PDF and DOCX.
        </p>

        <Button className="mt-8">Choose File</Button>

        <div className="mt-8 rounded-xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-blue-600" />

            <div className="text-left">
              <p className="font-medium text-slate-900">No resume uploaded</p>

              <p className="text-sm text-slate-500">Maximum file size: 5 MB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
