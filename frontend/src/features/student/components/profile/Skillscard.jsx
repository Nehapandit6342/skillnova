import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { Brain, Code2, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import EditProfileDialog from "./EditProfileDialog";
import { useUpdateStudentProfile } from "@/features/student/hooks/useUpdateStudentProfile";
export default function SkillsCard({ profile }) {
  const student = profile?.studentProfile;
  const [open, setOpen] = useState(false);

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const suggestedSkills = [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "Docker",
  ];

  const { mutate: updateProfile, isPending } = useUpdateStudentProfile();
  useEffect(() => {
    if (student) {
      setSkills(student.skills || []);
    }
  }, [student]);
  const handleAddSkill = () => {
    const skill = newSkill.trim();

    if (!skill) return;
    if (skills.length >= 20) {
      toast.error("You can add up to 20 skills only.");
      return;
    }

    if (skill.length > 30) {
      toast.error("Skill cannot exceed 30 characters.");
      return;
    }

    if (skills.some((s) => s.toLowerCase() === skill.toLowerCase())) {
      toast.error("Skill already exists.");
      return;
    }

    setSkills([...skills, skill].sort());

    setNewSkill("");
  };
  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };
  const handleSave = () => {
    updateProfile(
      {
        formData: {
          skills,
        },
      },
      {
        onSuccess: () => {
          toast.success("Skills updated successfully.");
          setOpen(false);
        },
        onError: () => {
          toast.error("Failed to update skills.");
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
            Skills ({skills.length})
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Showcase your technical expertise.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
          disabled={isPending}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Skill
        </Button>
      </div>

      {/* AI Summary */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl bg-blue-50 p-4">
        <Brain className="h-6 w-6 text-blue-600" />

        <div>
          <h3 className="font-semibold text-slate-900">AI Skill Analysis</h3>

          <p className="text-sm text-slate-600">
            {skills.length === 0
              ? "Add your technical skills to improve AI internship recommendations."
              : `Great! You have added ${skills.length} skills. SkillNova AI will use them to recommend internships and personalized learning paths.`}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills?.length ? (
          skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 transition-all hover:scale-105 hover:bg-blue-100"
            >
              <Code2 className="h-4 w-4 text-blue-600" />

              <span className="font-medium text-slate-800">{skill}</span>
            </div>
          ))
        ) : (
          <div className="w-full rounded-xl border border-dashed border-slate-300 py-8 text-center">
            <Code2 className="mx-auto mb-3 h-8 w-8 text-slate-400" />
            <p className="text-sm text-slate-500">No skills added yet.</p>
          </div>
        )}
      </div>
      <EditProfileDialog
        open={open}
        onOpenChange={(value) => {
          if (!isPending) {
            setOpen(value);

            if (!value) {
              setSkills(student?.skills || []);
              setNewSkill("");
            }
          }
        }}
        title="Edit Skills"
      >
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="React"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddSkill();
                }
              }}
            />

            <Button
              type="button"
              onClick={handleAddSkill}
              disabled={!newSkill.trim()}
            >
              Add
            </Button>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-slate-600">
              Suggested Skills
            </p>

            <div className="flex flex-wrap gap-2">
              {suggestedSkills
                .filter(
                  (skill) =>
                    !skills.some(
                      (s) => s.toLowerCase() === skill.toLowerCase(),
                    ),
                )
                .map((skill) => (
                  <Button
                    key={skill}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={skills.length >= 20}
                    onClick={() => {
                      if (skills.length >= 20) {
                        toast.error("You can add up to 20 skills only.");
                        return;
                      }

                      setSkills([...skills, skill].sort());
                    }}
                  >
                    + {skill}
                  </Button>
                ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1"
              >
                <span>{skill}</span>

                <button
                  type="button"
                  aria-label={`Remove ${skill}`}
                  onClick={() => handleRemoveSkill(skill)}
                  className="rounded-full p-1 transition hover:bg-red-100 hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              disabled={
                isPending ||
                JSON.stringify(skills) === JSON.stringify(student?.skills || [])
              }
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
