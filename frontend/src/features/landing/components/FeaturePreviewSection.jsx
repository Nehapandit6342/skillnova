import { Brain, Target, Map, Briefcase } from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import FeatureCard from "@/components/cards/FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI Resume Analysis",
    description:
      "Get an AI-powered resume score with personalized improvement suggestions.",
  },
  {
    icon: Target,
    title: "Skill Gap Detection",
    description: "Identify missing skills required for your dream career.",
  },
  {
    icon: Map,
    title: "Career Roadmap",
    description:
      "Receive a personalized learning roadmap tailored to your goals.",
  },
  {
    icon: Briefcase,
    title: "Internship Matching",
    description:
      "Discover internships that match your skills and career aspirations.",
  },
];

export default function FeaturePreviewSection() {
  return (
    <SectionContainer>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
