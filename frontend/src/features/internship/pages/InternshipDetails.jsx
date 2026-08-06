import { useParams, useNavigate } from "react-router-dom";

import {
  MapPin,
  Clock,
  Banknote,
  Briefcase,
  CheckCircle,
  Building2,
  CalendarDays,
  Users,
  Globe,
} from "lucide-react";
import useInternshipById from "../hooks/useInternshipById";

export default function InternshipDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, error } = useInternshipById(id);

  console.log("DETAIL ID:", id);
  console.log("DETAIL RESPONSE:", data);
  console.log("DETAIL ERROR:", error);

  const internship = data?.data;

  if (isLoading) {
    return (
      <div
        className="
            min-h-screen
            flex
            items-center
            justify-center
            "
      >
        Loading internship details...
      </div>
    );
  }

  if (!internship) {
    return (
      <div
        className="
            p-10
            text-center
            "
      >
        Internship not found
      </div>
    );
  }

  const deadline = internship.deadline
    ? new Date(internship.deadline).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "No deadline";

  const handleApply = () =>
    navigate(`/internships/${id}/apply`, {
      state: {
        internship,
      },
    });

  return (
    <div
      className="
        max-w-7xl
        mx-auto
        py-10
        px-4
        "
    >
      <div
        className="
        grid
        lg:grid-cols-3
        gap-8
        "
      >
        {/* ================= LEFT COLUMN ================= */}
        <div
          className="
        lg:col-span-2
        space-y-8
        "
        >
          {/* HEADER */}

          <div
            className="
bg-white
rounded-3xl
border
shadow-sm
p-8
"
          >
            <div
              className="
flex
justify-between
gap-6
flex-wrap
"
            >
              <div className="flex gap-5">
                {/* COMPANY LOGO */}

                <div
                  className="
w-20
h-20
rounded-2xl
bg-gradient-to-br
from-blue-600
to-indigo-600
flex
items-center
justify-center
text-white
text-3xl
font-bold
"
                >
                  {internship.employer?.companyName?.charAt(0)?.toUpperCase() ||
                    "S"}
                </div>

                <div>
                  <div className="flex gap-3 flex-wrap">
                    <span
                      className="
    bg-blue-100
    text-blue-700
    px-3
    py-1
    rounded-full
    text-sm
    "
                    >
                      {internship.type}
                    </span>

                    <span
                      className="
    bg-green-100
    text-green-700
    px-3
    py-1
    rounded-full
    text-sm
    "
                    >
                      {internship.workMode}
                    </span>
                  </div>
                  <h1
                    className="
text-4xl
font-bold
text-gray-900
mt-3
"
                  >
                    {internship.title}
                  </h1>

                  <p
                    className="
flex
items-center
gap-2
text-gray-500
mt-2
"
                  >
                    <Building2 size={18} />

                    {internship.employer?.companyName}
                  </p>
                </div>
              </div>

              <button
                onClick={handleApply}
                className="
bg-blue-600
hover:bg-blue-700
text-white
px-10
py-3
rounded-xl
font-semibold
h-fit
transition
"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* QUICK INFORMATION */}

          <Section title="Quick Information">
            <div
              className="
grid
md:grid-cols-5
gap-4
"
            >
              <Info
                icon={<MapPin />}
                label="Location"
                value={internship.location || "Remote"}
              />

              <Info
                icon={<Briefcase />}
                label="Job Type"
                value={internship.type}
              />

              <Info
                icon={<Clock />}
                label="Duration"
                value={internship.duration || "Flexible"}
              />

              <Info
                icon={<Banknote />}
                label="Stipend"
                value={
                  internship.stipend ? `NPR ${internship.stipend}` : "Unpaid"
                }
              />

              <Info
                icon={<Users />}
                label="Openings"
                value={internship.openings || "Multiple"}
              />
            </div>
          </Section>

          <Section title="About Internship">
            <p
              className="
                text-gray-600
                leading-7
                "
            >
              {internship.description}
            </p>
          </Section>

          {internship.responsibilities?.length > 0 && (
            <Section title="Roles & Responsibilities">
              <List items={internship.responsibilities} />
            </Section>
          )}
          {internship.skills?.length > 0 && (
            <Section title="Required Skills">
              <div
                className="
                    flex
                    flex-wrap
                    gap-3
                    "
              >
                {internship.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="
                            bg-blue-100
                            text-blue-700
                            px-4
                            py-2
                            rounded-full
                            "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>
          )}
          {internship.qualifications?.length > 0 && (
            <Section title="Eligibility Criteria">
              <List items={internship.qualifications} />
            </Section>
          )}

          {internship.benefits?.length > 0 && (
            <Section title="Benefits & Perks">
              <List items={internship.benefits} />
            </Section>
          )}

          {internship.selectionProcess?.length > 0 && (
            <Section title="Application Process">
              <List items={internship.selectionProcess} />
            </Section>
          )}
          <Section title="Application Deadline">
            <div
              className="
flex
items-center
gap-3
text-red-600
font-semibold
"
            >
              <CalendarDays />

              {deadline}
            </div>
          </Section>
          <div className="flex justify-center pt-6">
            <button
              onClick={handleApply}
              className="
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-10
      py-3
      rounded-xl
      font-semibold
      transition
    "
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div
          className="
        space-y-6
        "
        >
          <CompanyCard internship={internship} onApply={handleApply} />
        </div>
      </div>
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div
      className="
bg-gray-50
rounded-xl
p-4
"
    >
      <div
        className="
text-gray-500
flex
gap-2
items-center
text-sm
"
      >
        {icon}

        {label}
      </div>

      <p
        className="
font-semibold
mt-2
"
      >
        {value}
      </p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div
      className="
bg-white
border
rounded-3xl
shadow-sm
p-8
"
    >
      <h2
        className="
text-xl
font-bold
mb-5
"
      >
        {title}
      </h2>

      {children}
    </div>
  );
}

