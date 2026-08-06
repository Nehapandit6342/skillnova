import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>

        <p className="mt-6 text-slate-600 leading-8">
          By using SkillNova, you agree to follow these terms and conditions.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">User Responsibilities</h2>

        <p className="mt-3 text-slate-600">
          Users must provide accurate information and use the platform
          responsibly.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Platform Usage</h2>

        <p className="mt-3 text-slate-600">
          SkillNova provides internship discovery, resume analysis, and career
          guidance services.
        </p>
      </main>

      <Footer />
    </>
  );
}
