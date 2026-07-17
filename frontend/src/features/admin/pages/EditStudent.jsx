import { useParams } from "react-router-dom";
import { useState } from "react";

const students = [
  {
    id: 1,
    fullName: "Nisha Yadav",
    email: "nisha@gmail.com",
    phone: "9876543210",
    college: "MBCE",
    course: "Computer Engineering",
    semester: "6",
    skills: "React, Node.js",
    status: "Pending",
  },
  {
    id: 2,
    fullName: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9800000000",
    college: "Tribhuvan University",
    course: "BCA",
    semester: "5",
    skills: "Java, Spring Boot",
    status: "Approved",
  },
  {
    id: 3,
    fullName: "Amit Singh",
    email: "amit@gmail.com",
    phone: "9811111111",
    college: "Kathmandu University",
    course: "BSc CSIT",
    semester: "7",
    skills: "Python, Django",
    status: "Rejected",
  },
];

function EditStudent() {
  const { id } = useParams();

  const selectedStudent =
    students.find((student) => student.id === Number(id)) ||
    students[0];

  const [student, setStudent] = useState(selectedStudent);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(student);

    alert("Student Updated Successfully!");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Student</h1>

      <p>
        <b>Student ID:</b> {id}
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          display: "grid",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          name="fullName"
          value={student.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          style={inputStyle}
        />

        <input
          type="text"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          placeholder="Phone"
          style={inputStyle}
        />

        <input
          type="text"
          name="college"
          value={student.college}
          onChange={handleChange}
          placeholder="College"
          style={inputStyle}
        />

        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Course"
          style={inputStyle}
        />

        <input
          type="text"
          name="semester"
          value={student.semester}
          onChange={handleChange}
          placeholder="Semester"
          style={inputStyle}
        />

        <input
          type="text"
          name="skills"
          value={student.skills}
          onChange={handleChange}
          placeholder="Skills"
          style={inputStyle}
        />

        <select
          name="status"
          value={student.status}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button type="submit" style={buttonStyle}>
          Update Student
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const buttonStyle = {
  width: "180px",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default EditStudent;