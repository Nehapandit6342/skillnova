import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  Hourglass,
  MapPin,
  Send,
  UserRoundCheck,
  XCircle,
} from "lucide-react";

import { getMyApplications } from "@/api/application.api";

const STATUS_CONFIG = {
  PENDING: {
    label: "Pending",
    color: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    icon: <Hourglass className="h-3.5 w-3.5" />,
  },
  REVIEWING: {
    label: "Reviewing",
    color: "bg-blue-50 text-blue-700",
    dot: "bg-blue-500",
    icon: <UserRoundCheck className="h-3.5 w-3.5" />,
  },
  ACCEPTED: {
    label: "Accepted",
    color: "bg-green-50 text-green-700",
    dot: "bg-green-500",
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
  },
  REJECTED: {
    label: "Rejected",
    color: "bg-red-50 text-red-600",
    dot: "bg-red-500",
    icon: <XCircle className="h-3.5 w-3.5" />,
  },
};

export default function MyApplications() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["my-applications"],
    queryFn: getMyApplications,
  });

  const applications = data?.data || [];

  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "PENDING").length,
    reviewing: applications.filter((a) => a.status === "REVIEWING").length,
    accepted: applications.filter((a) => a.status === "ACCEPTED").length,
    rejected: applications.filter((a) => a.status === "REJECTED").length,
  };

  return (
    <div className="min-h-screen bg-slate-50/60">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-blue-50 backdrop-blur">
            <Send className="h-3 w-3" />
            Application tracker
          </span>
          <h1 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            My Applications
          </h1>
          <p className="mt-1.5 text-sm text-blue-100">
            Track the status of every internship you've applied to.
          </p>

          {!isLoading && applications.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              <Stat value={stats.total} label="Total" />
              <Stat value={stats.pending} label="Pending" tone="text-amber-200" />
              <Stat value={stats.reviewing} label="Reviewing" tone="text-blue-200" />
              <Stat value={stats.accepted} label="Accepted" tone="text-emerald-200" />
              <Stat value={stats.rejected} label="Rejected" tone="text-rose-200" />
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-56 animate-pulse rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-3/4 rounded bg-slate-200" />
                    <div className="h-3 w-1/2 rounded bg-slate-100" />
                  </div>
                  <div className="h-7 w-24 rounded-full bg-slate-100" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="h-4 rounded bg-slate-100" />
                  <div className="h-4 rounded bg-slate-100" />
                  <div className="h-4 rounded bg-slate-100" />
                  <div className="h-4 rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        ) : applications.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <Send className="h-7 w-7 text-slate-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              No applications yet
            </h3>
            <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
              Start applying for internships to track your progress here.
            </p>
            <button
              type="button"
              onClick={() => navigate("/internships")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Browse Internships
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {applications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
                onOpen={() =>
                  navigate(`/internships/${application.internship?.id}`)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ value, label, tone = "text-blue-100" }) {
  return (
    <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur">
      <span className={`text-xs font-semibold text-white ${tone}`}>{value}</span>
      <span className="text-xs text-blue-100">{label}</span>
    </div>
  );
}

function ApplicationCard({ application, onOpen }) {
  const internship = application.internship;
  const status = STATUS_CONFIG[application.status] || STATUS_CONFIG.PENDING;
  const companyName =
    internship?.employer?.companyName || internship?.employer?.user?.name || "Company";

  const appliedDate = application.createdAt
    ? new Date(application.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-base font-bold text-white shadow-md">
            {companyName.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-slate-900">
              {internship?.title || "Internship"}
            </h3>
            <p className="mt-0.5 flex items-center gap-1 truncate text-sm text-slate-500">
              <Building2 className="h-3.5 w-3.5 shrink-0" />
              {companyName}
            </p>
          </div>
        </div>

        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${status.color}`}
        >
          {status.icon}
          {status.label}
        </span>
      </div>

      {/* Meta */}
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-slate-600">
        <Info icon={<MapPin className="h-4 w-4" />} text={internship?.location} />
        <Info
          icon={<Briefcase className="h-4 w-4" />}
          text={internship?.workMode || internship?.type}
        />
        <Info icon={<Clock className="h-4 w-4" />} text={internship?.duration} />
        <Info
          icon={<Banknote className="h-4 w-4" />}
          text={
            internship?.stipend ? `NPR ${internship.stipend}` : "Unpaid"
          }
        />
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
          <CalendarDays className="h-3.5 w-3.5" />
          Applied on {appliedDate}
        </span>

        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700"
        >
          View Internship
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function Info({ icon, text }) {
  return (
    <span className="flex min-w-0 items-center gap-2 text-slate-600">
      <span className="shrink-0 text-slate-400">{icon}</span>
      <span className="truncate">{text || "Not specified"}</span>
    </span>
  );
}
