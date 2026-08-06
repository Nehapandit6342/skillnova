import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  Clock3,
  FileSearch,
  ListChecks,
  Route,
  RotateCcw,
  Sparkles,
  Target,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCareerRoadmap } from "../hooks/useCareerRoadmap";

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function RoadmapHero({ totalSteps, isLoading }) {
  return (
    <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-lg sm:p-10">
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
            <Route className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>

          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Career Roadmap</h1>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-indigo-50 sm:text-base">
              Your personalized AI-generated career journey based on your
              resume, ATS score, skills, and career goal.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Badge className="h-7 gap-1.5 rounded-full border-white/30 bg-white/20 px-3 text-xs font-semibold text-white backdrop-blur">
            <Sparkles className="size-3.5" />
            AI Generated
          </Badge>

          {!isLoading && (
            <Badge className="h-7 gap-1.5 rounded-full border-white/30 bg-white/20 px-3 text-xs font-semibold text-white backdrop-blur">
              <ListChecks className="size-3.5" />
              {totalSteps} {totalSteps === 1 ? "Step" : "Steps"}
            </Badge>
          )}
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Progress card                                                      */
/* ------------------------------------------------------------------ */

function RoadmapProgressCard({ completed, total, onReset }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Your Progress</h2>

          <p className="mt-1 text-sm text-slate-500">
            Completed Steps:{" "}
            <span className="font-semibold text-indigo-600">
              {completed} / {total}
            </span>
          </p>
        </div>

        {completed > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-slate-500 hover:text-red-600"
            onClick={onReset}
          >
            <RotateCcw className="size-3.5" />
            Reset
          </Button>
        )}
      </div>

      <div className="mt-5">
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mt-2 flex items-center justify-between text-xs font-medium text-slate-500">
          <span>{percentage}% complete</span>

          <span>{total - completed} remaining</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Timeline                                                           */
/* ------------------------------------------------------------------ */

function MilestoneCard({ step, index, isCompleted, onToggle }) {
  const stepNumber = step.step ?? index + 1;

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Connector node */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-md sm:h-16 sm:w-16 sm:text-lg">
        {isCompleted ? (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600">
            <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
            {stepNumber}
          </div>
        )}
      </div>

      {/* Card */}
      <div
        className={`min-w-0 flex-1 rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6 ${
          isCompleted
            ? "border-emerald-200 hover:border-emerald-300"
            : "border-slate-200 hover:border-indigo-200"
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <Badge
              variant="secondary"
              className={`h-5 rounded-full px-2.5 text-[0.7rem] font-semibold ${
                isCompleted
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-indigo-50 text-indigo-700"
              }`}
            >
              Step {stepNumber}
            </Badge>

            <h3 className="mt-2.5 text-base font-semibold text-slate-900 sm:text-lg">
              {step.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onToggle}
            aria-label={
              isCompleted ? "Mark as not completed" : "Mark as completed"
            }
            title={isCompleted ? "Mark as not completed" : "Mark as completed"}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
              isCompleted
                ? "bg-emerald-500 text-white shadow-sm hover:bg-emerald-600"
                : "bg-slate-100 text-slate-400 hover:bg-indigo-100 hover:text-indigo-600"
            }`}
          >
            <CheckCircle className="h-5 w-5" />
          </button>
        </div>

        {step.description && (
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {step.description}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {step.estimatedDuration && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-100">
              <Clock3 className="size-3.5 text-indigo-500" />
              {step.estimatedDuration}
            </span>
          )}

          {step.goal && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-100">
              <Target className="size-3.5 text-blue-500" />
              {step.goal}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function RoadmapTimeline({ roadmap, completedSteps, onToggle }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900">Your Career Journey</h2>

      <p className="mt-1 text-sm text-slate-500">
        Follow the milestones in order and mark each one complete as you
        achieve it.
      </p>

      <div className="relative mt-8">
        <div className="absolute bottom-4 left-6 top-4 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-slate-200 sm:left-8" />

        <div className="space-y-6">
          {roadmap.map((step, index) => {
            const isCompleted = completedSteps.includes(index);

            return (
              <MilestoneCard
                key={index}
                step={step}
                index={index}
                isCompleted={isCompleted}
                onToggle={() => onToggle(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Loading skeleton                                                   */
/* ------------------------------------------------------------------ */

function RoadmapSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-44 animate-pulse rounded-3xl bg-slate-100 sm:h-48" />

      <div className="h-40 animate-pulse rounded-2xl bg-slate-100" />

      <div className="space-y-5">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex gap-4 sm:gap-6">
            <div className="h-12 w-12 shrink-0 animate-pulse rounded-full bg-slate-100 sm:h-16 sm:w-16" />

            <div className="flex-1 animate-pulse rounded-2xl bg-slate-100 p-6">
              <div className="h-4 w-24 rounded bg-slate-200" />

              <div className="mt-3 h-5 w-1/3 rounded bg-slate-200" />

              <div className="mt-3 h-4 w-full rounded bg-slate-200" />

              <div className="mt-2 h-4 w-2/3 rounded bg-slate-200" />

              <div className="mt-4 h-8 w-1/2 rounded-full bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Empty state                                                        */
/* ------------------------------------------------------------------ */

function RoadmapEmptyState() {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center sm:p-14">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
        <FileSearch className="h-10 w-10 text-indigo-600" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        No Career Roadmap Yet
      </h2>

      <p className="mx-auto mt-2 max-w-md text-slate-500">
        Upload and analyze your resume to generate your personalized AI Career
        Roadmap.
      </p>

      <Button className="mt-6" onClick={() => navigate("/student/resume-builder")}>
        Go to Resume Builder
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Error state                                                        */
/* ------------------------------------------------------------------ */

function RoadmapErrorState({ error, onRetry }) {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center sm:p-14">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
        <AlertCircle className="h-10 w-10 text-red-500" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-red-700">
        Failed to load your Career Roadmap
      </h2>

      <p className="mx-auto mt-2 max-w-md text-red-600">
        {error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again."}
      </p>

      <Button className="mt-6" onClick={onRetry}>
        Retry
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CareerRoadmap() {
  const navigate = useNavigate();

  const { data, isLoading, isError, error, refetch } = useCareerRoadmap();

  const roadmap = Array.isArray(data?.careerRoadmap)
    ? data.careerRoadmap
    : [];

  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (stepNumber) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNumber)
        ? prev.filter((s) => s !== stepNumber)
        : [...prev, stepNumber],
    );
  };

  const resetProgress = () => {
    setCompletedSteps([]);
  };

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

      {/* Hero */}
      <RoadmapHero totalSteps={roadmap.length} isLoading={isLoading} />

      {isLoading ? (
        <RoadmapSkeleton />
      ) : isError ? (
        <RoadmapErrorState error={error} onRetry={() => refetch()} />
      ) : roadmap.length === 0 ? (
        <RoadmapEmptyState />
      ) : (
        <>
          {/* Progress */}
          <RoadmapProgressCard
            completed={completedSteps.length}
            total={roadmap.length}
            onReset={resetProgress}
          />

          {/* Timeline */}
          <RoadmapTimeline
            roadmap={roadmap}
            completedSteps={completedSteps}
            onToggle={toggleStep}
          />
        </>
      )}
    </div>
  );
}
