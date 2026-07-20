import { Globe, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function SocialLinksCard({ profile }) {
  const student = profile?.studentProfile;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Social Links</h2>

          <p className="mt-1 text-sm text-slate-500">
            Showcase your professional presence to employers.
          </p>
        </div>

        <Button variant="outline">Edit</Button>
      </div>

      <div className="space-y-4">
        {/* GitHub */}
        <div className="flex items-center justify-between rounded-2xl border p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
              <FaGithub className="text-xl" />
            </div>

            <div>
              <h3 className="font-semibold">GitHub</h3>

              <p className="text-sm text-slate-500">
                {student?.github || "Not added"}
              </p>
            </div>
          </div>

          {student?.github && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(student.github, "_blank")}
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-between rounded-2xl border p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A66C2] text-white">
              <FaLinkedin className="text-xl" />
            </div>

            <div>
              <h3 className="font-semibold">LinkedIn</h3>

              <p className="text-sm text-slate-500">
                {student?.linkedin || "Not added"}
              </p>
            </div>
          </div>

          {student?.linkedin && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(student.linkedin, "_blank")}
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Portfolio */}
        <div className="flex items-center justify-between rounded-2xl border p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Globe className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-semibold">Portfolio</h3>

              <p className="text-sm text-slate-500">
                {student?.portfolio || "Not added"}
              </p>
            </div>
          </div>

          {student?.portfolio && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(student.portfolio, "_blank")}
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <h3 className="font-semibold text-blue-700">💡 Career Tip</h3>

        <p className="mt-2 text-sm text-slate-600">
          A complete GitHub profile, LinkedIn account, and portfolio greatly
          improve your internship opportunities.
        </p>
      </div>
    </section>
  );
}
