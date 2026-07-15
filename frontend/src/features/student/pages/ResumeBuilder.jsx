import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeUploadCard from "../components/resume/ResumeUploadCard";
import ResumePreviewCard from "../components/resume/ResumePreviewCard";
import ATSScoreCard from "../components/resume/ATSScoreCard";
import AIAnalysisCard from "../components/resume/AIAnalysisCard";
import MissingSkillsCard from "../components/resume/MissingSkillsCard";
import ResumeTips from "../components/resume/ResumeTips";
import ResumeActions from "../components/resume/ResumeActions";
export default function ResumeBuilder() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      <ResumeHeader />

      <section className="grid gap-6 lg:grid-cols-2">
        <ResumeUploadCard />

        <ResumePreviewCard />
        <ATSScoreCard />
        <AIAnalysisCard />
        <MissingSkillsCard />
        <ResumeTips />
        <ResumeActions />
      </section>
    </div>
  );
}
