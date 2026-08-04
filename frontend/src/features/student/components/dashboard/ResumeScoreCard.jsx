import { useRef } from "react";

import { ArrowUpRight, CheckCircle2, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReAnalyzeResume } from "../../hooks/useReAnalyzeresume";
import { useResumeAnalysis } from "../../hooks/useResumeAnalysis";

export default function ResumeScoreCard() {
  const inputRef = useRef(null);

  const { mutate, isPending } = useReAnalyzeResume();
  const { data, isLoading } = useResumeAnalysis();

  if (isLoading) {
    return <div className="rounded-3xl border bg-white p-6">Loading...</div>;
  }

  const analysis = data?.data?.analysis;

  if (!analysis) {
    return (
      <div className="rounded-3xl border bg-white p-6">
        Resume not analyzed yet.
      </div>
    );
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("resume", file);

    mutate(formData);
  };
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            <Sparkles className="h-4 w-4" />
            AI Resume Analysis
          </div>

          <h2 className="mt-4 text-2xl font-bold">Resume Score</h2>

          <p className="mt-2 text-slate-500">
            Improve your ATS score with AI suggestions.
          </p>
        </div>

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <FileText className="h-10 w-10 text-blue-600" />
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-end gap-2">
          <h1 className="text-6xl font-bold text-blue-600">
            {analysis.atsScore}
          </h1>

          <span className="pb-2 text-2xl font-semibold text-slate-500">
            /100
          </span>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{
              width: `${analysis.atsScore}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {analysis.strengths?.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl bg-green-50 p-3"
          >
            <CheckCircle2 className="h-5 w-5 text-green-600" />

            <p className="text-sm">{item}</p>
          </div>
        ))}

        {analysis.improvementSuggestions?.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl bg-yellow-50 p-3"
          >
            <ArrowUpRight className="h-5 w-5 text-yellow-600" />

            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>

      <>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        <Button
          className="mt-8 w-full"
          onClick={() => inputRef.current.click()}
          disabled={isPending}
        >
          {isPending ? "Analyzing..." : "Analyze Resume Again"}
        </Button>
      </>
    </div>
  );
}
