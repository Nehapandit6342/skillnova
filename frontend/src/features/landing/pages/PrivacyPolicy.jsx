import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>

        <p className="mt-6 text-slate-600 leading-8">
          SkillNova respects your privacy. This Privacy Policy explains how we
          collect, use, and protect your information when you use our platform.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Information We Collect</h2>

        <p className="mt-3 text-slate-600">
          We may collect profile information, resume data, internship
          applications, and account details to provide career guidance services.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">How We Use Information</h2>

        <p className="mt-3 text-slate-600">
          Information is used for AI resume analysis, internship matching, and
          improving user experience.
        </p>
      </main>

      <Footer />
    </>
  );
}
