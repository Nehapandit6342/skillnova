import { CalendarDays, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useUpcomingDeadlines } from "../../hooks/useUpcomingDeadlines";

export default function UpcomingDeadlines() {
  const navigate = useNavigate();

  const { data, isLoading } = useUpcomingDeadlines();

  if (isLoading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        Loading...
      </div>
    );
  }

  const deadlines = data?.deadlines || [];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Upcoming Deadlines</h2>

      <p className="mt-2 text-slate-500">
        Don't miss your internship application deadlines.
      </p>

      {deadlines.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-200 p-8 text-center">
          <CalendarDays className="mx-auto h-10 w-10 text-slate-300" />

          <h3 className="mt-4 font-semibold text-slate-800">
            No upcoming deadlines
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Apply to internships to see deadlines here.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          {deadlines.map((deadline) => (
            <div
              key={deadline.id}
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
                {format(new Date(deadline.deadline), "MMM dd")}
              </span>
            </div>
          ))}
        </div>
      )}

      <Button
        variant="outline"
        className="mt-8 w-full"
        onClick={() => navigate("/student/applications")}
      >
        View All Applications
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
