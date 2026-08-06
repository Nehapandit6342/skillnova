import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Loader2, TriangleAlert } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { deleteAccount } from "@/api/auth.api";
import { useAuth } from "@/context/AuthContext";

const CONFIRM_TEXT = "DELETE";

export default function DangerZoneCard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      toast.success("Your account has been deleted. Goodbye!");
      logout();
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to delete account. Please try again."
      );
    },
  });

  const handleClose = (nextOpen) => {
    if (isPending) return;

    setOpen(nextOpen);

    if (!nextOpen) {
      setTyped("");
    }
  };

  const handleConfirm = () => {
    if (typed.trim().toUpperCase() !== CONFIRM_TEXT || isPending) return;

    mutate();
  };

  const confirmed = typed.trim().toUpperCase() === CONFIRM_TEXT;

  return (
    <section className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-destructive/10 p-2.5">
          <TriangleAlert className="size-5 text-destructive" />
        </div>

        <div className="flex-1">
          <h2 className="font-semibold text-destructive">Danger Zone</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Deleting your account is permanent. Your company profile, all
            internship postings, and their applications will be removed from
            SkillNova forever.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-xl border border-destructive/20 bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">
            Delete Account
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            This action cannot be undone.
          </p>
        </div>

        <Button
          variant="destructive"
          onClick={() => setOpen(true)}
          className="h-10 px-5"
        >
          Delete Account
        </Button>
      </div>

      <AlertDialog open={open} onOpenChange={handleClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive">
              <TriangleAlert className="size-5" />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete your account?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your account, company profile, and
              all associated internship postings and applications. This action
              cannot be undone.
              <br />
              <br />
              Type <strong className="text-destructive">{CONFIRM_TEXT}</strong>{" "}
              to confirm.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <Input
            value={typed}
            onChange={(event) => setTyped(event.target.value)}
            placeholder={CONFIRM_TEXT}
            className="h-10"
            disabled={isPending}
            autoFocus
          />

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setTyped("")}>
              Cancel
            </AlertDialogCancel>

            <Button
              variant="destructive"
              disabled={!confirmed || isPending}
              onClick={handleConfirm}
              className="h-9 px-4"
            >
              {isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete Account"
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
