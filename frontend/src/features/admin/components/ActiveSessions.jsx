import { useEffect, useState } from "react";
import { Monitor, LogOut } from "lucide-react";
import api from "@/lib/api";

export default function ActiveSessions() {

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchSessions();
  }, []);


  const fetchSessions = async () => {
    try {

      const response = await api.get(
        "/auth/sessions"
      );


      if (response.data.success) {

        const sessions =
          response.data.data;

        if (sessions.length > 0) {
          setSession(sessions[0]);
        }

      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };



  const logoutAllDevices = async () => {

    try {

      await api.post(
        "/auth/logout-all"
      );


      alert(
        "Logged out from all devices"
      );


      setSession(null);


    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Logout failed"
      );

    }

  };



  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        Loading Sessions...
      </div>
    );
  }



  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">


      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


        <div className="flex items-center gap-3">

          <Monitor className="h-6 w-6 text-sky-600" />

          <h2 className="text-2xl font-semibold text-gray-800">
            Active Session
          </h2>

        </div>


        <button
          type="button"
          onClick={logoutAllDevices}
          className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
        >
          Logout All Devices
        </button>


      </div>



      {session ? (

        <div className="grid gap-5 md:grid-cols-2">


          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Current Device
            </label>

            <input
              value={session.device || "Unknown Device"}
              disabled
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-gray-600"
            />

          </div>



          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Browser
            </label>

            <input
              value={session.browser || "Unknown Browser"}
              disabled
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-gray-600"
            />

          </div>



          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Last Active
            </label>

            <input
              value={
                session.lastActive
                  ? new Date(session.lastActive).toLocaleString()
                  : "Unknown"
              }
              disabled
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-gray-600"
            />

          </div>



          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Login Location
            </label>

            <input
              value={session.location || "Unknown"}
              disabled
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-gray-600"
            />

          </div>


        </div>

      ) : (

        <div className="rounded-xl bg-gray-50 p-5 text-gray-500">
          No active sessions found.
        </div>

      )}




      <div className="mt-6 rounded-xl bg-sky-50 p-4">

        <div className="flex items-center gap-2">

          <LogOut className="h-5 w-5 text-sky-600" />

          <p className="text-sm text-sky-700">
            If you think your account is compromised,
            logout from all devices immediately.
          </p>

        </div>

      </div>


    </div>
  );
}