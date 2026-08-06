import { Link } from "react-router-dom";
import {
  Building2,
  CalendarDays,
  MapPin,
  Clock3,
  ExternalLink,
} from "lucide-react";

import ApplicationStatusBadge from "./ApplicationStatusBadge";

export default function ApplicationCard({ application }) {
  const internship = application.internship;
  const employer = internship.employer;

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        {/* Left */}

        <div className="flex gap-4">
          <img
            src={employer?.logo || "https://placehold.co/80x80?text=Logo"}
            alt={employer?.companyName}
            className="h-16 w-16 rounded-lg border object-cover"
          />

          <div>
            <h2 className="text-xl font-semibold">{internship.title}</h2>

            <div className="mt-2 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                {employer.companyName}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {internship.location || "Remote"}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                {internship.type || "Internship"}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                Applied on{" "}
                {new Date(application.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <ApplicationStatusBadge status={application.status} />

          {internship.deadline && (
            <p className="text-sm text-slate-500">
              Deadline : {new Date(internship.deadline).toLocaleDateString()}
            </p>
          )}

          <Link
            to={`/internships/${internship.id}`}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            View Internship
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
