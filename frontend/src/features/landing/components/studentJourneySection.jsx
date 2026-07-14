import {
  UserPlus,
  FileText,
  BrainCircuit,
  BookOpen,
  Briefcase,
  Trophy,
  ArrowRight,
} from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    icon: UserPlus,
    title: "Create Profile",
    description: "Build your professional profile and set your career goals.",
  },
  {
    icon: FileText,
    title: "Upload Resume",
    description: "Upload or build your ATS-friendly resume.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description: "Receive resume feedback and identify missing skills.",
  },
  {
    icon: BookOpen,
    title: "Learn & Improve",
    description: "Follow a personalized roadmap to become industry-ready.",
  },
  {
    icon: Briefcase,
    title: "Apply for Internships",
    description: "Get AI-matched internship opportunities.",
  },
  {
    icon: Trophy,
    title: "Launch Your Career",
    description: "Land internships and start your professional journey.",
  },
];

export default function StudentJourneySection() {
  return (
    <SectionContainer>
      <SectionHeading
        badge="Student Journey"
        title="Your Journey from Student to Professional"
        description="SkillNova guides you through every stage of your career preparation."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div key={title} className="relative text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Icon className="h-8 w-8" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {description}
            </p>

            {index !== steps.length - 1 && (
              <ArrowRight className="absolute -right-5 top-7 hidden h-5 w-5 text-slate-300 xl:block" />
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
