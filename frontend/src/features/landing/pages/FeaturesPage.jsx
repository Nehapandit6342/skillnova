import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  CheckCircle2,
  FileSearch,
  GraduationCap,
  Lightbulb,
  Map,
  Rocket,
  Sparkles,
  Target,
  Upload,
  UserSearch,
  Workflow,
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

const features = [
  {
    icon: Brain,
    title: "AI Resume Analysis",
    description:
      "Upload your resume and receive an instant ATS score with detailed strengths, weaknesses, and personalized improvement suggestions.",
    points: ["ATS compatibility score", "Strengths & weaknesses breakdown", "Instant suggestions"],
  },
  {
    icon: Target,
    title: "Skill Gap Detection",
    description:
      "Our AI compares your current skills against your target role and tells you exactly what to learn to get there.",
    points: ["Role-based skill mapping", "Missing skill highlights", "Priority learning order"],
  },
  {
    icon: Map,
    title: "Career Roadmap",
    description:
      "Get a step-by-step, personalized learning roadmap built around your goals, pace, and experience level.",
    points: ["Personalized learning plan", "Structured milestones", "Track your progress"],
  },
  {
    icon: Briefcase,
    title: "Smart Internship Matching",
    description:
      "Discover internships that actually match your skills, education, and career aspirations — no more endless scrolling.",
    points: ["Skill-based matching", "Personalized recommendations", "One-click applications"],
  },
  {
    icon: Lightbulb,
    title: "Recommended Projects",
    description:
      "Build the right projects to showcase your skills. Get project ideas tailored to fill your resume gaps.",
    points: ["Role-relevant projects", "Guided learning outcomes", "Resume-ready results"],
  },
  {
    icon: Bot,
    title: "AI Career Assistant",
    description:
      "Chat with an AI assistant that answers career questions, reviews your resume, and guides your job search.",
    points: ["Instant answers", "Resume coaching", "Career guidance"],
  },
];

