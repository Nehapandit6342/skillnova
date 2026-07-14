import { Briefcase, Building2, Globe, MapPin, Target } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CareerCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Career Preferences
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Help us recommend the best internships for you.
          </p>
        </div>

        <Button variant="outline" size="sm">
          Edit
        </Button>
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Target className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Career Goal</p>

            <h3 className="font-semibold text-slate-900">
              Full Stack Developer
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
            <Briefcase className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Preferred Internship</p>

            <h3 className="font-semibold text-slate-900">
              Software Engineering
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
            <Globe className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Work Mode</p>

            <h3 className="font-semibold text-slate-900">Remote / Hybrid</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
            <MapPin className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Preferred Location</p>

            <h3 className="font-semibold text-slate-900">Kathmandu, Nepal</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
            <Building2 className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Preferred Company Size</p>

            <h3 className="font-semibold text-slate-900">Startup / Mid-size</h3>
          </div>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4">
        <h3 className="font-semibold text-blue-700">🤖 AI Recommendation</h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Based on your profile, you are best suited for Frontend, Full Stack,
          and Software Engineering internships.
        </p>
      </div>
    </section>
  );
}
