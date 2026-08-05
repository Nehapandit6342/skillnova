import { useMemo, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Banknote,
  Briefcase,
  Building2,
  Clock,
  FileText,
  GraduationCap,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  UploadCloud,
  User,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

import { createApplication } from "@/api/application.api";

const REQUIRED_FIELDS = ["fullName", "email", "phone", "college", "degree"];

export default function ApplyInternship() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const internship = location.state?.internship;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    college: "",
    degree: "",
    resume: null,
    coverLetter: "",
    whyHireMe: "",
    availability: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleResume = (file) => {
    setForm((prev) => ({ ...prev, resume: file }));
    setErrors((prev) => ({ ...prev, resume: null }));
  };

  const validate = () => {
    const nextErrors = {};
    REQUIRED_FIELDS.forEach((field) => {
      if (!form[field]?.trim()) nextErrors[field] = "This field is required";
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (form.phone && !/^[+\d][\d\s-]{7,}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }
    if (!form.resume) nextErrors.resume = "Please upload your resume";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fill in the required fields");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      data.append("internshipId", id);
      Object.entries(form).forEach(([key, value]) => {
        data.append(key, value);
      });

      await createApplication(data);

      toast.success("Application submitted successfully");
      navigate("/student/applications");
    } catch (error) {
      toast.error(error.response?.data?.message || "Application failed");
    } finally {
      setLoading(false);
    }
  };

  const summary = useMemo(() => {
    if (!internship) return null;
    const company = internship.employer?.companyName || "Company";
    return [
      {
        icon: <Building2 className="h-4 w-4" />,
        label: "Company",
        value: company,
      },
      {
        icon: <MapPin className="h-4 w-4" />,
        label: "Location",
        value: internship.location || "Not specified",
      },
      {
        icon: <Briefcase className="h-4 w-4" />,
        label: "Type",
        value: internship.workMode || internship.type || "Internship",
      },
      {
        icon: <Banknote className="h-4 w-4" />,
        label: "Stipend",
        value: internship.stipend ? `NPR ${internship.stipend}` : "Unpaid",
      },
    ];
  }, [internship]);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-16">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-100 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Internship Application
          </h1>
          <p className="mt-1.5 text-sm text-blue-100">
            {internship?.title
              ? `Applying for ${internship.title}`
              : "Complete your application to get started."}
          </p>

          {summary && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {summary.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white/10 px-3.5 py-2.5 backdrop-blur"
                >
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-blue-100">
                    {item.icon}
                    {item.label}
                  </div>
                  <p className="mt-1 truncate text-sm font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="-mt-6 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Personal Information */}
          <FormSection step="01" title="Personal Information" description="How can the employer reach you?">
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Full Name"
                name="fullName"
                icon={<User className="h-4 w-4" />}
                placeholder="Your full name"
                value={form.fullName}
                onChange={handleChange}
                error={errors.fullName}
                required
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                icon={<Mail className="h-4 w-4" />}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
              <Field
                label="Phone Number"
                name="phone"
                icon={<Phone className="h-4 w-4" />}
                placeholder="+977 98XXXXXXXX"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                required
              />
              <Field
                label="Current Location"
                name="location"
                icon={<MapPin className="h-4 w-4" />}
                placeholder="City, Country"
                value={form.location}
                onChange={handleChange}
              />
            </div>
          </FormSection>

          {/* Academic Information */}
          <FormSection step="02" title="Academic Information" description="Tell us about your education.">
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="College / University"
                name="college"
                icon={<GraduationCap className="h-4 w-4" />}
                placeholder="Name of institution"
                value={form.college}
                onChange={handleChange}
                error={errors.college}
                required
              />
              <Field
                label="Degree Program"
                name="degree"
                icon={<GraduationCap className="h-4 w-4" />}
                placeholder="e.g. B.Sc. CSIT"
                value={form.degree}
                onChange={handleChange}
                error={errors.degree}
                required
              />
            </div>
          </FormSection>

          {/* Resume */}
          <FormSection step="03" title="Resume Upload" description="Upload your latest resume (PDF only).">
            <label
              className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
                errors.resume
                  ? "border-red-300 bg-red-50/40 hover:bg-red-50"
                  : "border-slate-300 bg-slate-50/50 hover:border-blue-400 hover:bg-blue-50/40"
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <UploadCloud className="h-6 w-6" />
              </span>
              <span className="mt-3 text-sm font-semibold text-slate-800">
                {form.resume ? form.resume.name : "Click to upload your resume"}
              </span>
              <span className="mt-1 text-xs text-slate-400">
                {form.resume
                  ? "Click to choose a different file"
                  : "PDF files up to 5MB"}
              </span>
              <input
                type="file"
                accept=".pdf"
                hidden
                onChange={(e) => handleResume(e.target.files[0])}
              />
            </label>

            {form.resume && (
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-green-50 px-3.5 py-2.5 text-sm text-green-700">
                <FileText className="h-4 w-4 shrink-0" />
                <span className="min-w-0 flex-1 truncate">{form.resume.name}</span>
                <button
                  type="button"
                  onClick={() => handleResume(null)}
                  aria-label="Remove resume"
                  className="rounded-full p-1 text-green-600 transition-colors hover:bg-green-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}

            {errors.resume && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.resume}
              </p>
            )}
          </FormSection>

          {/* Cover Letter */}
          <FormSection step="04" title="Cover Letter" description="Explain why you're the right fit.">
            <TextArea
              name="coverLetter"
              rows={5}
              placeholder="Tell the employer why you are interested in this internship and what makes you a great fit..."
              value={form.coverLetter}
              onChange={handleChange}
            />
          </FormSection>

          {/* Additional */}
          <FormSection step="05" title="Additional Information" description="Anything else the employer should know.">
            <div className="space-y-5">
              <TextArea
                name="whyHireMe"
                rows={4}
                placeholder="Why should we select you?"
                value={form.whyHireMe}
                onChange={handleChange}
              />
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Availability"
                  name="availability"
                  icon={<Clock className="h-4 w-4" />}
                  placeholder="e.g. Immediately"
                  value={form.availability}
                  onChange={handleChange}
                />
                <Field
                  label="Expected Duration"
                  name="duration"
                  icon={<Clock className="h-4 w-4" />}
                  placeholder="e.g. 3 months"
                  value={form.duration}
                  onChange={handleChange}
                />
              </div>
            </div>
          </FormSection>

          {/* Submit */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
            <p className="text-xs text-slate-400">
              Fields marked with <span className="text-red-500">*</span> are
              required.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormSection({ step, title, description, children }) {
  return (
    <section>
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
          {step}
        </span>
        <div>
          <h2 className="text-base font-bold text-slate-900">{title}</h2>
          {description && (
            <p className="mt-0.5 text-xs text-slate-400">{description}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  name,
  icon,
  error,
  required,
  type = "text",
  ...props
}) {
  return (
    <div>
      <label
        htmlFor={`field-${name}`}
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}
        <input
          id={`field-${name}`}
          name={name}
          type={type}
          {...props}
          className={`h-11 w-full rounded-xl border bg-white pl-10 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
          }`}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}

function TextArea({ name, value, onChange, rows, placeholder }) {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
    />
  );
}
