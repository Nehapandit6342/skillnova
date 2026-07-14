import ProfileHeader from "../components/profile/ProfileHeader";
import PersonalInfoCard from "../components/profile/PersonalInfoCard";
import EducationCard from "../components/profile/EducationCard";
import SkillsCard from "../components/profile/SkillsCard";
import CareerCard from "../components/profile/CareerCard";
import SocialLinksCard from "../components/profile/SocialLinksCard";
import ResumeCard from "../components/profile/ResumeCard";

export default function StudentProfile() {
  return (
    <div className="space-y-6">
      <ProfileHeader />

      <div className="grid gap-6 xl:grid-cols-2">
        <PersonalInfoCard />
        <EducationCard />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <SkillsCard />
        <CareerCard />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <SocialLinksCard />
        <ResumeCard />
      </div>
    </div>
  );
}
