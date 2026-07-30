export default function Unauthorized() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-50">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-red-600">
          403
        </h1>


        <h2 className="mt-4 text-2xl font-semibold text-slate-800">
          Unauthorized Access
        </h2>


        <p className="mt-2 text-slate-600">
          You do not have permission to access this page.
        </p>


      </div>

    </div>

  );

}