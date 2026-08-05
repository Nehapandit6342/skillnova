import { Briefcase, MapPin, IndianRupee, Sparkles } from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

import useHome from "../hooks/useHome";

export default function InternshipRecommendationSection() {
  const { data, isLoading } = useHome();

  const internships = data?.latestInternships || [];

  return (
    <SectionContainer>
      <SectionHeading
        badge="AI Internship Matching"
        title="Internships Recommended Just for You"
        description="SkillNova analyzes your resume, skills, and career goals to recommend internships where you have the highest chance of success."
      />

      {isLoading ? (
        <div className="py-16 text-center text-slate-500">
          Loading internships...
        </div>
      ) : internships.length === 0 ? (
        <div className="py-16 text-center text-slate-500">
          No internships available.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          {internships.map((job) => (
            <div
              key={job.id}
              className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {job.title}
                  </h3>

                  <p className="mt-1 text-slate-500">
                    {job.employer?.companyName || "Company"}
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  New
                </span>
              </div>

              {/* Internship Details */}
              <div className="mt-6 space-y-3 text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  {job.location || "Remote"}
                </div>

                <div className="flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-blue-600" />
                  {job.stipend ? `NPR ${job.stipend}` : "Negotiable"}
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-blue-600" />
                  {job.type || "Internship"}
                </div>
              </div>

              {/* AI Recommendation */}
              <div className="mt-6 flex items-center gap-2 rounded-xl bg-blue-50 p-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Recommended by SkillNova AI
                </span>
              </div>

              <Button className="mt-6 w-full">View Internship</Button>
            </div>
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
