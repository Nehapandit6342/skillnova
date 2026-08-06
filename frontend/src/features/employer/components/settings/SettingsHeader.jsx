import { BadgeCheck, Building2, Settings2 } from "lucide-react";

import { useAuth } from "@/context/AuthContext";

export default function SettingsHeader({ profile }) {
  const { user } = useAuth();

  const name = user?.name || "Employer";
  const email = user?.email || "";
  const companyName = profile?.companyName || "";
  const logo = profile?.logo || "";

  const initials = (companyName || name)
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 p-6 text-white shadow-md sm:p-8">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-24 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {logo ? (
            <img
              src={logo}
              alt={companyName || name}
              className="size-16 rounded-2xl border-2 border-white/20 object-cover shadow-lg"
            />
          ) : (
            <div className="flex size-16 items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 text-xl font-bold shadow-lg backdrop-blur">
              {initials || "E"}
            </div>
          )}

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur">
                <BadgeCheck className="size-3.5" />
                Employer
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-300">{email}</p>

            {companyName && (
              <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2 py-1 text-xs text-slate-300 backdrop-blur">
                <Building2 className="size-3.5" />
                {companyName}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur sm:self-auto">
          <Settings2 className="size-4 text-slate-300" />
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
              Workspace
            </p>
            <p className="text-sm font-semibold">Account Settings</p>
          </div>
        </div>
      </div>
    </section>
  );
}
