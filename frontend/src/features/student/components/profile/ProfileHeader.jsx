import {
  Camera,
  CheckCircle2,
  Edit,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProfileHeader() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Cover */}
      <div className="h-36 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400" />

      <div className="relative px-6 pb-8">
        <div className="-mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://i.pravatar.cc/200?img=12"
                alt="Profile"
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
              />

              <button className="absolute bottom-2 right-2 rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-700">
                <Camera className="h-4 w-4" />
              </button>
            </div>

            {/* User Info */}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-slate-900">
                  Neha Pandit
                </h1>

                <CheckCircle2 className="h-6 w-6 text-blue-600" />
              </div>

              <p className="mt-1 text-lg text-slate-600">
                BE Computer Engineering Student
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Pokhara University
                </span>

                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  neha@example.com
                </span>

                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Kathmandu, Nepal
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" className="rounded-xl">
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>

            <Button className="rounded-xl">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Resume Score</p>
            <h3 className="mt-2 text-3xl font-bold text-blue-600">82%</h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Profile Completion</p>
            <h3 className="mt-2 text-3xl font-bold text-emerald-600">90%</h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Applications</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">12</h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Skills</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">18</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
