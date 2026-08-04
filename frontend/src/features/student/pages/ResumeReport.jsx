import ResumeReportHeader from "../components/resume/ResumeReportHeader";

import ATSScoreCard from "../components/resume/ATSScoreCard";
import AIAnalysisCard from "../components/resume/AIAnalysisCard";
import MissingSkillsCard from "../components/resume/MissingSkillsCard";

import CareerRoadmapCard from "../components/profile/CareerCard";
import LearningPlanCard from "../components/dashboard/LearningRoadmapCard";
import RecommendedInternshipsCard from "../components/dashboard/RecommendedInternships";

export default function ResumeReport() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      <ResumeReportHeader />

      <div className="grid gap-6 lg:grid-cols-2">
        <ATSScoreCard />

        <MissingSkillsCard />
      </div>

      <AIAnalysisCard />

      <CareerRoadmapCard />

      <LearningPlanCard />

      <RecommendedInternshipsCard />
    </div>
  );
}
