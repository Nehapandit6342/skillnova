import { BookOpen, Clock3, ArrowRight, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLearningPlan } from "../../hooks/useLearningPlan";

export default function LearningRoadmapCard() {
  const { data, isLoading } = useLearningPlan();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="rounded-3xl border bg-white p-6">
        Loading learning plan...
      </div>
    );
  }

  const roadmap = data?.learningPlan || [];
  const visibleSteps = roadmap.slice(0, 2);

  const remainingSteps = roadmap.length - visibleSteps.length;

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
        {visibleSteps.map((step, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
          >
            <Circle className="mt-1 h-5 w-5 text-emerald-500" />

            <div className="flex-1">
              <h3 className="font-semibold text-slate-900">
                Step {index + 1}: {step.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                {step.description}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock3 className="h-4 w-4" />
                  {step.estimatedDuration}
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    step.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : step.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-600"
                  }`}
                >
                  {step.priority}
                </span>
              </div>
            </div>
          </div>
        ))}
        {remainingSteps > 0 && (
          <button
            type="button"
            onClick={() => navigate("/student/learning-roadmap")}
            className="mt-4 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
          >
            View {remainingSteps} more step
            {remainingSteps > 1 ? "s" : ""} →
          </button>
        )}
      </div>

      {/* Progress */}
      <div className="mt-8 rounded-2xl bg-emerald-50 p-5">
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-700">Learning Tasks</span>

          <span className="font-bold text-emerald-600">{roadmap.length}</span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-emerald-100">
          <div
            className="h-full rounded-full bg-emerald-600"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>

      <Button
        className="mt-8 w-full"
        onClick={() => navigate("/student/learning-roadmap")}
      >
        Continue Learning
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
