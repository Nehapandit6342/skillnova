import { Calendar, Mail, MapPin, Phone, User } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PersonalInfoCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage your personal details.
          </p>
        </div>

        <Button variant="outline" size="sm">
          Edit
        </Button>
      </div>

      {/* Information */}
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <User className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Full Name</p>

            <h3 className="font-semibold text-slate-900">Neha Pandit</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Mail className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Email</p>

            <h3 className="font-semibold text-slate-900">neha@example.com</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Phone className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Phone</p>

            <h3 className="font-semibold text-slate-900">+977 9800000000</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Calendar className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Date of Birth</p>

            <h3 className="font-semibold text-slate-900">16 July 2004</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <MapPin className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Location</p>

            <h3 className="font-semibold text-slate-900">Kathmandu, Nepal</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
