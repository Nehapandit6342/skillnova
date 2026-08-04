import { Check, Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/context/ThemeContext";

const THEMES = [
  {
    id: "light",
    title: "Light",
    description: "Bright and clean",
    icon: <Sun className="size-5 text-amber-500" />,
  },
  {
    id: "dark",
    title: "Dark",
    description: "Easy on the eyes",
    icon: <Moon className="size-5 text-indigo-400" />,
  },
  {
    id: "system",
    title: "System",
    description: "Match your device",
    icon: <Monitor className="size-5 text-slate-500" />,
  },
];

function ThemePreview({ theme }) {
  if (theme === "system") {
    return (
      <div className="flex h-full w-full overflow-hidden rounded-md">
        <div className="flex h-full flex-1 flex-col gap-1 bg-white p-2">
          <div className="h-1 w-2/3 rounded-full bg-slate-300" />
          <div className="h-1 w-full rounded-full bg-slate-200" />
        </div>
        <div className="flex h-full flex-1 flex-col gap-1 bg-slate-900 p-2">
          <div className="h-1 w-2/3 rounded-full bg-slate-600" />
          <div className="h-1 w-full rounded-full bg-slate-700" />
        </div>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div
      className={`flex h-full w-full flex-col gap-1.5 rounded-md p-2.5 ${
        isDark ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div
        className={`h-1.5 w-3/4 rounded-full ${
          isDark ? "bg-slate-600" : "bg-slate-300"
        }`}
      />
      <div
        className={`h-1 w-full rounded-full ${
          isDark ? "bg-slate-700" : "bg-slate-200"
        }`}
      />
      <div
        className={`h-1 w-5/6 rounded-full ${
          isDark ? "bg-slate-700" : "bg-slate-200"
        }`}
      />
    </div>
  );
}

export default function AppearanceCard() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="font-semibold text-card-foreground">Appearance</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Choose how SkillNova looks on your device.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {THEMES.map((item) => {
          const active = theme === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTheme(item.id)}
              className={`group relative flex flex-col gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
                active
                  ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/30"
                  : "border-border bg-background/50 hover:border-primary/40 hover:bg-muted/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`rounded-lg p-2 ${
                    active ? "bg-primary/10" : "bg-muted"
                  }`}
                >
                  {item.icon}
                </div>

                {active && (
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" />
                  </span>
                )}
              </div>

              <div className="h-14 overflow-hidden rounded-md border border-border">
                <ThemePreview theme={item.id} />
              </div>

              <div>
                <h3 className="text-sm font-medium text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
