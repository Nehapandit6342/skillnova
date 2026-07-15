import { Lightbulb, CheckCircle2, FileText, Target } from "lucide-react";

export default function ResumeTips() {
  const tips = [
    {
      icon: FileText,
      title: "Keep it concise",
      description:
        "Limit your resume to one page unless you have extensive experience.",
    },
    {
      icon: Target,
      title: "Use job-specific keywords",
      description:
        "Customize your resume for every internship to improve ATS matching.",
    },
    {
      icon: CheckCircle2,
      title: "Show measurable impact",
      description:
        "Highlight achievements using numbers, percentages, or measurable outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Keep projects updated",
      description:
        "Include your latest projects, GitHub repository, and portfolio website.",
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-yellow-100 p-3">
          <Lightbulb className="h-6 w-6 text-yellow-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">Resume Tips</h2>

          <p className="text-slate-500">
            Best practices recommended by AI to improve your resume.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 space-y-5">
        {tips.map((tip) => {
          const Icon = tip.icon;

          return (
            <div
              key={tip.title}
              className="flex gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50"
            >
              <div className="rounded-xl bg-blue-100 p-3">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">{tip.title}</h3>

                <p className="mt-1 text-sm text-slate-500">{tip.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
