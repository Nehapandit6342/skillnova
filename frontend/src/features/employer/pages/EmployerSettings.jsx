import SettingsHeader from "../components/settings/SettingsHeader";
import CompanySettingsCard from "../components/settings/CompanySettingsCard";
import SecurityCard from "../components/settings/SecurityCard";
import NotificationCard from "../components/settings/NotificationCard";
import SessionCard from "../components/settings/SessionCard";
import DangerZoneCard from "../components/settings/DangerZoneCard";

import useEmployerProfile from "../hooks/useEmployerProfile";
import { Skeleton } from "@/components/ui/Skeleton";

export default function EmployerSettings() {
  const { data, isLoading, isError } = useEmployerProfile();

  if (isLoading) {
    return (
      <div className="mx-auto max-w-5xl space-y-6">
        <Skeleton className="h-44 w-full rounded-2xl" />
        <Skeleton className="h-96 w-full rounded-2xl" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Skeleton className="h-64 w-full rounded-2xl" />
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
        <Skeleton className="h-40 w-full rounded-2xl" />
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

      <CompanySettingsCard profile={profile} />

      <div className="grid items-start gap-6 lg:grid-cols-2">
        <SecurityCard />
        <NotificationCard />
      </div>

      <SessionCard />

      <DangerZoneCard />
    </div>
  );
}
