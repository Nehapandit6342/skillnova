import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Clock3,
  FileSearch,
  Flame,
  ListChecks,
  Sparkles,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useLearningPlan } from "../hooks/useLearningPlan";

const PRIORITY_STYLES = {
  high: "bg-red-100 text-red-600",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-green-100 text-green-600",
  unknown: "bg-slate-100 text-slate-600",
};

function normalizePriority(priority) {
  const value = String(priority || "").trim().toLowerCase();

  if (!value) return "unknown";

  if (value.startsWith("high")) return "high";

  if (value.startsWith("medium")) return "medium";

  if (value.startsWith("low")) return "low";

  return "unknown";
}

function priorityLabel(priority) {
  const key = normalizePriority(priority);

  if (key === "unknown") return priority || "Priority";

  return key.charAt(0).toUpperCase() + key.slice(1);
}

// Converts an estimated duration string (e.g. "2-3 weeks") to weeks.
function parseDurationToWeeks(duration) {
  if (!duration) return null;

  const lower = String(duration).toLowerCase();

  const unitMatch = lower.match(/(month|week|day|hour|hr)/);

  if (!unitMatch) return null;

  const numbers = lower.match(/\d+(\.\d+)?/g);

  if (!numbers) return null;

  const value = Math.max(...numbers.map(Number));

  const multipliers = {
    month: 4.33,
    week: 1,
    day: 1 / 7,
    hour: 1 / 168,
    hr: 1 / 168,
  };

  return value * multipliers[unitMatch[1]];
}

function formatDuration(weeks) {
  if (weeks >= 4) {
    const months = Math.round((weeks / 4.33) * 10) / 10;

    return `${months} months`;
  }

  if (weeks >= 1) {
    return `${Math.round(weeks)} weeks`;
  }

  if (weeks >= 1 / 7) {
    return `${Math.max(1, Math.round(weeks * 7))} days`;
  }

  return `${Math.max(1, Math.round(weeks * 168))} hours`;
}

function OverviewCard({ title, value, description, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 line-clamp-2 break-words text-2xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">{description}</p>
        </div>

        <div
          className={`ml-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${color}`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
      </div>
    </div>
  );
}

function RoadmapSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-36 animate-pulse rounded-2xl bg-slate-100"
          />
        ))}
      </div>

      <div className="space-y-5">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex gap-4 sm:gap-6">
            <div className="h-12 w-12 shrink-0 animate-pulse rounded-full bg-slate-100 sm:h-16 sm:w-16" />

            <div className="flex-1 animate-pulse rounded-2xl bg-slate-100 p-6">
              <div className="h-5 w-1/3 rounded bg-slate-200" />

              <div className="mt-3 h-4 w-full rounded bg-slate-200" />

              <div className="mt-2 h-4 w-2/3 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LearningRoadmap() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const { data, isLoading, isError, error, refetch } = useLearningPlan();

  const roadmap = Array.isArray(data?.learningPlan) ? data.learningPlan : [];

  const careerGoal = user?.studentProfile?.careerGoal;

  const totalSteps = roadmap.length;

  const highPriorityCount = roadmap.filter(
    (step) => normalizePriority(step.priority) === "high",
  ).length;

  const totalWeeks = roadmap.reduce((sum, step) => {
    const weeks = parseDurationToWeeks(step.estimatedDuration);

    return weeks ? sum + weeks : sum;
  }, 0);

  const totalDuration = totalWeeks > 0 ? formatDuration(totalWeeks) : null;

  return (
    <div className="space-y-8">
      {/* Back */}
      <button
        type="button"
        onClick={() => navigate("/student/dashboard")}
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </button>

      {/* Header */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative flex items-center gap-4 sm:gap-5">
          <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
            <BookOpen className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>

          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">
              Learning Roadmap
            </h1>

            <p className="mt-2 text-sm text-emerald-50 sm:text-base">
              Your personalized AI-powered learning journey.
            </p>
          </div>
        </div>
      </header>

      {isLoading ? (
        <RoadmapSkeleton />
      ) : isError ? (
        <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500" />

          <h2 className="mt-4 text-xl font-bold text-red-700">
            Failed to load your learning roadmap
          </h2>

          <p className="mt-2 text-red-600">
            {error?.response?.data?.message ||
              error?.message ||
              "Something went wrong. Please try again."}
          </p>

          <Button className="mt-6" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : roadmap.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center sm:p-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <FileSearch className="h-10 w-10 text-emerald-600" />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            No learning roadmap available.
          </h2>

          <p className="mx-auto mt-2 max-w-md text-slate-500">
            Upload and analyze your resume to generate a personalized roadmap.
          </p>

          <Button
            className="mt-6"
            onClick={() => navigate("/student/resume-builder")}
          >
            Analyze Resume
          </Button>
        </div>
      ) : (
        <>
          {/* Overview Cards */}
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <OverviewCard
              title="Learning Steps"
              value={totalSteps}
              description="Total steps in your roadmap"
              icon={ListChecks}
              color="bg-emerald-600"
            />

            <OverviewCard
              title="High Priority"
              value={highPriorityCount}
              description="Tasks to focus on first"
              icon={Flame}
              color="bg-red-500"
            />

            {totalDuration && (
              <OverviewCard
                title="Estimated Duration"
                value={totalDuration}
                description="To complete the full roadmap"
                icon={Clock3}
                color="bg-teal-600"
              />
            )}

            {careerGoal && (
              <OverviewCard
                title="Career Goal"
                value={careerGoal}
                description="Your target role"
                icon={Target}
                color="bg-violet-600"
              />
            )}
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Your Learning Journey
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Follow the steps in order to build the skills you need.
            </p>

            <div className="relative mt-8">
              <div className="absolute bottom-4 left-6 top-4 w-0.5 bg-gradient-to-b from-emerald-200 via-teal-200 to-slate-200 sm:left-8" />

              <div className="space-y-6">
                {roadmap.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex gap-4 sm:gap-6"
                  >
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-base font-bold text-white shadow-md sm:h-16 sm:w-16 sm:text-lg">
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                          {step.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${PRIORITY_STYLES[normalizePriority(step.priority)]}`}
                        >
                          {priorityLabel(step.priority)}
                        </span>
                      </div>

                      {step.description && (
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      )}

                      <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                        <Clock3 className="h-4 w-4 shrink-0" />
                        {step.estimatedDuration || "Flexible duration"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Recommendation */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 p-8 text-white shadow-lg sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex items-start gap-4 sm:gap-5">
              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
                <Sparkles className="h-8 w-8" />
              </div>

              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  AI Recommendation
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-violet-100 sm:text-base">
                  Completing this roadmap will strengthen the skills recruiters
                  look for, improving your internship recommendations and
                  overall career readiness. Stay consistent, practice daily,
                  and revisit each step as you level up.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