const detailSections = [
  {
    icon: FileSearch,
    tag: "Resume Intelligence",
    title: "Turn your resume into a winning application",
    description:
      "SkillNova analyzes your resume the way recruiters and ATS systems do. You get a clear score, honest feedback, and a concrete list of improvements — so every application you send is your best one.",
    points: [
      "90-second analysis with detailed scoring",
      "See exactly which keywords and skills are missing",
      "Improvement suggestions you can apply right away",
      "Track how your score improves over time",
    ],
    visual: {
      score: 92,
      label: "Resume Score",
      items: ["Strong summary", "Missing: Docker, AWS", "Add quantified results"],
    },
  },
  {
    icon: Workflow,
    tag: "Guided Learning",
    title: "Know exactly what to learn next",
    description:
      "Instead of a vague list of skills, you get an ordered roadmap with milestones and recommended projects. Learn efficiently and build proof of work along the way.",
    points: [
      "Roadmap personalized to your target role",
      "Skill gaps prioritized by impact",
      "Project recommendations that build real portfolio pieces",
      "Progress tracking to keep you motivated",
    ],
    visual: {
      roadmap: ["Foundations", "Core Skills", "Projects", "Interview Prep"],
      label: "Career Roadmap",
    },
  },
  {
    icon: UserSearch,
    tag: "Employer Platform",
    title: "Hire interns who are ready from day one",
    description:
      "Employers get a complete toolkit to publish internships, attract matched candidates, and manage the entire hiring flow from one dashboard.",
    points: [
      "Post internships with rich, structured job details",
      "Review candidates alongside their skill profiles",
      "Manage applications and statuses in one place",
      "Reach students actively building their careers",
    ],
    visual: {
      stats: [
        { label: "Internships posted", value: "120+" },
        { label: "Active students", value: "5K+" },
        { label: "Applications", value: "1.2K+" },
      ],
      label: "Employer Dashboard",
    },
  },
];

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Create your profile",
    description: "Sign up, upload your resume, and tell us about your career goals.",
  },
  {
    icon: Brain,
    step: "02",
    title: "Get AI insights",
    description: "Receive your resume score, skill gaps, and a personalized roadmap.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Improve & learn",
    description: "Follow the roadmap, build recommended projects, and level up.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Apply & grow",
    description: "Apply to matched internships and start your career journey.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FeaturesPage() {
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
              Everything SkillNova offers
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Powerful tools to launch{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                your career
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From AI-powered resume analysis to personalized career roadmaps and
              smart internship matching — SkillNova brings everything you need to
              go from student to professional in one platform.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="h-11 px-7 text-base">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/internships">
                <Button variant="outline" size="lg" className="h-11 px-7 text-base">
                  Explore Internships
                </Button>
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ================= FEATURE GRID ================= */}
      <SectionContainer>
        <SectionHeading
          badge="Core Features"
          title="Everything you need, powered by AI"
          description="Six tools that work together to analyze your resume, close your skill gaps, and land you the right internship."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-7 w-7" />
              </div>

              <h3 className="relative mb-3 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="relative leading-7 text-slate-600">
                {feature.description}
              </p>

              <ul className="relative mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ================= DETAIL SECTIONS ================= */}
      <div className="border-y border-slate-200 bg-slate-50/60">
        <SectionContainer>
          {detailSections.map((section, index) => (
            <div
              key={section.title}
              className="mb-20 grid items-center gap-12 last:mb-0 lg:grid-cols-2 lg:gap-16"
            >
              {/* Text */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Badge
                  variant="secondary"
                  className="mb-5 rounded-full px-4 py-1 text-sm"
                >
                  {section.tag}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {section.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </span>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual mock */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <DetailVisual section={section} />
              </div>
            </div>
          ))}
        </SectionContainer>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <SectionContainer>
        <SectionHeading
          badge="How It Works"
          title="From student to professional in 4 steps"
          description="SkillNova guides you through every stage of your career preparation journey."
        />

        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent xl:block" />

          {steps.map((step) => (
            <div
              key={step.step}
              className="group relative rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                <step.icon className="h-8 w-8" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white shadow-md">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ================= CTA ================= */}
      <SectionContainer>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-16 text-center text-white shadow-2xl md:px-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              <Rocket className="h-4 w-4" />
              It's free to get started
            </div>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Ready to see what{" "}
              <span className="text-cyan-300">SkillNova</span> can do for you?
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-100">
              Join thousands of students using AI to analyze their resumes, close
              skill gaps, and land internships they love.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/register">
                <Button
                  size="lg"
                  className="h-11 bg-white px-7 text-base text-blue-700 hover:bg-slate-100"
                >
                  Create Free Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 border-white bg-transparent px-7 text-base text-white hover:bg-white hover:text-blue-700"
                >
                  Learn About Us
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

/* ------------------------------------------------------------------ */
/*  Visual mock cards for detail sections                              */
/* ------------------------------------------------------------------ */

function DetailVisual({ section }) {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 via-indigo-50 to-violet-100 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            {section.visual.label}
          </p>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <BarChart3 className="h-4 w-4" />
          </span>
        </div>

        {section.visual.score && (
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white shadow-lg shadow-blue-600/25">
            <p className="text-sm font-medium text-blue-100">{section.visual.label}</p>
            <div className="mt-1 flex items-end gap-2">
              <span className="text-5xl font-extrabold">{section.visual.score}%</span>
              <span className="mb-1.5 text-sm text-blue-100">/ 100</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
                style={{ width: `${section.visual.score}%` }}
              />
            </div>
          </div>
        )}

        {section.visual.roadmap && (
          <div className="mt-6 space-y-4">
            {section.visual.roadmap.map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white shadow-md">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">{item}</p>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      style={{ width: `${(index + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {section.visual.stats && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            {section.visual.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-100"
              >
                <p className="text-2xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {section.visual.items && (
          <ul className="mt-6 space-y-3">
            {section.visual.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-100"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" />
            Powered by SkillNova AI
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-blue-600">
            Live preview
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
