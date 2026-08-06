import { useState } from "react";
import { Building2, Loader2, Lock } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

import useUpdateEmployerProfile from "../../hooks/useUpdateEmployerProfile";
import { useAuth } from "@/context/AuthContext";

export default function CompanySettingsCard({ profile }) {
  const { updateUser } = useAuth();
  const { mutate, isPending } = useUpdateEmployerProfile();

  const [form, setForm] = useState(() => ({
    name: profile?.user?.name || "",
    companyName: profile?.companyName || "",
    website: profile?.website || "",
    industry: profile?.industry || "",
    location: profile?.location || "",
    companySize: profile?.companySize || "",
    foundedYear: profile?.foundedYear || "",
    description: profile?.description || "",
  }));

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      toast.error("Contact name is required.");
      return;
    }

    if (!form.companyName.trim()) {
      toast.error("Company name is required.");
      return;
    }

    mutate(
      {
        name: form.name.trim(),
        companyName: form.companyName.trim(),
        website: form.website.trim(),
        industry: form.industry.trim(),
        location: form.location.trim(),
        companySize: form.companySize.trim(),
        foundedYear: form.foundedYear ? Number(form.foundedYear) : null,
        description: form.description.trim(),
      },
      {
        onSuccess: (response) => {
          updateUser({
            name: form.name.trim(),
            employerProfile: response?.data,
          });
        },
      }
    );
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2.5">
            <Building2 className="size-5 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-card-foreground">
              Company Settings
            </h2>
            <p className="text-sm text-muted-foreground">
              Update your company details and public profile.
            </p>
          </div>
        </div>

        <span className="hidden items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-flex">
          Company information
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="settings-name">Contact Name</Label>
            <Input
              id="settings-name"
              value={form.name}
              onChange={handleChange("name")}
              placeholder="Jane Doe"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-email">Email</Label>
            <div className="relative">
              <Input
                id="settings-email"
                value={profile?.user?.email || ""}
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
            <Label htmlFor="settings-company">Company Name</Label>
            <Input
              id="settings-company"
              value={form.companyName}
              onChange={handleChange("companyName")}
              placeholder="Acme Technologies"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-website">Website</Label>
            <Input
              id="settings-website"
              type="url"
              value={form.website}
              onChange={handleChange("website")}
              placeholder="https://www.acme.com"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-industry">Industry</Label>
            <Input
              id="settings-industry"
              value={form.industry}
              onChange={handleChange("industry")}
              placeholder="Software Development"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-location">Location</Label>
            <Input
              id="settings-location"
              value={form.location}
              onChange={handleChange("location")}
              placeholder="Kathmandu, Nepal"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-size">Company Size</Label>
            <Input
              id="settings-size"
              value={form.companySize}
              onChange={handleChange("companySize")}
              placeholder="50-100 employees"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="settings-founded">Founded Year</Label>
            <Input
              id="settings-founded"
              type="number"
              min="1900"
              max="2100"
              value={form.foundedYear}
              onChange={handleChange("foundedYear")}
              placeholder="2015"
              className="h-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="settings-description">Company Description</Label>
          <textarea
            id="settings-description"
            value={form.description}
            onChange={handleChange("description")}
            placeholder="Tell students about your mission, products, and culture..."
            rows={5}
            className="w-full resize-none rounded-lg border border-input bg-transparent px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
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
