import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function Settings() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await api.get("/admin/settings");

      if (response.data.success) {
        setForm({
          name: response.data.data.name || "",
          email: response.data.data.email || "",
          role: response.data.data.role || "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      form.password &&
      form.password !== form.confirmPassword
    ) {
      return alert("Passwords do not match");
    }

    try {
      setSaving(true);

      const payload = {
        name: form.name,
        email: form.email,
      };

      if (form.password.trim() !== "") {
        payload.password = form.password;
      }

      const response = await api.put(
        "/admin/settings",
        payload
      );

      if (response.data.success) {
        alert("Settings updated successfully");

        setForm({
          ...form,
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Failed to update settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Loading Settings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Admin Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Update your account information and password.
        </p>
      </div>

      <div className="max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Role
            </label>

            <input
              type="text"
              value={form.role}
              disabled
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-gray-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              New Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Leave empty if you don't want to change"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}