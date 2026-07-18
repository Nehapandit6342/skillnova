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
    <div
      style={{
        background: "#fff",
        marginTop: "30px",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Recent Internships</h2>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "12px" }}>Title</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Company</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Applicants</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Status</th>
          </tr>
        </thead>

        <tbody>
          {internships.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "12px" }}>{item.title}</td>
              <td style={{ padding: "12px" }}>{item.company}</td>
              <td style={{ padding: "12px" }}>{item.applicants}</td>
              <td style={{ padding: "12px" }}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentInternships;