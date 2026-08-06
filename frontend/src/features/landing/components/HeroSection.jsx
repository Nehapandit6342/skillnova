import {
  ArrowRight,
  Briefcase,
  Building2,
  FileCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useHome from "../hooks/useHome";
import InternshipExplorerSection from "./InternshipExplorerSection";

const statItems = [
  { key: "totalStudents", icon: Users, label: "Students" },
  { key: "totalEmployers", icon: Building2, label: "Companies" },
  { key: "totalInternships", icon: Briefcase, label: "Internships" },
  { key: "totalApplications", icon: FileCheck, label: "Applications" },
];

export default function HeroSection() {
  const { data } = useHome();
  const stats = data?.stats || {};

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-4 pt-5 lg:px-8 lg:pb-5 lg:pt-10">
        {/* Centered intro */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Badge className="rounded-full border-white/20 bg-white/10 px-3 py-0.5 text-xs text-blue-50 backdrop-blur">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            AI Career Platform
          </Badge>

          <h1 className="mt-2 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-4xl">
            Launch Your Tech Career
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-200 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>

          <p className="mt-2 max-w-2xl text-base leading-snug text-blue-100">
            Build your resume, improve your skills, and discover internships
            with AI-powered career guidance.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link to="/register">
              <Button className="h-9 bg-white px-6 text-sm text-blue-700 shadow-lg shadow-blue-900/20 hover:bg-blue-50">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link to="/internships">
              <Button
                variant="outline"
                className="h-9 border-white/30 bg-white/10 px-6 text-sm text-white backdrop-blur hover:border-white hover:bg-white hover:text-blue-700"
              >
                Browse Internships
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating internship explorer */}
        <div className="mx-auto mt-6 w-full max-w-[1100px] rounded-3xl bg-white p-1.5 shadow-2xl shadow-blue-950/25 ring-1 ring-white/50">
          <InternshipExplorerSection compact hero />
        </div>

        {/* Live statistics — compact glass chips */}
        <div className="mx-auto mt-5 grid w-full max-w-4xl grid-cols-2 gap-1.5 rounded-2xl border border-white/15 bg-white/10 p-1.5 backdrop-blur-md lg:grid-cols-4">
          {statItems.map(({ key, icon: Icon, label }) => (
            <div
              key={key}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 ring-1 ring-white/15 transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-500/25 text-cyan-200">
                <Icon className="h-3 w-3" />
              </span>
              <div className="text-left">
                <p className="text-base font-bold leading-none text-white">
                  {Number(stats[key] ?? 0).toLocaleString()}
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-blue-100">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
