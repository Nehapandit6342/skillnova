import { FileText, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ResumeHeader() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
            <FileText className="h-8 w-8" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">Resume Builder</h1>

            <p className="mt-2 max-w-2xl text-blue-100">
              Upload your resume and let SkillNova AI analyze your profile,
              calculate your ATS score, identify missing skills, and recommend
              improvements to increase your chances of getting hired.
            </p>
          </div>
        </div>

        {/* Right */}
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
          <Upload className="mr-2 h-5 w-5" />
          Upload Resume
        </Button>
      </div>
    </section>
  );
}
