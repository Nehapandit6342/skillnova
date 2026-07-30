import { useState, useEffect } from "react";
import { Globe, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import EditProfileDialog from "./EditProfileDialog";
import { useUpdateStudentProfile } from "@/features/student/hooks/useUpdateStudentProfile";

export default function SocialLinksCard({ profile }) {
  const student = profile?.studentProfile;
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    github: "",
    linkedin: "",
    portfolio: "",
  });

  const { mutate: updateProfile, isPending } = useUpdateStudentProfile();
  useEffect(() => {
    if (student) {
      setFormData({
        github: student.github || "",
        linkedin: student.linkedin || "",
        portfolio: student.portfolio || "",
      });
    }
  }, [student]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = () => {
    updateProfile(
      {
        formData,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
      },
    );
  };
  const openLink = (url) => {
    if (!url) return;

    window.open(
      url.startsWith("http") ? url : `https://${url}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Social Links</h2>

          <p className="mt-1 text-sm text-slate-500">
            Showcase your professional presence to employers.
          </p>
        </div>

        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          disabled={isPending}
        >
          Edit
        </Button>
      </div>

      <div className="space-y-4">
        {/* GitHub */}
        <div className="flex items-center justify-between rounded-2xl border p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
              <FaGithub className="text-xl" />
            </div>

            <div>
              <h3 className="font-semibold">GitHub</h3>

              <p className="text-sm text-slate-500">
                {student?.github || "Not added"}
              </p>
            </div>
          </div>

          {student?.github && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => openLink(student.github)}
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-between rounded-2xl border p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A66C2] text-white">
              <FaLinkedin className="text-xl" />
            </div>

            <div>
              <h3 className="font-semibold">LinkedIn</h3>

              <p className="text-sm text-slate-500">
                {student?.linkedin || "Not added"}
              </p>
            </div>
          </div>

          {student?.linkedin && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => openLink(student.linkedin)}
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Portfolio */}
        <div className="flex items-center justify-between rounded-2xl border p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Globe className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-semibold">Portfolio</h3>

              <p className="text-sm text-slate-500">
                {student?.portfolio || "Not added"}
              </p>
            </div>
          </div>

          {student?.portfolio && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => openLink(student.portfolio)}
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <h3 className="font-semibold text-blue-700">💡 Career Tip</h3>

        <p className="mt-2 text-sm text-slate-600">
          A complete GitHub profile, LinkedIn account, and portfolio greatly
          improve your internship opportunities.
        </p>
      </div>
      <EditProfileDialog
        open={open}
        onOpenChange={(value) => {
          if (!isPending) setOpen(value);
        }}
        title="Edit Social Links"
      >
        <div className="space-y-4">
          <div>
            <Label>GitHub</Label>
            <Input
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="https://github.com/username"
            />
          </div>

          <div>
            <Label>LinkedIn</Label>
            <Input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <div>
            <Label>Portfolio</Label>
            <Input
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
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
