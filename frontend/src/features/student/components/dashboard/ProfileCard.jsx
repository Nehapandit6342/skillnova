import { MapPin, Camera } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProfileCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/300?img=12"
            alt="profile"
            className="h-28 w-28 rounded-full object-cover ring-4 ring-blue-100"
          />

          <button className="absolute bottom-0 right-0 rounded-full bg-blue-600 p-2 text-white shadow-lg">
            <Camera className="h-4 w-4" />
          </button>
        </div>

        <h2 className="mt-5 text-2xl font-bold text-slate-900">Neha Pandit</h2>

        <p className="text-slate-500">Frontend Developer</p>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4" />
          Kathmandu, Nepal
        </div>

        <div className="mt-8 w-full">
          <div className="mb-2 flex justify-between text-sm">
            <span>Profile Completion</span>

            <span className="font-semibold text-blue-600">78%</span>
          </div>

          <div className="h-3 rounded-full bg-slate-100">
            <div className="h-3 w-[78%] rounded-full bg-blue-600"></div>
          </div>
        </div>

        <Button className="mt-8 w-full">Edit Profile</Button>
      </div>
    </div>
  );
}
