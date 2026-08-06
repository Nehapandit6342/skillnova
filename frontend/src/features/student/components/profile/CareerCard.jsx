import { useState, useEffect } from "react";
import EditProfileDialog from "./EditProfileDialog";
import { Briefcase, Building2, Globe, MapPin, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateStudentProfile } from "@/features/student/hooks/useUpdateStudentProfile";

export default function CareerCard({ profile }) {
  const student = profile?.studentProfile;
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    careerGoal: "",
    preferredInternship: "",
    workMode: "",
    preferredLocation: "",
    preferredCompanySize: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { mutate: updateProfile, isPending } = useUpdateStudentProfile();
  const handleSave = () => {
    updateProfile(
      {
        formData,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error);
        },
      },
    );
  };
  useEffect(() => {
    if (student) {
      setFormData({
        careerGoal: student.careerGoal || "",
        preferredInternship: student.preferredInternship || "",
        workMode: student.workMode || "",
        preferredLocation: student.preferredLocation || "",
        preferredCompanySize: student.preferredCompanySize || "",
      });
    }
  }, [student]);
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Career Preferences
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Help us recommend the best internships for you.
          </p>
        </div>

        <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
          Edit
        </Button>
      </div>

      <div className="space-y-5">
        {/* Career Goal */}
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Target className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Career Goal</p>

            <h3 className="font-semibold text-slate-900">
              {student?.careerGoal || "Not added"}
            </h3>
          </div>
        </div>

        {/* Internship Type */}
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
            <Briefcase className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Preferred Internship</p>

            <h3 className="font-semibold text-slate-900">
              {student?.preferredInternship || "Not added"}
            </h3>
          </div>
        </div>

        {/* Work Mode */}
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
            <Globe className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Work Mode</p>

            <h3 className="font-semibold text-slate-900">
              {student?.workMode || "Not added"}
            </h3>
          </div>
        </div>

        {/* Preferred Location */}
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
            <MapPin className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Preferred Location</p>

            <h3 className="font-semibold text-slate-900">
              {student?.preferredLocation || "Not added"}
            </h3>
          </div>
        </div>

        {/* Company Size */}
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
            <Building2 className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Preferred Company Size</p>

            <h3 className="font-semibold text-slate-900">
              {student?.preferredCompanySize || "Not added"}
            </h3>
          </div>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4">
        <h3 className="font-semibold text-blue-700">🤖 AI Recommendation</h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Complete your career preferences to receive personalized internship
          recommendations from SkillNova AI.
        </p>
      </div>
      <EditProfileDialog
        open={open}
        onOpenChange={(value) => {
          if (!isPending) setOpen(value);
        }}
        title="Edit Career Preferences"
      >
        <div className="space-y-4">
          <div>
            <Label>Career Goal</Label>
            <Input
              name="careerGoal"
              value={formData.careerGoal}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Preferred Internship</Label>
            <Input
              name="preferredInternship"
              value={formData.preferredInternship}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Work Mode</Label>
            <Input
              name="workMode"
              value={formData.workMode}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Preferred Location</Label>
            <Input
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Company Size</Label>
            <Input
              name="preferredCompanySize"
              value={formData.preferredCompanySize}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSave} disabled={isPending}>
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </EditProfileDialog>
    </section>
  );
}
