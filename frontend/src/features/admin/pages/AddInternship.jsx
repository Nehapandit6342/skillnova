import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/lib/api";

export default function AddInternship() {

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

  });



  useEffect(() => {

    fetchEmployers();

  }, []);




  const fetchEmployers = async () => {

    try {

      const response = await api.get(
        "/admin/employers"
      );


      console.log(
        "Employer API Response:",
        response.data
      );


      if (response.data.success) {

        setEmployers(
          response.data.data
        );

      }


    } catch (error) {

      console.log(
        "Employer Fetch Error:",
        error.response?.data || error.message
      );

    }

  };




  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };





  const handleSubmit = async (e) => {

    e.preventDefault();


    try {


      setLoading(true);



      const response = await api.post(

        "/admin/internships",

        formData

      );



      console.log(
        "Create Internship Response:",
        response.data
      );



      navigate("/admin/internships");



    } catch (error) {


      console.log(

        "Create Internship Error:",

        error.response?.data || error.message

      );



      alert(

        error.response?.data?.message ||

        "Failed to create internship"

      );



    } finally {


      setLoading(false);


    }


  };





  return (

    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md">


      <h1 className="text-3xl font-bold mb-8">

        Add Internship

      </h1>




      <form

        onSubmit={handleSubmit}

        className="space-y-5"

      >



        <input

          type="text"

          name="title"

          placeholder="Internship Title"

          value={formData.title}

          onChange={handleChange}

          className="w-full border rounded-lg p-3"

          required

        />





        <textarea

          name="description"

          placeholder="Description"

          value={formData.description}

          onChange={handleChange}

          rows={4}

          className="w-full border rounded-lg p-3"

          required

        />





        <input

          type="text"

          name="location"

          placeholder="Location"

          value={formData.location}

          onChange={handleChange}

          className="w-full border rounded-lg p-3"

        />





        <input

          type="text"

          name="type"

          placeholder="Remote / Onsite / Hybrid"

          value={formData.type}

          onChange={handleChange}

          className="w-full border rounded-lg p-3"

        />





        <input

          type="text"

          name="stipend"

          placeholder="Stipend"

          value={formData.stipend}

          onChange={handleChange}

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

          required

        >


          <option value="">

            Select Employer

          </option>




          {employers.map((employer) => (


            <option

              key={employer.id}

              value={employer.id}

            >

              {employer.companyName}

            </option>


          ))}



        </select>





        <button

          type="submit"

          disabled={loading}

          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold"

        >

          {loading ? "Creating..." : "Create Internship"}

        </button>




      </form>



    </div>

  );

}