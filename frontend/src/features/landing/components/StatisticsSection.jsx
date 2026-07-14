import { Users, Building2, Briefcase, FileCheck } from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

const stats = [
  {
    icon: Users,
    number: "15K+",
    title: "Students",
    description: "Students building their careers with SkillNova",
  },
  {
    icon: Building2,
    number: "250+",
    title: "Companies",
    description: "Hiring partners offering internship opportunities",
  },
  {
    icon: Briefcase,
    number: "1,500+",
    title: "Internships",
    description: "Curated internship opportunities across industries",
  },
  {
    icon: FileCheck,
    number: "98%",
    title: "Resume Success",
    description: "Students improved their resume after AI analysis",
  },
];

export default function StatisticsSection() {
  return (
    <SectionContainer>
      <SectionHeading
        badge="Our Impact"
        title="Helping Students Build Successful Careers"
        description="Thousands of students trust SkillNova to improve their resumes, learn new skills, and discover internship opportunities."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ icon: Icon, number, title, description }) => (
          <div
            key={title}
            className="group rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <Icon className="h-8 w-8" />
            </div>

            <h3 className="mt-6 text-4xl font-bold text-slate-900">{number}</h3>

            <p className="mt-2 text-lg font-semibold text-slate-800">{title}</p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
