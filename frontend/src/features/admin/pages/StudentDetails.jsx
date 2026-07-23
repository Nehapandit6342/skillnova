import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function StudentDetails() {

  const { id } = useParams();

  const [student, setStudent] = useState(null);



  useEffect(() => {


    const fetchStudent = async () => {


      try {


        const token = localStorage.getItem("token");


        const response = await fetch(

          `http://localhost:5001/api/admin/students/${id}`,

          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

        );


        const result = await response.json();


        console.log(result);



        if(result.success){

          setStudent(result.data);

        }



      } catch(error){

        console.log("Student Details Error:", error);

      }


    };



    fetchStudent();


  }, [id]);





  if(!student){

    return (

      <h2 style={{padding:"30px"}}>
        Loading...
      </h2>

    );

  }





  return (

    <div style={{padding:"30px"}}>


      <h1>
        Student Details
      </h1>




      <div

        style={{

          marginTop:"20px",

          background:"#fff",

          padding:"25px",

          borderRadius:"8px",

          boxShadow:"0 0 10px rgba(0,0,0,0.1)",

          maxWidth:"700px"

        }}

      >


        <p>
          <strong>ID:</strong> {student.id}
        </p>


        <p>
          <strong>Name:</strong> {student.name}
        </p>


        <p>
          <strong>Email:</strong> {student.email}
        </p>


        <p>
          <strong>College:</strong>{" "}
          {student.studentProfile?.college || "N/A"}
        </p>


        <p>
          <strong>Degree:</strong>{" "}
          {student.studentProfile?.degree || "N/A"}
        </p>


        <p>
          <strong>Skills:</strong>{" "}
          {
            student.studentProfile?.skills?.length > 0
            ?
            student.studentProfile.skills.join(", ")
            :
            "No skills"
          }
        </p>


        <p>
          <strong>Career Goal:</strong>{" "}
          {student.studentProfile?.careerGoal || "N/A"}
        </p>


        <p>
          <strong>Bio:</strong>{" "}
          {student.studentProfile?.bio || "N/A"}
        </p>




        <Link

          to="/admin/students"

          style={{

            display:"inline-block",

            marginTop:"20px",

            padding:"10px 18px",

            background:"#2563eb",

            color:"#fff",

            textDecoration:"none",

            borderRadius:"6px"

          }}

        >

          ← Back to Students

        </Link>


      </div>


    </div>

  );


}


export default StudentDetails;