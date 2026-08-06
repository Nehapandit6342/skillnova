import { Brain, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSkillGap } from "../../hooks/useSkillGap";
import { useNavigate } from "react-router-dom";
export default function SkillGapCard() {
  const { data, isLoading } = useSkillGap();
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="rounded-3xl border bg-white p-6">Loading...</div>;
  }

  const analysis = data?.skillGap;
  const visibleSkills = analysis?.missingSkills?.slice(0, 3) || [];

  const remainingSkills =
    (analysis?.missingSkills?.length || 0) - visibleSkills.length;

  if (!analysis) {
    return (
      <div className="rounded-3xl border bg-white p-6">
        No skill gap available.
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-purple-100 p-4">
          <Brain className="h-8 w-8 text-purple-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">AI Skill Gap Analysis</h2>

          <p className="text-slate-500">
            Skills required for your target role.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {visibleSkills.map((skill) => (
          <div key={skill}>
            <div className="mb-2 flex justify-between">
              <span className="font-medium">{skill}</span>

              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
                Missing
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-red-500"
                style={{ width: "20%" }}
              />
            </div>
          </div>
        ))}
        {remainingSkills > 0 && (
          <button
            type="button"
            onClick={() => navigate("/student/skill-gap")}
            className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
          >
            + {remainingSkills} more skill{remainingSkills > 1 ? "s" : ""} →
          </button>
        )}
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-5">
        <div className="flex gap-3">
          <BookOpen className="mt-1 h-5 w-5 text-blue-600" />

          <div>
            <h3 className="font-semibold">AI Recommendation</h3>

            <p className="mt-2 text-sm text-slate-600">
              Learning these skills can significantly improve your internship
              match score.
            </p>
          </div>
        </div>
      </div>

      <Button
        className="mt-8 w-full"
        onClick={() => navigate("/student/skill-gap")}
      >
        View Full Analysis
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
