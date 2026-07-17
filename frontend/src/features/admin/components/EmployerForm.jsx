import { useState } from "react";

export default function EmployerForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    companyName: initialData.companyName || "",
    hrName: initialData.hrName || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    website: initialData.website || "",
    industry: initialData.industry || "",
    status: initialData.status || "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-white p-6 shadow-md"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block font-medium">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-lg border p-2"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium">HR Name</label>
          <input
            type="text"
            name="hrName"
            value={formData.hrName}
            onChange={handleChange}
            className="w-full rounded-lg border p-2"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border p-2"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border p-2"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium">Website</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full rounded-lg border p-2"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium">Industry</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full rounded-lg border p-2"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border p-2"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Save Employer
      </button>
    </form>
  );
}