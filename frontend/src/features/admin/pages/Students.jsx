import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Students() {

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();



  useEffect(() => {

    const fetchStudents = async () => {

      try {

        const token = localStorage.getItem("token");


        const response = await fetch(
          "http://localhost:5001/api/admin/students",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        const result = await response.json();


        console.log(result);


        if(result.success){

          setStudents(result.data);

        }


      } catch(error){

        console.log("Students Error:", error);

      }

    };


    fetchStudents();


  }, []);




  const filteredStudents = students.filter((student) =>
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


    if(confirmDelete){

      alert("Delete API will be added.");

    }

  };




  return (

    <div style={{padding:"30px"}}>


      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          marginBottom:"25px"
        }}
      >

        <h1>
          Students Management
        </h1>


        <Link
          to="/admin/add-student"
          style={{
            background:"#2563eb",
            color:"#fff",
            padding:"10px 18px",
            borderRadius:"6px",
            textDecoration:"none"
          }}
        >
          + Add Student
        </Link>


      </div>




      <input

        type="text"

        placeholder="Search student..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        style={{
          width:"350px",
          padding:"10px",
          marginBottom:"20px"
        }}

      />





      <table
        style={{
          width:"100%",
          borderCollapse:"collapse"
        }}
      >

        <thead>

          <tr>

            <th style={thStyle}>
              Name
            </th>


            <th style={thStyle}>
              Email
            </th>


            <th style={thStyle}>
              College
            </th>


            <th style={thStyle}>
              Action
            </th>


          </tr>


        </thead>




        <tbody>


        {
          filteredStudents.length > 0 ?

          filteredStudents.map((student)=>(


            <tr key={student.id}>


              <td style={tdStyle}>
                {student.name}
              </td>


              <td style={tdStyle}>
                {student.email}
              </td>



              <td style={tdStyle}>
                {
                  student.studentProfile?.college 
                  || 
                  "N/A"
                }
              </td>



              <td style={tdStyle}>


                <button
                  onClick={()=>handleView(student)}
                >
                  View
                </button>


                <button
                  onClick={()=>handleEdit(student)}
                >
                  Edit
                </button>


                <button
                  onClick={()=>handleDelete(student)}
                >
                  Delete
                </button>


              </td>


            </tr>


          ))

          :

          <tr>

            <td
              colSpan="4"
              style={{
                textAlign:"center",
                padding:"20px"
              }}
            >
              No student found
            </td>

          </tr>

        }


        </tbody>


      </table>



    </div>

  );

}



const thStyle = {

  border:"1px solid #ddd",

  padding:"12px",

};



const tdStyle = {

  border:"1px solid #ddd",

  padding:"12px",

};



export default Students;