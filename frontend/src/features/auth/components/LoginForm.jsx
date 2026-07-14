import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label>Email</Label>
        <Input type="email" placeholder="john@example.com" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Password</Label>

          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Input type="password" placeholder="••••••••" />
      </div>

      <Button className="w-full">Sign In</Button>

      <p className="text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Create Account
        </Link>
      </p>
    </form>
  );
}
