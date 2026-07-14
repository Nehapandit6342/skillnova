import { Briefcase, MapPin, IndianRupee, Sparkles } from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

const internships = [
  {
    company: "TechNova",
    role: "Frontend Developer Intern",
    location: "Kathmandu, Nepal",
    stipend: "NPR 15,000/month",
    match: 96,
    skills: ["React", "JavaScript", "Tailwind"],
  },
  {
    company: "CloudNest",
    role: "Backend Developer Intern",
    location: "Remote",
    stipend: "NPR 20,000/month",
    match: 92,
    skills: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    company: "AI Labs",
    role: "Full Stack Intern",
    location: "Pokhara",
    stipend: "NPR 18,000/month",
    match: 89,
    skills: ["React", "Node.js", "Prisma"],
  },
];

export default function InternshipRecommendationSection() {
  return (
    <SectionContainer>
      <SectionHeading
        badge="AI Internship Matching"
        title="Internships Recommended Just for You"
        description="SkillNova analyzes your resume, skills, and career goals to recommend internships where you have the highest chance of success."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {internships.map((job) => (
          <div
            key={job.company}
            className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {job.role}
                </h3>

                <p className="mt-1 text-slate-500">{job.company}</p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {job.match}% Match
              </span>
            </div>

            {/* Info */}
            <div className="mt-6 space-y-3 text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                {job.location}
              </div>

              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-blue-600" />
                {job.stipend}
              </div>

              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-blue-600" />
                Internship
              </div>
            </div>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* AI Badge */}
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
    </SectionContainer>
  );
}
