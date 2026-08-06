import { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReAnalyzeResume } from "../../hooks/useReAnalyzeresume";
import { useStudentProfile } from "../../hooks/useStudentProfile";
import { useStudentDashboard } from "../../hooks/useStudentDashboard";

export default function WelcomeBanner() {
  const { data, isLoading, isError, error } = useStudentProfile();
  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const { mutate, isPending } = useReAnalyzeResume();
  const handleResumeUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
    setOpenDialog(true);

    e.target.value = "";
  };

  const { data: dashboardData } = useStudentDashboard();

  console.log("Student Profile:", data);
  console.log("React Query Error:", error);

  if (isLoading) {
    return (
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-10 text-white shadow-lg">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="rounded-3xl bg-red-50 p-6 text-red-600">
        Failed to load profile.
      </section>
    );
  }

  const user = data.data;

  const stats = dashboardData?.stats;

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleResumeUpload}
      />

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 text-white shadow-lg sm:p-8 lg:p-10">
        {/* Background decoration */}
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              <Sparkles className="h-4 w-4" />
              AI Career Assistant
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Welcome back,
              <span className="block">{user.name} 👋</span>
            </h1>

            <p className="mt-4 max-w-xl text-blue-100">
              You're making great progress. Continue improving your resume,
              learn new skills, and discover internships tailored just for you.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Explore Internships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
                onClick={() => inputRef.current?.click()}
                disabled={isPending}
              >
                {isPending
                  ? "Uploading & Analyzing..."
                  : "Upload & Analyze Resume"}
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4 lg:w-80">
            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
              <p className="text-sm text-blue-100">Resume Score</p>
              <h2 className="mt-2 text-3xl font-bold">
                {stats?.resumeScore ?? 0}%
              </h2>
            </div>

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
              <p className="text-sm text-blue-100">Profile</p>
              <h2 className="mt-2 text-3xl font-bold">
                {stats?.profileCompletion ?? 0}%
              </h2>
            </div>

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
              <p className="text-sm text-blue-100">Applied</p>
              <h2 className="mt-2 text-3xl font-bold">
                {stats?.applications ?? 0}
              </h2>
            </div>

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
              <p className="text-sm text-blue-100">Recommended</p>
              <h2 className="mt-2 text-3xl font-bold">
                {stats?.recommendedInternships ?? 0}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <AlertDialog
        open={openDialog}
        onOpenChange={(open) => {
          setOpenDialog(open);

          if (!open) {
            setSelectedFile(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Upload & Analyze Resume</AlertDialogTitle>

            <AlertDialogDescription>
              {selectedFile && (
                <>
                  Your selected file is <strong>{selectedFile.name}</strong>.
                  <br />
                  AI will replace your previous analysis with a new one.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setSelectedFile(null);
              }}
            >
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              disabled={isPending || !selectedFile}
              onClick={() => {
                if (!selectedFile) return;

                const formData = new FormData();
                formData.append("resume", selectedFile);

                mutate(formData);

                setSelectedFile(null);
                setOpenDialog(false);
              }}
            >
              {isPending ? "Analyzing..." : "Upload & Analyze"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
