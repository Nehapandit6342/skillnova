import {
  BrainCircuit,
  Target,
  Map,
  Briefcase,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/cards/FeatureCard";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Resume Analysis",
    description:
      "Receive an AI-powered resume score with ATS feedback, strengths, weaknesses, and personalized suggestions.",
  },
  {
    icon: Target,
    title: "Skill Gap Detection",
    description:
      "Compare your current skills with industry requirements and discover what you need to learn next.",
  },
  {
    icon: Map,
    title: "Personalized Career Roadmap",
    description:
      "Generate a step-by-step learning roadmap based on your career goals and current skill level.",
  },
  {
    icon: Briefcase,
    title: "Smart Internship Matching",
    description:
      "Find internships that align with your skills, education, and career aspirations.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey, resume improvements, and internship applications from one dashboard.",
  },
  {
    icon: Sparkles,
    title: "AI Career Insights",
    description:
      "Get personalized career guidance and recommendations to stay on the right learning path.",
  },
];

export default function WhySkillNovaSection() {
  return (
    <SectionContainer>
      <SectionHeading
        badge="Why Choose SkillNova"
        title="Everything You Need to Become Industry-Ready"
        description="SkillNova combines artificial intelligence with career guidance to help students build stronger resumes, learn in-demand skills, and discover the right internship opportunities."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
