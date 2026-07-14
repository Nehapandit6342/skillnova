import { GraduationCap, Building2 } from "lucide-react";

const roles = [
  {
    value: "STUDENT",
    title: "Student",
    description:
      "Find internships, analyze your resume, and build your career.",
    icon: GraduationCap,
  },
  {
    value: "EMPLOYER",
    title: "Employer",
    description: "Post internships and discover talented students.",
    icon: Building2,
  },
];

export default function RoleSelector({ value, onChange }) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-slate-700">Register As</label>

      <div className="grid gap-4 sm:grid-cols-2">
        {roles.map(({ value: role, title, description, icon: Icon }) => {
          const selected = value === role;

          return (
            <button
              type="button"
              key={role}
              onClick={() => onChange(role)}
              className={`rounded-2xl border p-5 text-left transition-all duration-300
                ${
                  selected
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:shadow"
                }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                  ${
                    selected
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="font-semibold text-slate-900">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