function List({ items = [] }) {
  return (
    <div
      className="
space-y-3
"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="
flex
gap-3
items-center
text-gray-600
"
        >
          <CheckCircle size={18} className="text-green-600" />

          {item}
        </div>
      ))}
    </div>
  );
}

function CompanyCard({ internship, onApply }) {
  const employer = internship.employer;
  const companyName = employer?.companyName || "SkillNova Technologies";
  const logo = employer?.logo;
  const industry = employer?.industry;
  const website = employer?.website;
  const description = employer?.description;
  const openings = internship.openings;
  const verified = employer?.isVerified;

  const websiteHref =
    website && (website.startsWith("http") ? website : `https://${website}`);

  const websiteLabel = website
    ? (() => {
        try {
          return new URL(websiteHref).hostname.replace(/^www\./, "");
        } catch {
          return website;
        }
      })()
    : null;

  return (
    <div className="lg:sticky lg:top-6">
      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        {/* Banner */}
        <div className="h-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600" />

        <div className="px-6 pb-6">
          {/* Company logo */}
          <div className="-mt-10 mb-4">
            {logo ? (
              <img
                src={logo}
                alt={`${companyName} logo`}
                className="h-20 w-20 rounded-2xl border-4 border-white bg-white object-cover shadow-md"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-blue-600 to-indigo-600 text-3xl font-bold text-white shadow-md">
                {companyName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <h3 className="text-2xl font-bold text-slate-900">{companyName}</h3>

          {industry && (
            <p className="mt-1 text-sm font-medium text-slate-500">
              {industry}
            </p>
          )}

          {website && (
            <a
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              <Globe size={16} />
              {websiteLabel}
            </a>
          )}

          {description && (
            <div className="mt-6">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                About
              </h4>
              <p className="line-clamp-6 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          )}

          {/* Company statistics */}
          {(openings != null || verified) && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              {openings != null && (
                <div className="rounded-2xl bg-slate-50 p-4">
                  <Briefcase size={18} className="text-blue-600" />
                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {openings}
                  </p>
                  <p className="text-xs text-slate-500">Open Positions</p>
                </div>
              )}

              {verified && (
                <div className="rounded-2xl bg-green-50 p-4">
                  <CheckCircle size={18} className="text-green-600" />
                  <p className="mt-2 text-sm font-semibold text-green-700">
                    Verified Company
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sticky apply */}
        <div className="border-t border-slate-100 px-6 py-5">
          <button
            onClick={onApply}
            className="w-full rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
