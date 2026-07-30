import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "@/lib/api";

export default function EditInternship() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [employers, setEmployers] = useState([]);

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

      const response = await api.get(`/internships/${id}`);

      if (response.data.success) {

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

          employerId: internship.employerId,

          isActive: internship.isActive,

        });

      }

    } catch (error) {

      console.log(error);

    }

  };

  const fetchEmployers = async () => {

    try {

      const response = await api.get("/admin/employers");

      if(response.data.success){

        setEmployers(response.data.data);

      }

    } catch(error){

      console.log(error);

    }

  };

  const handleChange = (e)=>{

    const {name,value}=e.target;

    setFormData({

      ...formData,

      [name]:
      name==="isActive"
      ? value==="true"
      : value,

    });

  };

  const handleSubmit = async(e)=>{

    e.preventDefault();

    try{

      const response=await api.put(

        `/internships/${id}`,

        formData

      );

      if(response.data.success){

        alert("Internship updated successfully");

        navigate("/admin/internships");

      }

    }catch(error){

      console.log(error);

      alert("Update failed");

    }

  };

  return(

    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">

        Edit Internship

      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={4}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border rounded-lg p-3"
        />

        <input
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Type"
          className="w-full border rounded-lg p-3"
        />

        <input
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
          value={formData.isActive}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >

          <option value={true}>Active</option>

          <option value={false}>Inactive</option>

        </select>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Update Internship
        </button>

      </form>

    </div>

  );

}