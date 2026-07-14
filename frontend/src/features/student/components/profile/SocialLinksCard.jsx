import { Globe, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function SocialLinksCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
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
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-400 hover:shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
              <FaGithub className="text-xl" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">GitHub</h3>

              <p className="text-sm text-slate-500">
                github.com/nehapandit6342
              </p>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A66C2] text-white">
              <FaLinkedin className="text-xl" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">LinkedIn</h3>

              <p className="text-sm text-slate-500">
                linkedin.com/in/nehapandit
              </p>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>

        {/* Portfolio */}
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Globe className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Portfolio Website
              </h3>

              <p className="text-sm text-slate-500">www.nehapandit.dev</p>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Footer Tip */}
      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <h3 className="font-semibold text-blue-700">💡 Career Tip</h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          A complete GitHub profile, LinkedIn account, and personal portfolio
          significantly increase your chances of getting shortlisted for
          internships and full-time opportunities.
        </p>
      </div>
    </section>
  );
}
