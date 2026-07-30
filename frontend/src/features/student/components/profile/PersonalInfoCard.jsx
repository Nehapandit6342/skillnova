import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EditProfileDialog from "./EditProfileDialog";
import { useUpdateStudentProfile } from "@/features/student/hooks/useUpdateStudentProfile";
import { Calendar, Mail, MapPin, Phone, User } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PersonalInfoCard({ profile }) {
  const student = profile?.studentProfile;
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    location: "",
    dateOfBirth: "",
  });
  useEffect(() => {
    if (student) {
      setFormData({
        phone: student.phone || "",
        location: student.location || "",
        dateOfBirth: student.dateOfBirth || "",
      });
    }
  }, [student]);
  const { mutate: updateProfile, isPending } = useUpdateStudentProfile();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSave = () => {
    updateProfile(
      {
        formData,
      },
      {
        onSuccess: () => {
          toast.success("Personal information updated successfully.");
          setOpen(false);
        },
        onError: () => {
          toast.error("Failed to update personal information.");
        },
      },
    );
  };
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

        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
          disabled={isPending}
        >
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

            <h3 className="font-semibold text-slate-900">{profile?.name}</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Mail className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Email</p>

            <h3 className="font-semibold text-slate-900">{profile?.email}</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Phone className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Phone</p>

            <h3 className="font-semibold text-slate-900">
              {student?.phone || "Add Phone Number"}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Calendar className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Date of Birth</p>

            <h3 className="font-semibold text-slate-900">
              {student?.dateOfBirth
                ? new Date(student.dateOfBirth).toLocaleDateString()
                : "Not Added"}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <MapPin className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Location</p>

            <h3 className="font-semibold text-slate-900">
              {student?.location || "Add Location"}
            </h3>
          </div>
        </div>
      </div>
      <EditProfileDialog
        open={open}
        onOpenChange={(value) => {
          if (!isPending) setOpen(value);
        }}
        title="Edit Personal Information"
      >
        <div className="space-y-4">
          <div>
            <Label>Phone</Label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Location</Label>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <Button
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
