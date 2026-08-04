import {
  Brain,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useResumeAnalysis } from "../../hooks/useResumeAnalysis";

export default function AIAnalysisCard() {
  const { data, isLoading } = useResumeAnalysis();

  if (isLoading) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        Loading analysis...
      </section>
    );
  }

  const analysis = data?.data?.analysis;

  if (!analysis) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        No AI analysis available.
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-violet-100 p-4">
          <Brain className="h-7 w-7 text-violet-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            AI Resume Analysis
          </h2>

          <p className="mt-2 text-slate-600 leading-7">{analysis.summary}</p>
        </div>
      </div>

      {/* Grid */}

      <div className="mt-8 space-y-5">
        <Accordion type="multiple" className="mt-8 space-y-4">
          <AccordionItem value="strengths" className="rounded-2xl border px-5">
            <AccordionTrigger className="font-semibold text-green-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Strengths
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                  {analysis.strengths.length}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <ul className="space-y-3 text-sm text-slate-600">
                {analysis.strengths.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="weaknesses" className="rounded-2xl border px-5">
            <AccordionTrigger className="font-semibold text-amber-600">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Areas to Improve
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                  {analysis.weaknesses.length}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <ul className="space-y-3 text-sm text-slate-600">
                {analysis.weaknesses.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="recommendations"
            className="rounded-2xl border px-5"
          >
            <AccordionTrigger className="font-semibold text-blue-600">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                AI Recommendations
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                  {analysis.improvementSuggestions.length}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <ul className="space-y-3 text-sm text-slate-600">
                {analysis.improvementSuggestions.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
