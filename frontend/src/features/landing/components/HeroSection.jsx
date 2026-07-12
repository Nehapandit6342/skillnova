import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionContainer from "@/components/common/SectionContainer";

export default function HeroSection() {
  return (
    <SectionContainer className="pt-12 lg:pt-20">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <Badge className="mb-6 rounded-full px-4 py-1">
            <Sparkles className="mr-2 h-4 w-4" />
            AI Powered Career Platform skill nova 
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 lg:text-7xl">
            Launch Your Career
            <span className="block text-blue-600">with AI</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            SkillNova helps students build professional resumes, identify skill
            gaps, generate personalized learning roadmaps, and discover
            internships tailored to their career goals.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/register">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link to="/internships">
              <Button variant="outline" size="lg">
                Explore Internships
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="rounded-3xl border bg-white p-8 shadow-xl">
          <div className="space-y-6">
            <div className="rounded-2xl bg-blue-50 p-5">
              <h3 className="font-semibold">Resume Score</h3>
              <p className="mt-2 text-4xl font-bold text-blue-600">92%</p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-5">
              <h3 className="font-semibold">Missing Skills</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Docker</Badge>
                <Badge>AWS</Badge>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-5">
              <h3 className="font-semibold">Recommended Internship</h3>

              <p className="mt-2 text-slate-600">Frontend Developer Intern</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
