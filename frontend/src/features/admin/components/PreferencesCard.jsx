import { Bell, Moon } from "lucide-react";

export default function PreferencesCard() {
  return (
    <div className="space-y-8">

      {/* ================= Notifications ================= */}

      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">
          <Bell className="h-6 w-6 text-yellow-500" />

          <h2 className="text-2xl font-semibold text-gray-800">
            Notification Preferences
          </h2>
        </div>

        <div className="space-y-4">

          <label className="flex items-center justify-between rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
            <div>
              <h3 className="font-medium">Student Registrations</h3>
              <p className="text-sm text-gray-500">
                Notify when a student registers.
              </p>
            </div>

            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
            <div>
              <h3 className="font-medium">Employer Registrations</h3>
              <p className="text-sm text-gray-500">
                Notify when a new employer joins.
              </p>
            </div>

            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
            <div>
              <h3 className="font-medium">New Internship Posted</h3>
              <p className="text-sm text-gray-500">
                Receive internship notifications.
              </p>
            </div>

            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
            <div>
              <h3 className="font-medium">New Applications</h3>
              <p className="text-sm text-gray-500">
                Notify when students apply.
              </p>
            </div>

            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
            <div>
              <h3 className="font-medium">Weekly Reports</h3>
              <p className="text-sm text-gray-500">
                Receive weekly admin reports.
              </p>
            </div>

            <input type="checkbox" className="h-5 w-5" />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
            <div>
              <h3 className="font-medium">Email Alerts</h3>
              <p className="text-sm text-gray-500">
                Receive important emails.
              </p>
            </div>

            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </label>

        </div>

      </div>

      {/* ================= Appearance ================= */}

      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">
          <Moon className="h-6 w-6 text-indigo-600" />

          <h2 className="text-2xl font-semibold text-gray-800">
            Appearance
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Theme
            </label>

            <select className="w-full rounded-xl border border-gray-300 px-4 py-3">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Language
            </label>

            <select className="w-full rounded-xl border border-gray-300 px-4 py-3">
              <option>English</option>
              <option>Nepali</option>
            </select>
          </div>

        </div>

      </div>

    </div>
  );
}