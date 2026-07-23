function RecentInternships() {
  const internships = [
    {
      title: "Frontend Developer",
      company: "LeoTech Solutions",
      applicants: 45,
      status: "Open",
    },
    {
      title: "Backend Developer",
      company: "TechNova",
      applicants: 32,
      status: "Open",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Labs",
      applicants: 18,
      status: "Closed",
    },
    {
      title: "AI Intern",
      company: "SkillNova",
      applicants: 27,
      status: "Open",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mt-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Recent Internships
        </h2>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-200">

              <th className="text-left py-3 text-slate-500 font-semibold">
                Title
              </th>

              <th className="text-left py-3 text-slate-500 font-semibold">
                Company
              </th>

              <th className="text-left py-3 text-slate-500 font-semibold">
                Applicants
              </th>

              <th className="text-left py-3 text-slate-500 font-semibold">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {internships.map((item, index) => (

              <tr
                key={index}
                className="border-b border-slate-100 hover:bg-slate-50 transition"
              >

                <td className="py-4 font-medium text-slate-800">
                  {item.title}
                </td>

                <td className="py-4 text-slate-600">
                  {item.company}
                </td>

                <td className="py-4 text-slate-600">
                  {item.applicants}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default RecentInternships;