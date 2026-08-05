import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCreateInternship from "../hooks/useCreateInternship";

export default function PostInternship() {
  const mutation = useCreateInternship();

  const navigate = useNavigate();

  const initialForm = {
    title: "",

    description: "",

    location: "",

    type: "",

    workMode: "",

    duration: "",

    stipend: "",

    openings: "",

    deadline: "",

    responsibilities: "",

    skills: "",

    qualifications: "",

    benefits: "",

    selectionProcess: "",
    category: "",
    experienceLevel: "",
    educationLevel: "",
    salaryType: "",
    applicationEmail: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      ...form,

      openings: form.openings ? Number(form.openings) : null,

      responsibilities: form.responsibilities
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),

      skills: form.skills
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

      qualifications: form.qualifications
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),

      benefits: form.benefits
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),

      selectionProcess: form.selectionProcess
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    mutation.mutate(payload, {
      onSuccess: () => {
        setForm(initialForm);

        navigate("/employer/internships");
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Post Internship</h1>

        <p className="text-slate-500 mt-2">
          Create a professional internship opportunity for students.
        </p>
      </div>

      <form
        onSubmit={submitHandler}
        className="
      bg-white
      rounded-2xl
      shadow
      border
      p-8
      space-y-10
      "
      >
        <section>
          <h2 className="text-xl font-semibold mb-6">Basic Information</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Internship Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="MERN Stack Developer Intern"
            />

            <Select
              label="Internship Type"
              name="type"
              value={form.type}
              onChange={handleChange}
              options={["Full Time", "Part Time", "Contract"]}
            />

            <Select
              label="Work Mode"
              name="workMode"
              value={form.workMode}
              onChange={handleChange}
              options={["Remote", "Hybrid", "Onsite"]}
            />
            <Select
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              options={[
                "Software Development",
                "AI/ML",
                "UI/UX",
                "Data Science",
                "Cybersecurity",
                "QA",
                "DevOps",
              ]}
            />

            <Select
              label="Experience Level"
              name="experienceLevel"
              value={form.experienceLevel}
              onChange={handleChange}
              options={["Beginner", "Intermediate", "Advanced"]}
            />

            <Select
              label="Education Level"
              name="educationLevel"
              value={form.educationLevel}
              onChange={handleChange}
              options={["High School", "Diploma", "Bachelor", "Master"]}
            />

            <Select
              label="Salary Type"
              name="salaryType"
              value={form.salaryType}
              onChange={handleChange}
              options={["Monthly", "Hourly", "Weekly", "Fixed", "Unpaid"]}
            />

            <Input
              label="Application Email"
              name="applicationEmail"
              value={form.applicationEmail}
              onChange={handleChange}
              placeholder="hr@company.com"
              required={false}
            />

            <Input
              label="Location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Kathmandu"
            />

            <Input
              label="Duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder="3 Months"
            />

            <Input
              label="Openings"
              name="openings"
              value={form.openings}
              onChange={handleChange}
              type="number"
              placeholder="5"
            />

            <Input
              label="Stipend"
              name="stipend"
              value={form.stipend}
              onChange={handleChange}
              placeholder="NPR 15000/month"
            />

            <Input
              label="Deadline"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              type="date"
            />
          </div>
        </section>

        <Textarea
          label="Internship Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Explain internship role..."
        />

        <Textarea
          label="Responsibilities (one per line)"
          name="responsibilities"
          value={form.responsibilities}
          onChange={handleChange}
          placeholder={`Develop React components
Build REST APIs
Database management`}
        />

        <Textarea
          label="Required Skills (comma separated)"
          name="skills"
          value={form.skills}
          onChange={handleChange}
          placeholder="React, Node.js, PostgreSQL"
        />

        <Textarea
          label="Qualifications"
          name="qualifications"
          value={form.qualifications}
          onChange={handleChange}
          placeholder={`BE Computer Engineering
JavaScript knowledge`}
        />

        <Textarea
          label="Benefits"
          name="benefits"
          value={form.benefits}
          onChange={handleChange}
          placeholder={`Certificate
Mentorship
Job Opportunity`}
        />

        <Textarea
          label="Selection Process"
          name="selectionProcess"
          value={form.selectionProcess}
          onChange={handleChange}
          placeholder={`Resume Screening
Technical Interview`}
        />

        <div className="flex justify-end">
          <button
            disabled={mutation.isPending}
            className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          py-3
          rounded-lg
          font-semibold
          "
          >
            {mutation.isPending ? "Publishing..." : "Publish Internship"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Input({ label, required = true, ...props }) {
  return (
    <div>
      <label className="block mb-2 font-medium">{label}</label>

      <input
        {...props}
        required={required}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}

function Select({ label, options, required = true, ...props }) {
  return (
    <div>
      <label className="block mb-2 font-medium">{label}</label>

      <select
        {...props}
        required={required}
        className="w-full border rounded-lg p-3"
      >
        <option value="">Select</option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, required = true, ...props }) {
  return (
    <div>
      <label className="block mb-2 font-medium">{label}</label>

      <textarea
        {...props}
        rows={5}
        required={required}
        className="w-full border rounded-lg p-4 resize-none"
      />
    </div>
  );
}
