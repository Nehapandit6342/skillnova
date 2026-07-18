import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStudentProfile } from "../../hooks/useStudentProfile";

export default function WelcomeBanner() {
  const { data, isLoading, isError, error } = useStudentProfile();

  console.log("Student Profile:", data);
  console.log("React Query Error:", error);

  if (isLoading) {
    return (
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-10 text-white shadow-lg">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="rounded-3xl bg-red-50 p-6 text-red-600">
        Failed to load profile.
      </section>
    );
  }

  const user = data.data;

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 text-white shadow-lg sm:p-8 lg:p-10">
      {/* Background decoration */}
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
            <Sparkles className="h-4 w-4" />
            AI Career Assistant
          </div>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Welcome back,
            <span className="block">{user.name} 👋</span>
          </h1>

          <p className="mt-4 max-w-xl text-blue-100">
            You're making great progress. Continue improving your resume, learn
            new skills, and discover internships tailored just for you.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button className="bg-white text-blue-700 hover:bg-blue-50">
              Explore Internships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              Analyze Resume
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-4 lg:w-80">
          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-blue-100">Resume Score</p>
            <h2 className="mt-2 text-3xl font-bold">86%</h2>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-blue-100">Profile</p>
            <h2 className="mt-2 text-3xl font-bold">78%</h2>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-blue-100">Applied</p>
            <h2 className="mt-2 text-3xl font-bold">12</h2>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-blue-100">Saved</p>
            <h2 className="mt-2 text-3xl font-bold">8</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
