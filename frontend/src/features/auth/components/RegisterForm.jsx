import { useState } from "react";
import { Link } from "react-router-dom";

import RoleSelector from "./RoleSelector";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  const [role, setRole] = useState("STUDENT");

  return (
    <form className="space-y-6">
      {/* Common Fields */}

      <div className="space-y-2">
        <Label>Full Name</Label>
        <Input placeholder="John Doe" />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input type="email" placeholder="john@example.com" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" placeholder="••••••••" />
        </div>

        <div className="space-y-2">
          <Label>Confirm Password</Label>
          <Input type="password" placeholder="••••••••" />
        </div>
      </div>

      {/* Role Selector */}

      <RoleSelector value={role} onChange={setRole} />

      {/* Student Fields */}

      {role === "STUDENT" && (
        <div className="space-y-4 rounded-2xl border border-slate-200 p-5">
          <h3 className="font-semibold text-slate-900">Student Information</h3>

          <div className="space-y-2">
            <Label>College</Label>
            <Input placeholder="Pokhara University" />
          </div>

          <div className="space-y-2">
            <Label>Degree</Label>
            <Input placeholder="B.E. Computer Engineering" />
          </div>

          <div className="space-y-2">
            <Label>Career Goal</Label>
            <Input placeholder="Frontend Developer" />
          </div>
        </div>
      )}

      {/* Employer Fields */}

      {role === "EMPLOYER" && (
        <div className="space-y-4 rounded-2xl border border-slate-200 p-5">
          <h3 className="font-semibold text-slate-900">Company Information</h3>

          <div className="space-y-2">
            <Label>Company Name</Label>
            <Input placeholder="OpenAI" />
          </div>

          <div className="space-y-2">
            <Label>Industry</Label>
            <Input placeholder="Software Development" />
          </div>

          <div className="space-y-2">
            <Label>Website</Label>
            <Input placeholder="https://company.com" />
          </div>
        </div>
      )}

      <Button className="w-full">Create Account</Button>

      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-blue-600 hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
}
