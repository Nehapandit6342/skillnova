import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const studentsData = [
  {
    id: 1,
    name: "Nisha Yadav",
    email: "nisha@gmail.com",
    college: "MBCE",
    status: "Pending",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    college: "TU",
    status: "Approved",
  },
  {
    id: 3,
    name: "Amit Singh",
    email: "amit@gmail.com",
    college: "KU",
    status: "Rejected",
  },
];

function Students() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (student) => {
    navigate(`/admin/student/${student.id}`);
  };

  const handleEdit = (student) => {
    navigate(`/admin/edit-student/${student.id}`);
  };

  const handleDelete = (student) => {
    const confirmDelete = window.confirm(
      `Delete ${student.name}?`
    );

    if (confirmDelete) {
      alert("Delete functionality will be added after backend integration.");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <h1>Students Management</h1>

        <Link
          to="/admin/add-student"
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          + Add Student
        </Link>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "350px",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "15px",
        }}
      />

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ background: "#f3f4f6" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>College</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td style={tdStyle}>{student.name}</td>
                <td style={tdStyle}>{student.email}</td>
                <td style={tdStyle}>{student.college}</td>

                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      color: "#fff",
                      backgroundColor:
                        student.status === "Approved"
                          ? "green"
                          : student.status === "Rejected"
                          ? "red"
                          : "orange",
                    }}
                  >
                    {student.status}
                  </span>
                </td>

                <td style={tdStyle}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <button
                      onClick={() => handleView(student)}
                      style={{
                        background: "#16a34a",
                        color: "#fff",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      View
                    </button>

                    <button
                      onClick={() => handleEdit(student)}
                      style={{
                        background: "#2563eb",
                        color: "#fff",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(student)}
                      style={{
                        background: "#dc2626",
                        color: "#fff",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No student found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "left",
  fontWeight: "bold",
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "12px",
};

export default Students;