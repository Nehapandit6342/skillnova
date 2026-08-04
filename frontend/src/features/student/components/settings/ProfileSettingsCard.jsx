import { useState } from "react";
import { Loader2, Lock, UserRound } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

import { useUpdateStudentProfile } from "../../hooks/useUpdateStudentProfile";
import { useAuth } from "@/context/AuthContext";

export default function ProfileSettingsCard({ profile }) {
  const { updateUser } = useAuth();
  const { mutate, isPending } = useUpdateStudentProfile();

  const student = profile?.studentProfile;

  const [form, setForm] = useState(() => ({
    name: profile?.name || "",
    phone: student?.phone || "",
    location: student?.location || "",
    college: student?.college || "",
    degree: student?.degree || "",
  }));

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      toast.error("Full name is required.");
      return;
    }

    mutate(
      {
        formData: {
          name: form.name.trim(),
          phone: form.phone.trim(),
          location: form.location.trim(),
          college: form.college.trim(),
          degree: form.degree.trim(),
        },
      },
      {
        onSuccess: (response) => {
          updateUser({
            name: form.name.trim(),
            studentProfile: response?.data?.studentProfile,
          });
          toast.success(
            response?.message || "Profile settings updated successfully."
          );
        },
        onError: (error) => {
          toast.error(
            error?.response?.data?.message ||
              "Failed to update profile. Please try again."
          );
        },
      },
    );
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2.5">
            <UserRound className="size-5 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-card-foreground">
              Profile Settings
            </h2>
            <p className="text-sm text-muted-foreground">
              Update your personal information.
            </p>
          </div>
        </div>

        <span className="hidden items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-flex">
          Personal information
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="settings-name">Full Name</Label>
            <Input
              id="settings-name"
              value={form.name}
              onChange={handleChange("name")}
              placeholder="John Doe"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-email">Email</Label>
            <div className="relative">
              <Input
                id="settings-email"
                value={profile?.email || ""}
                disabled
                className="h-10 pr-9"
              />
              <Lock className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/60" />
            </div>
            <p className="text-xs text-muted-foreground">
              Email is used for login and cannot be changed.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-phone">Phone</Label>
            <Input
              id="settings-phone"
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
              placeholder="+91 98765 43210"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-location">Location</Label>
            <Input
              id="settings-location"
              value={form.location}
              onChange={handleChange("location")}
              placeholder="New Delhi, India"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-college">College</Label>
            <Input
              id="settings-college"
              value={form.college}
              onChange={handleChange("college")}
              placeholder="Your college name"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-degree">Degree</Label>
            <Input
              id="settings-degree"
              value={form.degree}
              onChange={handleChange("degree")}
              placeholder="B.Tech in Computer Science"
              className="h-10"
            />
          </div>
        </div>

        <div className="flex justify-end border-t border-border pt-5">
          <Button type="submit" disabled={isPending} className="h-10 px-5">
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}
