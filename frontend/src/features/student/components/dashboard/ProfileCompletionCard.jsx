import { UserCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProfileCompletionCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-indigo-100 p-4">
          <UserCheck className="h-8 w-8 text-indigo-600" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Profile Completion
          </h2>

          <p className="text-slate-500">
            Complete your profile to receive better internship recommendations.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <span className="font-medium text-slate-700">78%</span>

          <span className="text-sm text-slate-500">6 of 8 completed</span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-[78%] rounded-full bg-indigo-600" />
        </div>
      </div>

      <ul className="mt-8 space-y-3 text-sm text-slate-600">
        <li>✅ Basic Information</li>
        <li>✅ Education</li>
        <li>✅ Skills</li>
        <li>✅ Resume Uploaded</li>
        <li>⬜ Certifications</li>
        <li>⬜ Portfolio</li>
      </ul>

      <Button variant="outline" className="mt-8 w-full">
        Complete Profile
      </Button>
    </div>
  );
}
