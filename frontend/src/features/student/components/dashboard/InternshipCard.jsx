import {
  Building2,
  Clock3,
  MapPin,
  Bookmark,
  Award,
  DollarSign,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function InternshipCard({ internship }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {internship.title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <Building2 className="h-4 w-4" />
            {internship.company}
          </div>
        </div>

        <Bookmark className="h-5 w-5 cursor-pointer text-slate-400 hover:text-blue-600" />
      </div>

      {/* Match Score */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">Match Score</span>

          <span className="font-bold text-blue-600">
            {internship.matchScore}%
          </span>
        </div>

        <div className="h-2 rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{
              width: `${internship.matchScore}%`,
            }}
          />
        </div>
      </div>

      {/* Details */}
      <div className="mt-5 space-y-2 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {internship.location}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4" />
          {internship.type}
        </div>

        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" />
          {internship.stipend}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-5">
        <p className="mb-2 flex items-center gap-2 text-sm font-medium">
          <Award className="h-4 w-4 text-blue-600" />
          Matched Skills
        </p>

        <div className="flex flex-wrap gap-2">
          {internship.matchedSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Button className="mt-6 w-full">View Details</Button>
    </div>
  );
}
