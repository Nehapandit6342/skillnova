import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";
import api from "@/lib/api";


function Students() {


  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();



  useEffect(() => {


    const fetchStudents = async () => {


      try {


        const response = await api.get("/admin/students");


        if (response.data.success) {

          setStudents(response.data.data);

        }


      } catch (error) {

        console.log("Students Error:", error);

      }


    };


    fetchStudents();


  }, []);







  const filteredStudents = students.filter((student) =>

    student.name
      .toLowerCase()
      .includes(search.toLowerCase())

  );







  const handleView = (student) => {

    navigate(`/admin/student/${student.id}`);

  };






  const handleEdit = (student) => {

    navigate(`/admin/edit-student/${student.id}`);

  };







  const handleDelete = async (student) => {


    const confirmDelete = window.confirm(

      `Delete ${student.name}?`

    );


    if (!confirmDelete) return;



    try {


      const response = await api.delete(

        `/admin/students/${student.id}`

      );



      if(response.data.success){


        alert("Student deleted successfully");



        setStudents((prev)=>

          prev.filter(

            (s)=>s.id !== student.id

          )

        );


      }



    } catch(error){


      console.log("Delete Error:",error);

      alert("Failed to delete student");


    }


  };







  return (


    <div className="p-8">



      <h1 className="text-3xl font-bold text-gray-800 mb-6">

        Students Management

      </h1>






      <input


        type="text"


        placeholder="Search student..."


        value={search}


        onChange={(e)=>setSearch(e.target.value)}


        className="
        mb-6
        w-96
        rounded-lg
        border
        px-4
        py-2
        outline-none
        focus:border-blue-500
        "

      />







      <div className="overflow-x-auto rounded-xl bg-white shadow-md">


      <table className="w-full">


        <thead className="bg-gray-100">


          <tr>


            <th className="px-6 py-3 text-left">
              Name
            </th>


            <th className="px-6 py-3 text-left">
              Email
            </th>


            <th className="px-6 py-3 text-left">
              College
            </th>


            <th className="px-6 py-3 text-center">
              Action
            </th>


          </tr>


        </thead>






        <tbody>


        {


        filteredStudents.length > 0 ?


        filteredStudents.map((student)=>(


          <tr
            key={student.id}
            className="border-t hover:bg-gray-50"
          >



            <td className="px-6 py-4">

              {student.name}

            </td>





            <td className="px-6 py-4">

              {student.email}

            </td>





            <td className="px-6 py-4">

              {
                student.studentProfile?.college
                ||
                "N/A"
              }

            </td>






            <td className="px-6 py-4">


              <div className="
              flex
              justify-center
              gap-4
              ">





                {/* View */}

                <button

                  onClick={()=>handleView(student)}

                  title="View Student"

                  className="
                  text-blue-600
                  hover:text-blue-800
                  transition
                  "

                >

                  <Eye size={20}/>

                </button>







                {/* Edit */}

                <button

                  onClick={()=>handleEdit(student)}

                  title="Edit Student"

                  className="
                  text-green-600
                  hover:text-green-800
                  transition
                  "

                >

                  <Pencil size={20}/>

                </button>







                {/* Delete */}

                <button

                  onClick={()=>handleDelete(student)}

                  title="Delete Student"

                  className="
                  text-red-600
                  hover:text-red-800
                  transition
                  "

                >

                  <Trash2 size={20}/>

                </button>






              </div>



            </td>




          </tr>


        ))



        :



        <tr>


          <td

            colSpan="4"

            className="
            py-6
            text-center
            text-gray-500
            "

          >

            No student found


          </td>


        </tr>



        }



        </tbody>



      </table>


      </div>




    </div>


  );


}





export default Students;