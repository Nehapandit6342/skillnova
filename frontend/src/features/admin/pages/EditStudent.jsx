import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "@/lib/api";
function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    college: "",
    degree: "",
    bio: "",
    careerGoal: "",
    skills: "",
  });

  useEffect(() => {
    fetchStudent();
  }, [id]);

 const fetchStudent = async () => {
  try {
    const response = await api.get(`/admin/students/${id}`);

    if (response.data.success) {
      setStudent({
        name: response.data.data.name || "",
        email: response.data.data.email || "",
        college: response.data.data.studentProfile?.college || "",
        degree: response.data.data.studentProfile?.degree || "",
        bio: response.data.data.studentProfile?.bio || "",
        careerGoal: response.data.data.studentProfile?.careerGoal || "",
        skills:
          response.data.data.studentProfile?.skills?.join(", ") || "",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.put(`/admin/students/${id}`, {
      ...student,
      skills: student.skills
        .split(",")
        .map((skill) => skill.trim()),
    });

    if (response.data.success) {
      alert("Student Updated Successfully");
      navigate("/admin/students");
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Student</h1>

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
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
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
          name="college"
          value={student.college}
          onChange={handleChange}
          placeholder="College"
          style={inputStyle}
        />

        <input
          type="text"
          name="degree"
          value={student.degree}
          onChange={handleChange}
          placeholder="Degree"
          style={inputStyle}
        />

        <textarea
          name="bio"
          value={student.bio}
          onChange={handleChange}
          placeholder="Bio"
          style={inputStyle}
        />

        <input
          type="text"
          name="careerGoal"
          value={student.careerGoal}
          onChange={handleChange}
          placeholder="Career Goal"
          style={inputStyle}
        />

        <input
          type="text"
          name="skills"
          value={student.skills}
          onChange={handleChange}
          placeholder="React, Node.js, MongoDB"
          style={inputStyle}
        />

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