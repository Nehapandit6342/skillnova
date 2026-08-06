import { useEffect, useState } from "react";
import { Bell, Info } from "lucide-react";
import toast from "react-hot-toast";

import { Switch } from "@/components/ui/switch";

const STORAGE_KEY = "skillnova-employer-notifications";

const DEFAULT_PREFS = {
  applicationAlerts: true,
  internEmail: true,
  weeklyDigest: false,
  productUpdates: true,
};

const NOTIFICATION_ITEMS = [
  {
    key: "applicationAlerts",
    title: "Application Alerts",
    description:
      "Get notified the moment a student applies to your internships.",
  },
  {
    key: "internEmail",
    title: "Internship Activity Emails",
    description:
      "Receive email summaries for new applications and status changes.",
  },
  {
    key: "weeklyDigest",
    title: "Weekly Hiring Digest",
    description:
      "A weekly roundup of applicant stats and posting performance.",
  },
  {
    key: "productUpdates",
    title: "Product Updates",
    description:
      "Learn about new SkillNova features built for employers.",
  },
];

function loadPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...DEFAULT_PREFS, ...saved };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

export default function NotificationCard() {
  const [prefs, setPrefs] = useState(loadPrefs);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // ignore storage errors
    }
  }, [prefs]);

  const handleToggle = (key) => (checked) => {
    setPrefs((prev) => ({ ...prev, [key]: checked }));

    const item = NOTIFICATION_ITEMS.find((entry) => entry.key === key);

    toast.success(
      `${item?.title ?? "Notification"} ${checked ? "enabled" : "disabled"}.`,
      { duration: 2000 }
    );
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-amber-500/10 p-2.5">
          <Bell className="size-5 text-amber-600" />
        </div>
        <div>
          <h2 className="font-semibold text-card-foreground">Notifications</h2>
          <p className="text-sm text-muted-foreground">
            Choose which notifications you would like to receive.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {NOTIFICATION_ITEMS.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/50 p-4 transition-colors hover:bg-muted/40"
          >
            <div>
              <h4 className="text-sm font-medium text-card-foreground">
                {item.title}
              </h4>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>

            <Switch
              checked={prefs[item.key]}
              onCheckedChange={handleToggle(item.key)}
              aria-label={item.title}
            />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
        <Info className="mt-0.5 size-3.5 shrink-0" />
        <p>
          Notification preferences are stored on this device. Email delivery is
          subject to your email settings.
        </p>
      </div>
    </section>
  );
}
