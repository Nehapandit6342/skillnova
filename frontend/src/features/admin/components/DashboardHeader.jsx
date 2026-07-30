function DashboardHeader() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">

      <div>

        <h1 className="text-4xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back, Admin! 👋
        </p>

      </div>

      <div className="mt-5 lg:mt-0 bg-white border rounded-xl shadow-sm px-5 py-3">

        <p className="text-sm text-slate-400">
          Today
        </p>

        <p className="font-semibold text-slate-700">
          {new Date().toLocaleDateString()}
        </p>

      </div>

    </div>
  );
}

export default DashboardHeader;