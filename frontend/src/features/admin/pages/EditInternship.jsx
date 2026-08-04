import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "@/lib/api";

export default function EditInternship() {

  const { id } = useParams();

  const navigate = useNavigate();


  const [employers, setEmployers] = useState([]);

  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({

    title: "",
    description: "",
    location: "",
    type: "",
    stipend: "",
    deadline: "",
    employerId: "",
    isActive: true,

  });



  useEffect(() => {

    fetchInternship();

    fetchEmployers();

  }, []);




  const fetchInternship = async () => {

    try {

      const response = await api.get(
        `/admin/internships/${id}`
      );


      if(response.data.success){

        const internship = response.data.data;


        setFormData({

          title: internship.title || "",

          description: internship.description || "",

          location: internship.location || "",

          type: internship.type || "",

          stipend: internship.stipend || "",

          deadline: internship.deadline
            ? internship.deadline.substring(0,10)
            : "",

          employerId: internship.employerId || "",

          isActive: internship.isActive,

        });


      }


    } catch(error){

      console.log(
        "Fetch Internship Error:",
        error.response?.data || error.message
      );

    }

  };





  const fetchEmployers = async () => {

    try {

      const response = await api.get(
        "/admin/employers"
      );


      if(response.data.success){

        setEmployers(
          response.data.data
        );

      }


    }catch(error){

      console.log(
        "Employer Fetch Error:",
        error.response?.data || error.message
      );

    }

  };





  const handleChange = (e)=>{

    const {name,value}=e.target;


    setFormData((prev)=>({

      ...prev,

      [name]:

        name==="isActive"

        ? value==="true"

        : value

    }));

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      setLoading(true);


      const response = await api.put(

        `/admin/internships/${id}`,

        formData

      );


      if(response.data.success){

        navigate("/admin/internships");

      }


    }catch(error){

      console.log(
        "Update Error:",
        error.response?.data || error.message
      );


      alert(
        error.response?.data?.message ||
        "Update failed"
      );


    }finally{

      setLoading(false);

    }


  };





  return (

    <div className="max-w-4xl mx-auto p-8">


      <h1 className="text-3xl font-bold mb-8">

        Edit Internship

      </h1>



      <form

        onSubmit={handleSubmit}

        className="bg-white shadow-lg rounded-xl p-8 space-y-5"

      >


        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Internship Title"
          className="w-full border rounded-lg p-3"
          required
        />


        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Description"
          className="w-full border rounded-lg p-3"
          required
        />


        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border rounded-lg p-3"
        />


        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Remote / Onsite / Hybrid"
          className="w-full border rounded-lg p-3"
        />


        <input
          type="text"
          name="stipend"
          value={formData.stipend}
          onChange={handleChange}
          placeholder="Stipend"
          className="w-full border rounded-lg p-3"
        />


        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />



        <select
          name="employerId"
          value={formData.employerId}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >

          <option value="">
            Select Employer
          </option>


          {employers.map((employer)=>(

            <option
              key={employer.id}
              value={employer.id}
            >

              {employer.companyName}

            </option>

          ))}

        </select>



        <select
          name="isActive"
          value={String(formData.isActive)}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >

          <option value="true">
            Active
          </option>

          <option value="false">
            Inactive
          </option>


        </select>




        <div className="flex gap-4">


          <button

            type="submit"

            disabled={loading}

            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg"

          >

            {loading ? "Updating..." : "Update Internship"}

          </button>



          <button

            type="button"

            onClick={()=>navigate("/admin/internships")}

            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"

          >

            Cancel

          </button>


        </div>


      </form>


    </div>

  );

}