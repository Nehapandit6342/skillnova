import { Download, Eye, FileText, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ResumePreviewCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Resume Preview</h2>

        <p className="mt-2 text-slate-500">
          View and manage your latest uploaded resume.
        </p>
      </div>

      {/* Preview */}
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-10">
        <div className="rounded-full bg-blue-100 p-5">
          <FileText className="h-10 w-10 text-blue-600" />
        </div>

        <h3 className="mt-5 text-lg font-semibold text-slate-900">
          Resume.pdf
        </h3>

        <p className="mt-1 text-sm text-slate-500">Uploaded Today • 1.8 MB</p>

        <Button className="mt-6">
          <Eye className="mr-2 h-4 w-4" />
          Preview Resume
        </Button>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>

        <Button variant="outline">
          <Pencil className="mr-2 h-4 w-4" />
          Replace
        </Button>

        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </div>
    </section>
  );
}
