import SettingsHeader from "../components/settings/SettingsHeader";
import ProfileSettingsCard from "../components/settings/ProfileSettingsCard";
import SecurityCard from "../components/settings/SecurityCard";
import NotificationCard from "../components/settings/NotificationCard";
import AppearanceCard from "../components/settings/AppearanceCard";
import DangerZoneCard from "../components/settings/DangerZoneCard";

import { useStudentProfile } from "../hooks/useStudentProfile";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Settings() {
  const { data, isLoading, isError } = useStudentProfile();

  if (isLoading) {
    return (
      <div className="mx-auto max-w-5xl space-y-6">
        <Skeleton className="h-44 w-full rounded-2xl" />
        <Skeleton className="h-72 w-full rounded-2xl" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Skeleton className="h-64 w-full rounded-2xl" />
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
        <Skeleton className="h-56 w-full rounded-2xl" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6 text-sm text-destructive">
          Failed to load your profile. Please refresh the page or try again
          later.
        </div>
      </div>
    );
  }

  const profile = data?.data;

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <SettingsHeader profile={profile} />

      <ProfileSettingsCard profile={profile} />

      <div className="grid items-start gap-6 lg:grid-cols-2">
        <SecurityCard />
        <NotificationCard />
      </div>

      <AppearanceCard />

      <DangerZoneCard />
    </div>
  );
}
