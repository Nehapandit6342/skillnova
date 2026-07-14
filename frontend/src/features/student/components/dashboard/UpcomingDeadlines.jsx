import { CalendarDays, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const deadlines = [
  {
    company: "Google",
    role: "Frontend Developer Intern",
    date: "July 20",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    date: "July 25",
  },
  {
    company: "Fusemachines",
    role: "AI Intern",
    date: "July 30",
  },
];

export default function UpcomingDeadlines() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Upcoming Deadlines</h2>

      <p className="mt-2 text-slate-500">
        Don't miss your internship application deadlines.
      </p>

      <div className="mt-8 space-y-5">
        {deadlines.map((deadline) => (
          <div
            key={deadline.company}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-4"
          >
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                <CalendarDays className="h-6 w-6 text-red-600" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {deadline.role}
                </h3>

                <p className="text-sm text-slate-500">{deadline.company}</p>
              </div>
            </div>

            <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600">
              {deadline.date}
            </span>
          </div>
        ))}
      </div>

      <Button variant="outline" className="mt-8 w-full">
        View All Applications
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
