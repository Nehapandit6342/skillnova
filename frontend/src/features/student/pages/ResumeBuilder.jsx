import { useRef } from "react";
import { useAnalyzeResume } from "../hooks/useAnalyzeResume";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeUploadCard from "../components/resume/ResumeUploadCard";
import ResumeReportCard from "../components/resume/ResumeReportCard";
import ATSScoreCard from "../components/resume/ATSScoreCard";
import AIAnalysisCard from "../components/resume/AIAnalysisCard";
import MissingSkillsCard from "../components/resume/MissingSkillsCard";
import ResumeTips from "../components/resume/ResumeTips";

export default function ResumeBuilder() {
  const fileInputRef = useRef(null);

  const { mutate: analyzeResume, isPending } = useAnalyzeResume();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    analyzeResume(formData);
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleFileChange}
      />
      ;
      <ResumeHeader onUpload={handleUploadClick} isUploading={isPending} />
      <section className="grid gap-6 lg:grid-cols-2">
        <ResumeUploadCard
          onUpload={handleUploadClick}
          isUploading={isPending}
        />
        <ResumeReportCard
          onReplace={handleUploadClick}
          isUploading={isPending}
        />
        <ATSScoreCard />
        <AIAnalysisCard />
        <MissingSkillsCard />
        <ResumeTips />
      </section>
    </div>
  );
}
