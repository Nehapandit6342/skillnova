import { useParams, Link } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  // Dummy Student Data
  const student = {
    id,
    fullName: "Nisha Yadav",
    email: "nisha@gmail.com",
    phone: "9876543210",
    college: "MBCE",
    course: "Computer Engineering",
    semester: "6",
    skills: "React, Node.js, MongoDB",
    status: "Pending",
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Student Details</h1>

      <div
        style={{
          marginTop: "20px",
          background: "#fff",
          padding: "25px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          maxWidth: "700px",
        }}
      >
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Full Name:</strong> {student.fullName}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>College:</strong> {student.college}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Semester:</strong> {student.semester}</p>
        <p><strong>Skills:</strong> {student.skills}</p>
        <p><strong>Status:</strong> {student.status}</p>

        <Link
          to="/admin/students"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 18px",
            background: "#2563eb",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          ← Back to Students
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;