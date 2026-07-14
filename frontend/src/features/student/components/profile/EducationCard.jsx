import { BookOpen, Calendar, GraduationCap, School, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function EducationCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Education</h2>

          <p className="mt-1 text-sm text-slate-500">
            Academic information and progress.
          </p>
        </div>

        <Button variant="outline" size="sm">
          Edit
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
            <School className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">University</p>

            <h3 className="font-semibold text-slate-900">Pokhara University</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <GraduationCap className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Degree</p>

            <h3 className="font-semibold text-slate-900">
              B.E. Computer Engineering
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
            <BookOpen className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Current Semester</p>

            <h3 className="font-semibold text-slate-900">8th Semester</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
            <Star className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">CGPA</p>

            <h3 className="font-semibold text-slate-900">3.96 / 4.00</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-rose-100 p-3 text-rose-600">
            <Calendar className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Expected Graduation</p>

            <h3 className="font-semibold text-slate-900">2026</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
