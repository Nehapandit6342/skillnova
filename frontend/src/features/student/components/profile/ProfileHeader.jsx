import toast from "react-hot-toast";
import { useState, useEffect, useRef } from "react";
import {
  Camera,
  CheckCircle2,
  Edit,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import EditProfileDialog from "./EditProfileDialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { useUpdateStudentProfile } from "@/features/student/hooks/useUpdateStudentProfile";
import { calculateProfileCompletion } from "@/utils/profileCompletion";

export default function ProfileHeader({ profile }) {
  const student = profile?.studentProfile;
  const profileCompletion = calculateProfileCompletion(profile);
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    college: "",
    location: "",
    profileImage: "",
  });
  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        degree: student?.degree || "",
        college: student?.college || "",
        location: student?.location || "",
        profileImage: student?.profileImage || "",
      });
      setImagePreview(student?.profileImage || "/images/default-avatar.png");
    }
  }, [profile, student]);
  useEffect(() => {
    return () => {
      if (imagePreview?.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);
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
        profileImage: selectedImage,
      },
      {
        onSuccess: () => {
          toast.success("Profile updated successfully.");
          setOpen(false);
        },
        onError: () => {
          toast.error("Failed to update profile.");
        },
      },
    );
  };
  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG, PNG and WEBP images are allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be smaller than 2 MB.");
      return;
    }

    const preview = URL.createObjectURL(file);
    setSelectedImage(file);

    setImagePreview(preview);

    setFormData((prev) => ({
      ...prev,
      profileImage: preview,
    }));
    toast.success("Profile photo selected successfully.");

    // Backend upload will be added later.
  };
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Cover */}
      <div className="h-36 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400" />

      <div className="relative px-6 pb-8">
        <div className="-mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={imagePreview || "/images/default-avatar.png"}
                alt="Profile"
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
              />

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="absolute bottom-2 right-2 rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-700"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>

            {/* User Info */}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-slate-900">
                  {formData.name}
                </h1>

                <CheckCircle2 className="h-6 w-6 text-blue-600" />
              </div>

              <p className="mt-1 text-lg text-slate-600">
                {formData.degree || "Complete your profile"}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  {formData.college || "Add College"}
                </span>

                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {profile?.email}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {formData.location || "Add Location"}
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="outline"
              className="rounded-xl"
              disabled={!student?.resume}
              onClick={() =>
                window.open(student.resume, "_blank", "noopener,noreferrer")
              }
            >
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>

            <Button
              className="rounded-xl"
              onClick={() => setOpen(true)}
              disabled={isPending}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Resume Score</p>
            <h3 className="mt-2 text-3xl font-bold text-blue-600">82%</h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Profile Completion</p>
            <h3 className="mt-2 text-3xl font-bold text-emerald-600">
              {profileCompletion}%
            </h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Applications</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">12</h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Skills</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              {student?.skills?.length ?? 0}
            </h3>
          </div>
        </div>
      </div>
      <EditProfileDialog
        open={open}
        onOpenChange={(value) => {
          if (!isPending) setOpen(value);
        }}
        title="Edit Profile"
      >
        <div className="space-y-4">
          <div>
            <Label>Full Name</Label>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="flex flex-col items-center gap-4">
            <img
              src={imagePreview || "/images/default-avatar.png"}
              alt="Profile Preview"
              className="h-28 w-28 rounded-full border-4 border-slate-200 object-cover"
            />

            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
            >
              <Camera className="mr-2 h-4 w-4" />
              Change Photo
            </Button>
            <p className="text-xs text-slate-500">
              JPG, PNG or WEBP • Maximum 2 MB
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageSelect}
            />
          </div>

          <div>
            <Label>Degree</Label>
            <Input
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>College</Label>
            <Input
              name="college"
              value={formData.college}
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
