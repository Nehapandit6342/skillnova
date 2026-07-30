import ProfileHeader from "../components/profile/ProfileHeader";
import PersonalInfoCard from "../components/profile/PersonalInfoCard";
import EducationCard from "../components/profile/EducationCard";
import SkillsCard from "../components/profile/SkillsCard";
import CareerCard from "../components/profile/CareerCard";
import SocialLinksCard from "../components/profile/SocialLinksCard";
import ResumeCard from "../components/profile/ResumeCard";

import { useStudentProfile } from "../hooks/useStudentProfile";

export default function StudentProfile() {
  const { data, isLoading, isError, error } = useStudentProfile();

  if (isLoading) {
    return <div className="p-10 text-center">Loading profile...</div>;
  }

  if (isError) {
    return (
      <div className="p-10 text-center text-red-500">
        {error?.response?.data?.message || "Failed to load profile"}
      </div>
    );
  }

  const profile = data?.data;
  console.log("API Response:", data);
  console.log("Profile:", profile);
  console.log("Student Profile:", profile?.studentProfile);

  return (
    <div className="space-y-6">
      <ProfileHeader profile={profile} />

      <div className="grid gap-6 xl:grid-cols-2">
        <PersonalInfoCard profile={profile} />
        <EducationCard profile={profile} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <SkillsCard profile={profile} />
        <CareerCard profile={profile} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <SocialLinksCard profile={profile} />
        <ResumeCard profile={profile} />
      </div>
    </div>
  );
}
