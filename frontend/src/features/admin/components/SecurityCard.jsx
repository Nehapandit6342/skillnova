import { ShieldCheck } from "lucide-react";

export default function SecurityCard({
  form,
  handleChange,
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <ShieldCheck className="h-6 w-6 text-green-600" />

          <h2 className="text-2xl font-semibold text-gray-800">
            Security
          </h2>

        </div>

        <button
          type="submit"
          className="rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
        >
          Update Password
        </button>

      </div>

      <div className="space-y-5">

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Current Password
          </label>

         <input
  type="password"
  name="currentPassword"
  value={form.currentPassword}
  onChange={handleChange}
  placeholder="Enter current password"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
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
            placeholder="Enter new password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
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
            placeholder="Confirm new password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
          />
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-green-50 p-4">

        <p className="text-sm text-green-700">
          Password should contain at least 8 characters,
          including uppercase, lowercase, number and special character.
        </p>

      </div>

    </div>
  );
}