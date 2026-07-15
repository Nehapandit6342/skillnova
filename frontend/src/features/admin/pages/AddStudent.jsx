import { useState } from "react";

function AddStudent() {
  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    semester: "",
    skills: "",
    status: "Pending",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Student Data:", student);

    alert("Student Added Successfully!");

    setStudent({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      course: "",
      semester: "",
      skills: "",
      status: "Pending",
      resume: null,
    });

    e.target.reset();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>Add New Student</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          display: "grid",
          gap: "15px",
        }}
      >
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={student.fullName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={student.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={student.phone}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label>College</label>
          <input
            type="text"
            name="college"
            placeholder="Enter college name"
            value={student.college}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label>Course</label>
          <input
            type="text"
            name="course"
            placeholder="Computer Engineering"
            value={student.course}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label>Semester</label>
          <input
            type="number"
            name="semester"
            placeholder="6"
            value={student.semester}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            placeholder="React, Node.js, MongoDB"
            value={student.skills}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label>Status</label>
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
        </div>

        <div>
          <label>Upload Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Save Student
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "15px",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  width: "180px",
  fontSize: "16px",
};

export default AddStudent;