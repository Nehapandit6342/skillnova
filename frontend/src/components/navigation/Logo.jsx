import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 transition-opacity hover:opacity-90"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
        <GraduationCap className="h-5 w-5" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight text-slate-900">
          SkillNova
        </span>

        <span className="text-xs text-slate-500">AI Career Platform</span>
      </div>
    </Link>
  );
}
