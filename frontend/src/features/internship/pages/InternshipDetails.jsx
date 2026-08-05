import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import useInternshipById from "../hooks/useInternshipById";

export default function InternshipDetails() {
  const { id } = useParams();

  const { data, isLoading, isError, refetch } = useInternshipById(id);
  const internship = data?.data;

  if (isLoading) {
    return <DetailsSkeleton />;
  }

  if (isError || !internship) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
        <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
            <TrendingUp className="h-7 w-7 text-red-400" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-slate-900">
            Couldn't load internship details
          </h2>
          <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
            Something went wrong while fetching this internship. Please try
            again.
          </p>
          <button
            type="button"
            onClick={() => refetch()}
            className="mt-6 inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  const company = internship.employer?.companyName || "Company";
  const skills = internship.requiredSkills?.length
    ? internship.requiredSkills
    : internship.skills;
  const deadline = deadlineInfo(internship.deadline);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link
            to="/internships"
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Internships
          </Link>
          <span className="text-slate-300">/</span>
          <span className="truncate font-medium text-slate-700">
            {internship.title}
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
          {/* ================= MAIN COLUMN ================= */}
          <div className="min-w-0 space-y-6">
            {/* Header card */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 sm:h-28" />
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="-mt-16 shrink-0 sm:-mt-20">
                    <CompanyLogo company={company} logo={internship.employer?.logo} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {internship.category && (
                        <Badge className="bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                          {internship.category}
                        </Badge>
                      )}
                      {(internship.workMode || internship.type) && (
                        <Badge className="bg-violet-50 text-violet-700 ring-1 ring-violet-100">
                          {internship.workMode || internship.type}
                        </Badge>
                      )}
                      {internship.employer?.industry && (
                        <Badge className="bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                          {internship.employer.industry}
                        </Badge>
                      )}
                    </div>

                    <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      {internship.title}
                    </h1>

                    <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
                      <Building2 className="h-4 w-4 text-slate-400" />
                      <span className="font-medium text-slate-700">{company}</span>
                      {internship.location && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {internship.location}
                          </span>
                        </>
                      )}
                      <span className="text-slate-300">•</span>
                      <span>
                        Posted{" "}
                        {formatDate(internship.createdAt, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </p>
                  </div>

                  {/* Mobile CTA */}
                  <Link
                    to={`/internships/${internship.id}/apply`}
                    state={{ internship }}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30 active:scale-95 lg:hidden"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Meta grid */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <MetaItem
                    icon={<MapPin className="h-4 w-4" />}
                    label="Location"
                    value={internship.location || "Remote"}
                  />
                  <MetaItem
                    icon={<Briefcase className="h-4 w-4" />}
                    label="Job Type"
                    value={internship.type || "Internship"}
                  />
                  <MetaItem
                    icon={<Clock className="h-4 w-4" />}
                    label="Duration"
                    value={internship.duration || "Flexible"}
                  />
                  <MetaItem
                    icon={<Banknote className="h-4 w-4" />}
                    label="Stipend"
                    value={internship.stipend ? `NPR ${internship.stipend}` : "Unpaid"}
                  />
                  <MetaItem
                    icon={<Users className="h-4 w-4" />}
                    label="Openings"
                    value={internship.openings || "Multiple"}
                  />
                  <MetaItem
                    icon={<Globe2 className="h-4 w-4" />}
                    label="Work Mode"
                    value={internship.workMode || "Not specified"}
                  />
                  <MetaItem
                    icon={<CalendarDays className="h-4 w-4" />}
                    label="Deadline"
                    value={
                      internship.deadline
                        ? formatDate(internship.deadline, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Rolling"
                    }
                  />
                  <MetaItem
                    icon={<Users className="h-4 w-4" />}
                    label="Applicants"
                    value={internship._count?.applications ?? "—"}
                  />
                </div>
              </div>
            </div>

            {/* About */}
            <Section
              title="About this Internship"
              icon={<FileText className="h-4 w-4" />}
            >
              <p className="whitespace-pre-line leading-7 text-slate-600">
                {internship.description || "No description provided."}
              </p>
            </Section>

            {/* Roles & Responsibilities — from backend */}
            {internship.responsibilities?.length > 0 && (
              <Section
                title="Roles & Responsibilities"
                icon={<Briefcase className="h-4 w-4" />}
                accent="blue"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  {internship.responsibilities.map((item, index) => (
                    <CheckItem key={`resp-${index}`} text={item} />
                  ))}
                </div>
              </Section>
            )}

            {/* Required Skills */}
            {skills?.length > 0 && (
              <Section
                title="Required Skills"
                icon={<Sparkles className="h-4 w-4" />}
                accent="violet"
              >
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, index) => (
                    <span
                      key={`skill-${index}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-blue-50 hover:text-blue-700 hover:ring-blue-200"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {/* Qualifications */}
            {internship.qualifications?.length > 0 && (
              <Section
                title="Qualifications"
                icon={<GraduationCap className="h-4 w-4" />}
                accent="emerald"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  {internship.qualifications.map((item, index) => (
                    <CheckItem
                      key={`qual-${index}`}
                      text={item}
                      color="text-emerald-500"
                      bg="bg-emerald-50"
                    />
                  ))}
                </div>
              </Section>
            )}

            {/* Benefits */}
            {internship.benefits?.length > 0 && (
              <Section
                title="Benefits & Perks"
                icon={<TrendingUp className="h-4 w-4" />}
                accent="amber"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  {internship.benefits.map((item, index) => (
                    <CheckItem
                      key={`benefit-${index}`}
                      text={item}
                      color="text-amber-500"
                      bg="bg-amber-50"
                    />
                  ))}
                </div>
              </Section>
            )}

            {/* Selection Process — from backend */}
            {internship.selectionProcess?.length > 0 && (
              <Section
                title="Selection Process"
                icon={<Target className="h-4 w-4" />}
                accent="rose"
              >
                <ol className="space-y-0">
                  {internship.selectionProcess.map((step, index) => (
                    <li key={`step-${index}`} className="relative flex gap-4 pb-8 last:pb-0">
                      {index < internship.selectionProcess.length - 1 && (
                        <span className="absolute left-[17px] top-10 h-full w-px bg-slate-200" />
                      )}
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-md">
                        {index + 1}
                      </span>
                      <div className="pt-1.5">
                        <p className="font-medium text-slate-800">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Section>
            )}
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Apply card */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-slate-50/60 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">
                    Applications open
                  </span>
                  {deadline && (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${deadline.tone}`}
                    >
                      <Clock className="h-3.5 w-3.5" />
                      {deadline.text}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="space-y-3 text-sm text-slate-600">
                  <SummaryRow
                    icon={<Banknote className="h-4 w-4" />}
                    label="Stipend"
                    value={
                      internship.stipend ? `NPR ${internship.stipend}` : "Unpaid"
                    }
                  />
                  <SummaryRow
                    icon={<Clock className="h-4 w-4" />}
                    label="Duration"
                    value={internship.duration || "Flexible"}
                  />
                  <SummaryRow
                    icon={<Users className="h-4 w-4" />}
                    label="Openings"
                    value={String(internship.openings || "Multiple")}
                  />
                  <SummaryRow
                    icon={<CalendarDays className="h-4 w-4" />}
                    label="Deadline"
                    value={
                      internship.deadline
                        ? formatDate(internship.deadline, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Rolling"
                    }
                  />
                </div>

                <Link
                  to={`/internships/${internship.id}/apply`}
                  state={{ internship }}
                  className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98]"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="mt-3 text-center text-xs text-slate-400">
                  No registration needed to apply for this internship
                </p>
              </div>
            </div>

            {/* Company card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                <Building2 className="h-4 w-4" />
                About the Company
              </h3>

              <div className="mt-5 flex items-center gap-4">
                <CompanyLogo company={company} logo={internship.employer?.logo} size="lg" />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-slate-900">{company}</p>
                  {internship.employer?.industry && (
                    <p className="text-sm text-slate-500">
                      {internship.employer.industry}
                    </p>
                  )}
                </div>
              </div>

              {internship.employer?.description && (
                <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-600">
                  {internship.employer.description}
                </p>
              )}

              <div className="mt-4 space-y-2.5 border-t border-slate-100 pt-4 text-sm text-slate-600">
                {internship.employer?.location && (
                  <CompanyMeta icon={<MapPin className="h-4 w-4" />}>
                    {internship.employer.location}
                  </CompanyMeta>
                )}
                {internship.employer?.companySize && (
                  <CompanyMeta icon={<Users className="h-4 w-4" />}>
                    {internship.employer.companySize}
                  </CompanyMeta>
                )}
                {internship.employer?.website && (
                  <a
                    href={
                      internship.employer.website.startsWith("http")
                        ? internship.employer.website
                        : `https://${internship.employer.website}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-blue-600 transition-colors hover:text-blue-700"
                  >
                    <Globe2 className="h-4 w-4 shrink-0 text-slate-400" />
                    <span className="truncate">{internship.employer.website}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Share / report */}
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-5 text-center text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5" />
                {internship._count?.applications || 0} students have applied to
                this internship
              </span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ==============================
   Small building blocks
============================== */

function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  );
}

function CompanyLogo({ company = "Company", logo, size = "md" }) {
  const sizes =
    size === "lg"
      ? "h-14 w-14 rounded-2xl text-xl"
      : "h-16 w-16 rounded-2xl text-2xl sm:h-20 sm:w-20 sm:text-3xl";

  if (logo) {
    return (
      <img
        src={logo}
        alt={company}
        className={`${sizes} shrink-0 border-4 border-white bg-white object-cover shadow-lg ring-1 ring-slate-200`}
      />
    );
  }

  return (
    <div
      className={`${sizes} flex shrink-0 items-center justify-center border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-white shadow-lg`}
    >
      {company.charAt(0).toUpperCase()}
    </div>
  );
}

function MetaItem({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3.5 transition-colors hover:bg-slate-50">
      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
        <span className="text-blue-500">{icon}</span>
        {label}
      </div>
      <p className="mt-1.5 truncate text-sm font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function Section({ title, icon, accent = "blue", children }) {
  const accentStyles = {
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="mb-5 flex items-center gap-3 text-lg font-bold text-slate-900">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${accentStyles[accent]}`}
        >
          {icon}
        </span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function CheckItem({ text, color = "text-green-500", bg = "bg-green-50" }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-slate-50/70 p-4 ring-1 ring-slate-100 transition-all hover:bg-slate-50 hover:ring-slate-200">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${bg}`}
      >
        <CheckCircle2 className={`h-3.5 w-3.5 ${color}`} />
      </span>
      <span className="text-sm leading-6 text-slate-600">{text}</span>
    </div>
  );
}

function SummaryRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-slate-500">
        <span className="text-slate-400">{icon}</span>
        {label}
      </span>
      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}

function CompanyMeta({ icon, children }) {
  return (
    <p className="flex items-center gap-2.5">
      <span className="shrink-0 text-slate-400">{icon}</span>
      <span className="truncate">{children}</span>
    </p>
  );
}

/* ==============================
   Helpers
============================== */

function formatDate(value, options) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString("en-US", options);
}

function deadlineInfo(deadline) {
  if (!deadline) return null;
  const due = new Date(deadline);
  if (Number.isNaN(due.getTime())) return null;

  const days = Math.ceil((due - Date.now()) / (1000 * 60 * 60 * 24));

  if (days < 0) return { text: "Applications closed", tone: "bg-red-50 text-red-600" };
  if (days === 0) return { text: "Closes today", tone: "bg-orange-50 text-orange-600" };
  if (days <= 7) return { text: `${days} day${days > 1 ? "s" : ""} left`, tone: "bg-orange-50 text-orange-600" };
  return { text: `${days} days left`, tone: "bg-blue-50 text-blue-700" };
}

/* ==============================
   Loading skeleton
============================== */

function DetailsSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-24 animate-pulse bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 sm:h-28" />
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="h-20 w-20 animate-pulse rounded-2xl bg-slate-200" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 w-48 animate-pulse rounded-full bg-slate-200" />
                    <div className="h-8 w-72 animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-56 animate-pulse rounded bg-slate-200" />
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-20 animate-pulse rounded-2xl bg-slate-100"
                    />
                  ))}
                </div>
              </div>
            </div>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-48 animate-pulse rounded-3xl border border-slate-200 bg-white shadow-sm"
              />
            ))}
          </div>

          <div className="space-y-6">
            <div className="h-72 animate-pulse rounded-3xl border border-slate-200 bg-white shadow-sm" />
            <div className="h-64 animate-pulse rounded-3xl border border-slate-200 bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
