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
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">
          Admin Settings
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Role
            </label>

            <input
              type="text"
              value={form.role}
              disabled
              className="w-full border rounded-lg px-4 py-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              New Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Leave empty if you don't want to change"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}