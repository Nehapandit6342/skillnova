import {
  ArrowRight,
  Banknote,
  Briefcase,
  CalendarDays,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GRADIENTS = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-600",
  "from-rose-500 to-pink-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-sky-600",
];

function gradientFor(name = "") {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return GRADIENTS[hash % GRADIENTS.length];
}

function deadlineInfo(deadline) {
  if (!deadline) return null;
  const due = new Date(deadline);
  const days = Math.ceil((due - Date.now()) / (1000 * 60 * 60 * 24));
  if (days < 0) {
    return { text: "Applications closed", tone: "text-red-500 bg-red-50" };
  }
  if (days === 0) {
    return { text: "Closes today", tone: "text-orange-500 bg-orange-50" };
  }
  return {
    text: `${days} day${days > 1 ? "s" : ""} left`,
    tone: "text-slate-500 bg-slate-100",
  };
}

export default function InternshipCard({ internship }) {
  const navigate = useNavigate();

  const companyName =
    internship.employer?.companyName ||
    internship.employer?.user?.name ||
    "Company";

  const skills = internship.requiredSkills?.length
    ? internship.requiredSkills
    : internship.skills;

  const deadline = deadlineInfo(internship.deadline);

  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradientFor(
            companyName,
          )} text-base font-bold text-white shadow-md`}
        >
          {companyName.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-700">
            {internship.title}
          </h3>
          <div className="mt-1 flex items-center gap-2">
            <p className="truncate text-sm text-slate-500">{companyName}</p>
            {internship.employer?.industry && (
              <span className="hidden shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-600 sm:inline-block">
                {internship.employer.industry}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-slate-600">
        <Meta icon={<MapPin className="h-4 w-4" />} text={internship.location} />
        <Meta
          icon={<Briefcase className="h-4 w-4" />}
          text={internship.workMode || internship.type}
        />
        <Meta icon={<Clock className="h-4 w-4" />} text={internship.duration} />
        <Meta
          icon={<Banknote className="h-4 w-4" />}
          text={internship.stipend ? `NPR ${internship.stipend}` : "Unpaid"}
        />
      </div>

      {/* Skills */}
      {skills?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-400">
              +{skills.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-3 text-xs">
            {deadline && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium ${deadline.tone}`}
              >
                <CalendarDays className="h-3.5 w-3.5" />
                {deadline.text}
              </span>
            )}
            {internship.openings > 0 && (
              <span className="inline-flex items-center gap-1 text-slate-400">
                <Users className="h-3.5 w-3.5" />
                {internship.openings} openings
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => navigate(`/internships/${internship.id}`)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 active:scale-95"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Meta({ icon, text }) {
  return (
    <span className="flex min-w-0 items-center gap-2 text-slate-600">
      <span className="shrink-0 text-slate-400">{icon}</span>
      <span className="truncate">{text || "Not specified"}</span>
    </span>
  );
}
