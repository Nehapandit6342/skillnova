import { useState } from "react";


export default function EmployerForm({ onSubmit, initialData = {} }) {


  const [formData, setFormData] = useState({

    companyName: initialData.companyName || "",

    website: initialData.website || "",

    industry: initialData.industry || "",

    location: initialData.location || "",

    description: initialData.description || "",

    companySize: initialData.companySize || "",

    foundedYear: initialData.foundedYear || "",

  });



  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit=(e)=>{

    e.preventDefault();

    onSubmit(formData);

  };



  return (

    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-white p-6 shadow-md"
    >


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


        <div>
          <label className="font-medium">
            Company Name
          </label>

          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>



        <div>
          <label className="font-medium">
            Website
          </label>

          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>



        <div>
          <label className="font-medium">
            Industry
          </label>

          <input
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>



        <div>
          <label className="font-medium">
            Location
          </label>

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>



        <div>
          <label className="font-medium">
            Company Size
          </label>

          <input
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>



        <div>
          <label className="font-medium">
            Founded Year
          </label>

          <input
            type="number"
            name="foundedYear"
            value={formData.foundedYear}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>


      </div>



      <div className="mt-4">

        <label className="font-medium">
          Description
        </label>


        <textarea

          name="description"

          value={formData.description}

          onChange={handleChange}

          className="w-full border p-2 rounded"

          rows="4"

        />

      </div>



      <button

        type="submit"

        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded"

      >

        Update Employer

      </button>



    </form>

  );

}