import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Brain,
  Compass,
  Handshake,
  Heart,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Content (static marketing copy — backend connection comes later)   */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "5,000+", label: "Students onboard" },
  { value: "120+", label: "Internships listed" },
  { value: "15+", label: "Partner companies" },
  { value: "92%", label: "Average resume score improvement" },
];

const values = [
  {
    icon: Target,
    title: "Student-First",
    description:
      "Every feature we build starts with a simple question: does this help students grow? Your success is our metric.",
  },
  {
    icon: Brain,
    title: "AI for Everyone",
    description:
      "We believe career guidance shouldn't be a luxury. Our AI makes expert-level coaching accessible to every student.",
  },
  {
    icon: Handshake,
    title: "Honest Feedback",
    description:
      "No fluff. We give students real scores, real gaps, and real advice — because honest feedback is what drives growth.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Careers evolve and so do we. We're always refining our AI, our content, and our platform to match what the industry needs.",
  },
];

const team = [
  {
    name: "Nisha Yadav",
    role: "Founder & Product Lead",
    initials: "NY",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Nikhil Mandal",
    role: "Co-Founder & AI Engineer",
    initials: "NM",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Neha Pandit",
    role: "Co-Founder & Backend Engineer",
    initials: "NP",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const milestones = [
  {
    year: "2026",
    title: "The idea takes shape",
    description:
      "SkillNova was born from a simple observation: students in Nepal have talent, but they lack clear, personalized guidance.",
  },
  {
    year: "Today",
    title: "AI-powered guidance",
    description:
      "Resume analysis, skill gap detection, and career roadmaps — all powered by AI and available to every student for free.",
  },
  {
    year: "Next",
    title: "Connecting talent to opportunity",
    description:
      "We're building stronger employer partnerships so the students we prepare can find internships that match their growth.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-40 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />

        <SectionContainer className="pt-16 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 rounded-full px-4 py-1.5">
              <Sparkles className="mr-2 h-4 w-4" />
              Our story
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              We're on a mission to make every student{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                career-ready
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SkillNova is an AI-powered career platform built for students — to
              analyze resumes, close skill gaps, and connect talent with the
              right internship opportunities.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="h-11 px-7 text-base">
                  Join SkillNova
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="h-11 px-7 text-base">
                  See Our Features
                </Button>
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-blue-100 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge
              variant="secondary"
              className="mb-5 rounded-full px-4 py-1 text-sm"
            >
              <Compass className="mr-2 h-4 w-4" />
              Our Mission
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Every student deserves a clear path to their first opportunity
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Too many talented students graduate without knowing which skills to
              build, how to present themselves, or where to find opportunities.
              We built SkillNova to close that gap — using AI to give every
              student the kind of personalized career guidance that was once only
              available to a few.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From resume analysis to internship matching, our tools work
              together to turn preparation into placement.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/internships">
                <Button size="lg" className="h-11 px-6 text-base">
                  Browse Internships
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mission visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 via-indigo-50 to-violet-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                  <Rocket className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-slate-900">Student Journey</p>
                  <p className="text-sm text-slate-500">Powered by SkillNova AI</p>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {[
                  { icon: Target, title: "Identify your goal", desc: "Tell us where you want to go" },
                  { icon: Brain, title: "Analyze your resume", desc: "Get your score & skill gaps" },
                  { icon: Compass, title: "Follow your roadmap", desc: "Learn exactly what's needed" },
                  { icon: Award, title: "Apply with confidence", desc: "Land your dream internship" },
                ].map((step, index) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800">{step.title}</p>
                      <p className="text-sm text-slate-500">{step.desc}</p>
                    </div>
                    {index < 3 && (
                      <span className="hidden text-slate-300 sm:block">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ================= VALUES ================= */}
      <div className="border-y border-slate-200 bg-slate-50/60">
        <SectionContainer>
          <SectionHeading
            badge="Our Values"
            title="What we stand for"
            description="The principles that guide how we build SkillNova and how we help students."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="leading-7 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* ================= STORY / MILESTONES ================= */}
      <SectionContainer>
        <SectionHeading
          badge="Our Journey"
          title="Where we started, where we're going"
          description="A look at the milestones that shaped SkillNova."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-2 h-full w-px bg-slate-200 md:left-1/2" />

          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative flex md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-10"
                    : "md:ml-auto md:pl-10"
                }`}
              >
                <span
                  className={`absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md md:left-auto ${
                    index % 2 === 0
                      ? "md:-right-4 md:translate-x-0"
                      : "md:-left-4 md:translate-x-0"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <Rocket className="h-4 w-4" />
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                </span>

                <div className="ml-12 w-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:ml-0">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                    {milestone.year}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* ================= TEAM ================= */}
      <div className="border-y border-slate-200 bg-slate-50/60">
        <SectionContainer>
          <SectionHeading
            badge="The Team"
            title="The people behind SkillNova"
            description="A small team with one big goal: making every student career-ready."
          />

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{member.role}</p>
                <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                  <Heart className="h-3.5 w-3.5 text-rose-400" />
                  Building for students
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* ================= CTA ================= */}
      <SectionContainer>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-16 text-center text-white shadow-2xl md:px-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              <Users className="h-4 w-4" />
              Join our community
            </div>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Be part of the next generation of{" "}
              <span className="text-cyan-300">career-ready</span> students
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-100">
              Create your free account today and let AI guide you from resume to
              your first internship.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/register">
                <Button
                  size="lg"
                  className="h-11 bg-white px-7 text-base text-blue-700 hover:bg-slate-100"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 border-white bg-transparent px-7 text-base text-white hover:bg-white hover:text-blue-700"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
}
