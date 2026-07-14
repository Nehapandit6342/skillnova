import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/common/SectionContainer";

export default function CTASection() {
  return (
    <SectionContainer>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-16 text-center text-white shadow-2xl md:px-16">
        {/* Background Glow */}
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Start Your Career Journey Today
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Ready to Build Your Future with{" "}
            <span className="text-cyan-300">SkillNova?</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Analyze your resume, discover skill gaps, generate a personalized
            career roadmap, and find internships tailored to your goals—all
            powered by AI.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-slate-100"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link to="/login">
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-blue-700"
              >
                Sign In
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-blue-100">
            No credit card required • Free for students • AI-powered guidance
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
