import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import DashboardStats from "../components/dashboard/DashboardStats";
import ResumeScoreCard from "../components/dashboard/ResumeScoreCard";
import ProfileCompletionCard from "../components/dashboard/ProfileCompletionCard";
import RecommendedInternships from "../components/dashboard/RecommendedInternships";
import SkillGapCard from "../components/dashboard/SkillGapCard";
import LearningRoadmapCard from "../components/dashboard/LearningRoadmapCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <DashboardStats />

      <section className="grid gap-6 lg:grid-cols-2">
        <ResumeScoreCard />

        <ProfileCompletionCard />
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <SkillGapCard />
        <LearningRoadmapCard />
      </section>
      <RecommendedInternships />
      <section className="grid gap-6 lg:grid-cols-2">
        <RecentActivity />
        <UpcomingDeadlines />
      </section>
    </div>
  );
}
