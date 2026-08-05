import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  Banknote,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  MapPin,
  Pencil,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";
import api from "@/lib/api";

export default function InternshipDetails() {
  const { id } = useParams();

  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const res = await api.get(`/admin/internships/${id}`);
        if (active && res.data.success) {
          setInternship(res.data.data);
          setError(false);
        }
      } catch (err) {
        console.log(err);
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [id, reloadKey]);

  const retry = () => {
    setLoading(true);
    setError(false);
    setReloadKey((key) => key + 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />
          <div className="h-48 animate-pulse rounded-2xl bg-white shadow-sm" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-24 animate-pulse rounded-xl bg-white shadow-sm" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !internship) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
            <AlertTriangle className="h-7 w-7 text-red-400" />
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
            onClick={retry}
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

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/admin/internships"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Internships
          </Link>

          <Link
            to={`/admin/internships/edit/${internship.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
          >
            <Pencil className="h-4 w-4" />
            Edit Internship
          </Link>
        </div>

        {/* Overview card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-bold text-white shadow-md">
                {company.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {internship.title}
                </h1>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                  <Building2 className="h-4 w-4" />
                  {company}
                  {internship.employer?.industry && (
                    <span className="ml-1 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-600">
                      {internship.employer.industry}
                    </span>
                  )}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {internship.location && (
                    <Chip icon={<MapPin className="h-3.5 w-3.5" />}>
                      {internship.location}
                    </Chip>
                  )}
                  {(internship.workMode || internship.type) && (
                    <Chip icon={<Briefcase className="h-3.5 w-3.5" />}>
                      {internship.workMode || internship.type}
                    </Chip>
                  )}
                  {internship.category && (
                    <Chip icon={<Tag className="h-3.5 w-3.5" />}>
                      {internship.category}
                    </Chip>
                  )}
                </div>
              </div>
            </div>

            <StatusBadge isActive={internship.isActive} />
          </div>
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <MetaCard icon={<MapPin className="h-4 w-4" />} label="Location" value={internship.location || "Not specified"} />
          <MetaCard icon={<Briefcase className="h-4 w-4" />} label="Type" value={internship.type || "Internship"} />
          <MetaCard icon={<Globe2 className="h-4 w-4" />} label="Work Mode" value={internship.workMode || "Not specified"} />
          <MetaCard icon={<Clock className="h-4 w-4" />} label="Duration" value={internship.duration || "Flexible"} />
          <MetaCard
            icon={<Banknote className="h-4 w-4" />}
            label="Stipend"
            value={internship.stipend ? `NPR ${internship.stipend}` : "Unpaid"}
          />
          <MetaCard icon={<Users className="h-4 w-4" />} label="Openings" value={internship.openings || "Multiple"} />
          <MetaCard
            icon={<CalendarDays className="h-4 w-4" />}
            label="Deadline"
            value={
              internship.deadline
                ? new Date(internship.deadline).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "No deadline"
            }
          />
          <MetaCard
            icon={<FileText className="h-4 w-4" />}
            label="Posted"
            value={
              internship.createdAt
                ? new Date(internship.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "—"
            }
          />
        </div>

        {/* Description */}
        <Section title="About this Internship" icon={<FileText className="h-4 w-4" />}>
          <p className="whitespace-pre-line leading-7 text-slate-600">
            {internship.description || "No description provided."}
          </p>
        </Section>

        {/* Required skills */}
        {skills?.length > 0 && (
          <Section title="Required Skills" icon={<Sparkles className="h-4 w-4" />}>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Section>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          {internship.responsibilities?.length > 0 && (
            <Section title="Responsibilities" icon={<CheckCircle2 className="h-4 w-4" />}>
              <BulletList items={internship.responsibilities} />
            </Section>
          )}

          {internship.qualifications?.length > 0 && (
            <Section title="Qualifications" icon={<CheckCircle2 className="h-4 w-4" />}>
              <BulletList items={internship.qualifications} />
            </Section>
          )}

          {internship.benefits?.length > 0 && (
            <Section title="Benefits" icon={<CheckCircle2 className="h-4 w-4" />}>
              <BulletList items={internship.benefits} />
            </Section>
          )}

          {internship.selectionProcess?.length > 0 && (
            <Section title="Selection Process" icon={<CheckCircle2 className="h-4 w-4" />}>
              <BulletList items={internship.selectionProcess} />
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

function Chip({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
      {icon}
      {children}
    </span>
  );
}

function StatusBadge({ isActive }) {
  return (
    <span
      className={`inline-flex h-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
        isActive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isActive ? "bg-green-500" : "bg-red-500"
        }`}
      />
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}

function MetaCard({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
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

function Section({ title, icon, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-slate-800">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          {icon}
        </span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function BulletList({ items = [] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2.5 text-sm text-slate-600">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}
