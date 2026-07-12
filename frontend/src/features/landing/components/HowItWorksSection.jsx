import {
  UserRound,
  FileText,
  BrainCircuit,
  Map,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import StepCard from "@/components/cards/StepCard";

const steps = [
  {
    icon: UserRound,
    title: "Create Profile",
    description: "Complete your profile.",
  },
  {
    icon: FileText,
    title: "Build Resume",
    description: "Create or upload your CV.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description: "Analyze your resume.",
  },
  {
    icon: Map,
    title: "Career Roadmap",
    description: "Get a learning plan.",
  },
  {
    icon: Briefcase,
    title: "Find Internships",
    description: "Receive AI matches.",
  },
  {
    icon: CheckCircle2,
    title: "Apply & Track",
    description: "Monitor application status.",
  },
];

export default function HowItWorksSection() {
  return (
    <SectionContainer>
      <SectionHeading
        badge="How It Works"
        title="Your Journey with SkillNova"
        description="From profile creation to landing the right internship, SkillNova guides every step with AI."
      />

      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <StepCard
            key={step.title}
            {...step}
            showArrow={index !== steps.length - 1}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
