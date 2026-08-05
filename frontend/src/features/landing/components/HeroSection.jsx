import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  FileCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionContainer from "@/components/common/SectionContainer";
import useHome from "../hooks/useHome";

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

      <SectionContainer className="py-16 lg:py-24">
        <div className="relative grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <Badge className="mb-6 rounded-full border-white/20 bg-white/10 px-4 py-1.5 text-blue-50 backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4" />
              AI Powered Career Platform
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Launch Your Career
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                with AI
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              SkillNova helps students build professional resumes, identify
              skill gaps, generate personalized learning roadmaps, and discover
              internships tailored to their career goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/register">
                <Button
                  size="lg"
                  className="h-12 bg-white px-7 text-blue-700 shadow-lg shadow-blue-900/20 hover:bg-blue-50"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link to="/internships">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 border-white/30 bg-white/10 px-7 text-white backdrop-blur hover:border-white hover:bg-white hover:text-blue-700"
                >
                  Explore Internships
                </Button>
              </Link>
            </div>

            {/* Live stats strip */}
            <div className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {statItems.map(({ key, icon: Icon, label }) => (
                <div
                  key={key}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur transition-colors hover:bg-white/15"
                >
                  <Icon className="mx-auto h-5 w-5 text-cyan-300" />
                  <p className="mt-2 text-xl font-bold text-white">
                    {Number(stats[key] ?? 0).toLocaleString()}
                  </p>
                  <p className="text-xs font-medium text-blue-100">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual — AI dashboard card */}
          <div className="relative">
            {/* Floating badges */}
            <div className="absolute -left-4 top-6 z-10 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:flex">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span className="text-xs font-semibold text-slate-700">
                AI Analysis Complete
              </span>
            </div>
            <div className="absolute -right-3 bottom-24 z-10 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:flex">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                ✓
              </span>
              <span className="text-xs font-semibold text-slate-700">
                ATS Friendly
              </span>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/95 p-8 shadow-2xl shadow-blue-900/30 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    SkillNova AI Dashboard
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Your Career Snapshot
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              {/* Resume score */}
              <div className="mt-6 rounded-2xl bg-blue-50 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Resume Score
                    </p>
                    <p className="mt-1 text-4xl font-bold text-blue-600">
                      92<span className="text-xl text-slate-400">/100</span>
                    </p>
                  </div>
                  <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">
                    Top 8%
                  </span>
                </div>
                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-blue-100">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                </div>
              </div>

              {/* Missing skills */}
              <div className="mt-4 rounded-2xl bg-violet-50 p-5">
                <p className="text-sm font-medium text-slate-600">
                  Missing Skills Detected
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["React", "Docker", "AWS"].map((skill) => (
                    <Badge
                      key={skill}
                      className="rounded-full bg-white px-3 py-1 text-violet-700 shadow-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Recommended internship */}
              <Link
                to="/internships"
                className="group mt-4 flex items-center justify-between rounded-2xl bg-emerald-50 p-5 transition-all hover:bg-emerald-100"
              >
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Recommended Internship
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    Frontend Developer Intern
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white transition-transform group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
