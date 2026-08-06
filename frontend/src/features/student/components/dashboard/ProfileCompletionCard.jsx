import { UserCheck, CheckCircle2, Circle } from "lucide-react";
import { calculateProfileCompletion } from "@/utils/profileCompletion";
import { useNavigate } from "react-router-dom";
import { useStudentProfile } from "../../hooks/useStudentProfile";

import { Button } from "@/components/ui/button";

export default function ProfileCompletionCard() {
  const { data, isLoading } = useStudentProfile();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        Loading...
      </div>
    );
  }

  const profile = data?.data;
  const student = profile?.studentProfile;
  if (!profile) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Profile Completion</h2>

        <p className="mt-2 text-slate-500">
          Start completing your profile to unlock AI recommendations.
        </p>

        <Button
          className="mt-6 w-full"
          onClick={() => navigate("/student/profile")}
        >
          Complete Profile
        </Button>
      </div>
    );
  }
  const checklist = [
    {
      label: "Basic Information",
      done:
        !!profile?.name &&
        !!profile?.email &&
        !!student?.phone &&
        !!student?.location &&
        !!student?.dateOfBirth,
    },
    {
      label: "Education",
      done:
        !!student?.college &&
        !!student?.degree &&
        Number.isInteger(student?.semester) &&
        student?.cgpa != null,
    },

    {
      label: "Skills",
      done: student?.skills?.length > 0,
    },

    {
      label: "Resume",
      done: !!student?.resumeUrl,
    },

    {
      label: "Career Preferences",
      done:
        !!student?.careerGoal &&
        !!student?.preferredInternship &&
        !!student?.preferredLocation &&
        !!student?.workMode &&
        !!student?.preferredCompanySize,
    },

    {
      label: "Social Links",
      done: !!student?.github || !!student?.linkedin || !!student?.portfolio,
    },
  ];
  console.log(student);
  console.log(checklist);
  const percentage = calculateProfileCompletion(profile);
  const completed = checklist.filter((item) => item.done).length;
  const total = checklist.length;
  const nextIncomplete = checklist.find((item) => !item.done);

  const buttonText = nextIncomplete
    ? `Complete ${nextIncomplete.label}`
    : "View Profile";
  const progressColor =
    percentage >= 80
      ? "bg-green-600"
      : percentage >= 50
        ? "bg-yellow-500"
        : "bg-red-500";

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
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">
            {percentage}% Complete
          </span>

          <span className="text-sm text-slate-500">
            {completed}/{total} sections
          </span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-700 ${progressColor}`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-700 ease-in-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <ul className="mt-8 space-y-3">
        {checklist.map((item) => (
          <li
            key={item.label}
            className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${
              item.done ? "bg-green-50" : "bg-slate-50"
            }`}
          >
            {item.done ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            ) : (
              <Circle className="h-5 w-5 text-slate-300" />
            )}

            <div className="flex flex-col">
              <span className="font-medium">{item.label}</span>

              <span className="text-xs text-slate-500">
                {item.done ? "Completed" : "Incomplete"}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <Button
        variant="outline"
        className="mt-8 w-full"
        onClick={() => navigate("/student/profile")}
      >
        {buttonText}
      </Button>
    </div>
  );
}
