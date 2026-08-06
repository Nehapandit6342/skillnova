import { useState } from "react";
import { AlertTriangle, RotateCcw, UserX, Trash2 } from "lucide-react";

export default function DangerZone() {

  const [action, setAction] = useState(null);


  const handleConfirm = () => {

    console.log("Confirmed Action:", action);

    // Backend API baad me connect karenge

    setAction(null);
  };


  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-8 shadow-sm">


      <div className="mb-8 flex items-center gap-3">

        <AlertTriangle className="h-7 w-7 text-red-600" />

        <div>

          <h2 className="text-2xl font-semibold text-red-700">
            Danger Zone
          </h2>

          <p className="mt-1 text-sm text-red-500">
            These actions are irreversible. Please proceed carefully.
          </p>

        </div>

      </div>



      <div className="space-y-5">


        <div className="flex items-center justify-between rounded-xl border border-red-200 bg-white p-5">

          <div className="flex items-center gap-4">

            <RotateCcw className="h-6 w-6 text-orange-500" />

            <div>
              <h3 className="font-semibold text-gray-800">
                Reset Preferences
              </h3>

              <p className="text-sm text-gray-500">
                Restore notification and appearance settings.
              </p>

            </div>

          </div>


          <button
            type="button"
            onClick={() => setAction("reset")}
            className="rounded-lg border border-orange-500 px-4 py-2 text-orange-600 hover:bg-orange-50"
          >
            Reset
          </button>

        </div>




        <div className="flex items-center justify-between rounded-xl border border-red-200 bg-white p-5">

          <div className="flex items-center gap-4">

            <UserX className="h-6 w-6 text-red-500" />

            <div>

              <h3 className="font-semibold text-gray-800">
                Deactivate Account
              </h3>

              <p className="text-sm text-gray-500">
                Temporarily disable your administrator account.
              </p>

            </div>

          </div>


          <button
            type="button"
            onClick={() => setAction("deactivate")}
            className="rounded-lg border border-red-500 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            Deactivate
          </button>

        </div>





        <div className="flex items-center justify-between rounded-xl border border-red-300 bg-white p-5">


          <div className="flex items-center gap-4">

            <Trash2 className="h-6 w-6 text-red-600" />

            <div>

              <h3 className="font-semibold text-gray-800">
                Delete Account
              </h3>

              <p className="text-sm text-gray-500">
                Permanently remove this administrator account.
              </p>

            </div>

          </div>



          <button
            type="button"
            onClick={() => setAction("delete")}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>


        </div>



      </div>



      {action && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="rounded-xl bg-white p-6 shadow-xl">

            <h3 className="text-lg font-bold text-gray-800">
              Are you sure?
            </h3>

            <p className="mt-2 text-gray-500">
              This action cannot be undone.
            </p>


            <div className="mt-5 flex justify-end gap-3">

              <button
                onClick={() => setAction(null)}
                className="rounded-lg border px-4 py-2"
              >
                Cancel
              </button>


              <button
                onClick={handleConfirm}
                className="rounded-lg bg-red-600 px-4 py-2 text-white"
              >
                Confirm
              </button>

            </div>


          </div>

        </div>

      )}


    </div>
  );
}