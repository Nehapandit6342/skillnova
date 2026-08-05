import {
  Globe,
  Smartphone,
  Brain,
  Shield,
  Database,
  Palette,
  Cloud,
  Settings,
} from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

const domains = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Frontend, Backend & Full Stack internship opportunities.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Android, iOS and Flutter development internships.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Build intelligent systems using modern AI technologies.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Protect systems and learn ethical hacking practices.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Database,
    title: "Data Science",
    description:
      "Analyze data and build predictive models.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Create modern, user-friendly digital experiences.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Deploy scalable applications using cloud platforms.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Settings,
    title: "DevOps",
    description:
      "Learn CI/CD, Docker, Kubernetes and automation.",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export default function CareerDomainsSection() {
  return (
    <SectionContainer>
      <SectionHeading
        badge="Career Domains"
        title="Choose Your Career Path"
        description="Explore internships across the most in-demand technology fields and start building your future today."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {domains.map(({ icon: Icon, title, description, color }) => (
          <div
            key={title}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color} transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon className="h-8 w-8" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}