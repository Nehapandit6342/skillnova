import { useState, useEffect } from "react";

import useEmployerProfile from "../hooks/useEmployerProfile";
import useUpdateEmployerProfile from "../hooks/useUpdateEmployerProfile";

export default function CompanyProfile() {
  const { data, isLoading, isError } = useEmployerProfile();

  const updateProfile = useUpdateEmployerProfile();

  const profile = data?.data;

  const [form, setForm] = useState({
    companyName: "",
    website: "",
    industry: "",
    location: "",
    companySize: "",
    foundedYear: "",
    description: "",
  });

  useEffect(() => {
    if (profile) {
      setForm({
        companyName: profile.companyName || "",
        website: profile.website || "",
        industry: profile.industry || "",
        location: profile.location || "",
        companySize: profile.companySize || "",
        foundedYear: profile.foundedYear || "",
        description: profile.description || "",
      });
    }
  }, [profile]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4 text-slate-500">
          <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />

          <p className="text-sm font-medium">Loading company profile...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <p className="font-semibold text-red-700">
            Failed to load company profile
          </p>

          <p className="text-sm text-red-500 mt-1">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile.mutate({
      ...form,
      foundedYear: form.foundedYear ? Number(form.foundedYear) : null,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Company Profile</h1>

        <p className="text-slate-500 mt-2">
          Manage your company details so students can learn more about you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow border p-8 space-y-10"
      >
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-800">
              Company Information
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Basic details shown on your public company profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Company Name"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Acme Technologies"
            />

            <Input
              label="Website"
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="https://www.acme.com"
              required={false}
            />

            <Input
              label="Industry"
              name="industry"
              value={form.industry}
              onChange={handleChange}
              placeholder="Software Development"
              required={false}
            />

            <Input
              label="Company Location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Kathmandu, Nepal"
              required={false}
            />

            <Input
              label="Company Size"
              name="companySize"
              value={form.companySize}
              onChange={handleChange}
              placeholder="50-100 employees"
              required={false}
            />

            <Input
              label="Founded Year"
              name="foundedYear"
              value={form.foundedYear}
              onChange={handleChange}
              type="number"
              min="1900"
              max="2100"
              placeholder="2015"
              required={false}
            />
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-800">
              About the Company
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Describe your mission, products, and culture.
            </p>
          </div>

          <Textarea
            label="Company Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Acme Technologies builds world-class products that help businesses grow..."
            required={false}
          />
        </section>

        <div className="flex justify-end items-center gap-4 border-t pt-6">
          {updateProfile.isError && (
            <p className="text-sm text-red-600">
              Failed to save. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={updateProfile.isPending}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-3
              rounded-lg
              font-semibold
              disabled:opacity-50
              disabled:cursor-not-allowed
              transition-colors
            "
          >
            {updateProfile.isPending ? "Saving..." : "Save Company Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Input({ label, required = true, ...props }) {
  const id = props.id || props.name;

  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        {...props}
        id={id}
        required={required}
        className="
          w-full
          border
          border-slate-300
          rounded-lg
          p-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
          placeholder:text-slate-400
        "
      />
    </div>
  );
}

function Textarea({ label, required = true, ...props }) {
  const id = props.id || props.name;

  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <textarea
        {...props}
        id={id}
        rows={6}
        required={required}
        className="
          w-full
          border
          border-slate-300
          rounded-lg
          p-4
          resize-none
          outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
          placeholder:text-slate-400
        "
      />
    </div>
  );
}
