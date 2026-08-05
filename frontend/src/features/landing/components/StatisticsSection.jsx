import {
  Users,
  Building2,
  Briefcase,
  FileCheck,
} from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import useHome from "../hooks/useHome";

export default function StatisticsSection() {
  const { data, isLoading } = useHome();

  const stats = [
    {
      icon: Users,
      number: data?.stats?.totalStudents ?? 0,
      title: "Students",
      description: "Students building their careers with SkillNova",
    },
    {
      icon: Building2,
      number: data?.stats?.totalEmployers ?? 0,
      title: "Companies",
      description: "Hiring partners offering internship opportunities",
    },
    {
      icon: Briefcase,
      number: data?.stats?.totalInternships ?? 0,
      title: "Internships",
      description: "Curated internship opportunities across industries",
    },
    {
      icon: FileCheck,
      number: data?.stats?.totalApplications ?? 0,
      title: "Applications",
      description: "Students applied through SkillNova",
    },
  ];

  return (
    <SectionContainer>
      {/* Heading */}
      <div className="mb-12 text-center">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          Our Impact
        </span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Helping Students Build Successful Careers
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Thousands of students trust SkillNova to improve their resumes,
          learn new skills, and discover internship opportunities.
        </p>
      </div>

      {isLoading ? (
        <div className="py-10 text-center text-slate-500">
          Loading statistics...
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ icon: Icon, number, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={32} />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                {number}
              </h3>

              <p className="mt-2 text-lg font-semibold text-slate-800">
                {title}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      )}
    </SectionContainer>
  );
}