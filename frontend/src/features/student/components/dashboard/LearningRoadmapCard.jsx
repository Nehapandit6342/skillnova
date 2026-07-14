import { BookOpen, CheckCircle2, Clock3, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const roadmap = [
  {
    title: "Master React Hooks",
    duration: "1 Week",
    completed: true,
  },
  {
    title: "Build REST APIs with Express",
    duration: "2 Weeks",
    completed: true,
  },
  {
    title: "Learn Docker Basics",
    duration: "1 Week",
    completed: false,
  },
  {
    title: "Deploy using AWS",
    duration: "2 Weeks",
    completed: false,
  },
];

export default function LearningRoadmapCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-emerald-100 p-4">
          <BookOpen className="h-8 w-8 text-emerald-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Learning Roadmap
          </h2>

          <p className="text-slate-500">
            AI-generated roadmap based on your career goal.
          </p>
        </div>
      </div>

      {/* Timeline */}

      <div className="mt-8 space-y-5">
        {roadmap.map((step, index) => (
          <div
            key={step.title}
            className="flex gap-4 rounded-2xl border border-slate-100 p-4 hover:bg-slate-50 transition"
          >
            <div>
              {step.completed ? (
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              ) : (
                <div className="h-6 w-6 rounded-full border-2 border-slate-300" />
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-slate-900">
                Step {index + 1}: {step.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <Clock3 className="h-4 w-4" />
                {step.duration}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress */}

      <div className="mt-8 rounded-2xl bg-emerald-50 p-5">
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-700">Roadmap Progress</span>

          <span className="font-bold text-emerald-600">50%</span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-emerald-100">
          <div className="h-full w-1/2 rounded-full bg-emerald-600" />
        </div>
      </div>

      <Button className="mt-8 w-full">
        Continue Learning
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
