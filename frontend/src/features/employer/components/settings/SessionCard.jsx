import { LogOut, MonitorSmartphone, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function SessionCard() {
  const { logout } = useAuth();

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-sky-500/10 p-2.5">
          <MonitorSmartphone className="size-5 text-sky-600" />
        </div>
        <div>
          <h2 className="font-semibold text-card-foreground">Session</h2>
          <p className="text-sm text-muted-foreground">
            Sign out of SkillNova on this device.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-background/50 p-4">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-muted p-2">
            <ShieldCheck className="size-4 text-muted-foreground" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-card-foreground">
              This device is signed in
            </h4>
            <p className="mt-0.5 text-xs text-muted-foreground">
              You are currently logged in on this browser. Signing out will
              require your password the next time you log in.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <Button
          variant="outline"
          onClick={logout}
          className="h-10 gap-2 px-5 text-destructive hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="size-4" />
          Sign Out
        </Button>
      </div>
    </section>
  );
}
