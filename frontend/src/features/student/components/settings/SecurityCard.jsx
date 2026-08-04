import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, Loader2, LockKeyhole } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

import { changePassword } from "@/api/auth.api";

const STRENGTH_LABELS = ["Too weak", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLORS = [
  "bg-red-500",
  "bg-red-500",
  "bg-amber-500",
  "bg-lime-500",
  "bg-emerald-500",
];

function getStrength(password) {
  if (!password) return 0;

  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return Math.min(4, score);
}

export default function SecurityCard() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState({ current: false, new: false, confirm: false });

  const { mutate, isPending } = useMutation({
    mutationFn: changePassword,
    onSuccess: (response) => {
      toast.success(response?.message || "Password changed successfully.");
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setShow({ current: false, new: false, confirm: false });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to change password. Please try again."
      );
    },
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const toggleShow = (field) => () => {
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      toast.error("Please fill in all password fields.");
      return;
    }

    if (form.newPassword.length < 8) {
      toast.error("New password must be at least 8 characters long.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      toast.error("New password and confirmation do not match.");
      return;
    }

    mutate({
      currentPassword: form.currentPassword,
      newPassword: form.newPassword,
    });
  };

  const strength = getStrength(form.newPassword);
  const strengthColor = STRENGTH_COLORS[strength];

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2.5">
          <LockKeyhole className="size-5 text-primary" />
        </div>
        <div>
          <h2 className="font-semibold text-card-foreground">Security</h2>
          <p className="text-sm text-muted-foreground">
            Update your password to keep your account secure.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <PasswordField
          id="security-current"
          label="Current Password"
          value={form.currentPassword}
          onChange={handleChange("currentPassword")}
          visible={show.current}
          onToggle={toggleShow("current")}
          autoComplete="current-password"
        />

        <div className="space-y-2">
          <PasswordField
            id="security-new"
            label="New Password"
            value={form.newPassword}
            onChange={handleChange("newPassword")}
            visible={show.new}
            onToggle={toggleShow("new")}
            autoComplete="new-password"
          />

          {form.newPassword && (
            <div className="pt-1">
              <div className="flex gap-1.5">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      index <= strength ? strengthColor : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Password strength:{" "}
                <span className="font-medium text-card-foreground">
                  {STRENGTH_LABELS[strength]}
                </span>
              </p>
            </div>
          )}
        </div>

        <PasswordField
          id="security-confirm"
          label="Confirm New Password"
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
          visible={show.confirm}
          onToggle={toggleShow("confirm")}
          autoComplete="new-password"
          hint={
            form.confirmPassword &&
            form.confirmPassword !== form.newPassword && (
              <p className="mt-1 text-xs text-destructive">
                Passwords do not match.
              </p>
            )
          }
        />

        <div className="flex justify-end border-t border-border pt-5">
          <Button type="submit" disabled={isPending} className="h-10 px-5">
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Change Password"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}

function PasswordField({
  id,
  label,
  value,
  onChange,
  visible,
  onToggle,
  autoComplete,
  hint,
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className="h-10 pr-10"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-card-foreground"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
      {hint}
    </div>
  );
}
