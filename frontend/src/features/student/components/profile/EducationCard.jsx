import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { BookOpen, Calendar, GraduationCap, School, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EditProfileDialog from "./EditProfileDialog";
import { useUpdateStudentProfile } from "@/features/student/hooks/useUpdateStudentProfile";

export default function EducationCard({ profile }) {
  const student = profile?.studentProfile;
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    college: "",
    degree: "",
    semester: "",
    cgpa: "",
  });
  useEffect(() => {
    if (student) {
      setFormData({
        college: student.college || "",
        degree: student.degree || "",
        semester: student.semester || "",
        cgpa: student.cgpa || "",
      });
    }
  }, [student]);
  const { mutate: updateProfile, isPending } = useUpdateStudentProfile();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "semester"
          ? value === ""
            ? ""
            : Number(value)
          : name === "cgpa"
            ? value === ""
              ? ""
              : Number(value)
            : value,
    }));
  };
  const handleSave = () => {
    // Validation
    if (!formData.college.trim()) {
      toast.error("College is required.");
      return;
    }

    if (!formData.degree.trim()) {
      toast.error("Degree is required.");
      return;
    }

    if (formData.cgpa !== "" && (formData.cgpa < 0 || formData.cgpa > 4)) {
      toast.error("CGPA must be between 0 and 4.");
      return;
    }
    if (
      formData.semester !== "" &&
      (formData.semester < 1 || formData.semester > 10)
    ) {
      toast.error("Semester must be between 1 and 10.");
      return;
    }

    updateProfile(
      {
        formData: {
          ...formData,
          college: formData.college.trim(),
          degree: formData.degree.trim(),
        },
      },
      {
        onSuccess: () => {
          toast.success("Education updated successfully.");
          setOpen(false);
        },
        onError: () => {
          toast.error("Failed to update education.");
        },
      },
    );
  };
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Education</h2>

          <p className="mt-1 text-sm text-slate-500">
            Academic information and progress.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
          disabled={isPending}
        >
          Edit
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
            <School className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">University</p>

            <h3 className="font-semibold text-slate-900">
              {student?.college || "Add College"}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <GraduationCap className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Degree</p>

            <h3 className="font-semibold text-slate-900">
              {student?.degree || "Add Degree"}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
            <BookOpen className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Current Semester</p>

            <h3 className="font-semibold text-slate-900">
              {student?.semester
                ? `${student.semester}th Semester`
                : "Add Semester"}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
            <Star className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">CGPA</p>

            <h3 className="font-semibold text-slate-900">
              {student?.cgpa ? `${student.cgpa} / 4.00` : "Add CGPA"}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-rose-100 p-3 text-rose-600">
            <Calendar className="h-5 w-5" />
          </div>
        </div>
      </div>
      <EditProfileDialog
        open={open}
        onOpenChange={(value) => {
          if (!isPending) {
            setOpen(value);

            // Reset form when dialog is closed without saving
            if (!value && student) {
              setFormData({
                college: student.college || "",
                degree: student.degree || "",
                semester: student.semester || "",
                cgpa: student.cgpa || "",
              });
            }
          }
        }}
        title="Edit Education"
      >
        <div className="space-y-4">
          <div>
            <Label>University</Label>
            <Input
              name="college"
              placeholder="Pokhara University"
              value={formData.college}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Degree</Label>
            <Input
              name="degree"
              placeholder="BE Computer Engineering"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Semester</Label>
            <Input
              type="number"
              min={1}
              max={10}
              step={1}
              name="semester"
              placeholder="8"
              value={formData.semester}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>CGPA</Label>
            <Input
              type="number"
              min={0}
              max={4}
              step="0.01"
              name="cgpa"
              placeholder="3.85"
              value={formData.cgpa}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="button"
              onClick={handleSave}
              disabled={isPending}
              className="min-w-28"
            >
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </EditProfileDialog>
    </section>
  );
}
