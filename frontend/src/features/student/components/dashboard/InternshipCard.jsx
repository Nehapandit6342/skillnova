import { Building2, Clock3, MapPin, Bookmark } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function InternshipCard({
  company,
  position,
  location,
  type,
  logo,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <img
            src={logo}
            alt={company}
            className="h-14 w-14 rounded-xl border object-cover"
          />

          <div>
            <h3 className="text-lg font-semibold text-slate-900">{position}</h3>

            <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <Building2 className="h-4 w-4" />
              {company}
            </div>
          </div>
        </div>

        <Bookmark className="h-5 w-5 cursor-pointer text-slate-400 hover:text-blue-600" />
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm">
          <MapPin className="h-4 w-4" />
          {location}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          <Clock3 className="h-4 w-4" />
          {type}
        </span>
      </div>

      <Button className="mt-6 w-full">Apply Now</Button>
    </div>
  );
}
