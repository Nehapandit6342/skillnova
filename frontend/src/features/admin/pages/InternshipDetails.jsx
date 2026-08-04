import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "@/lib/api";

export default function InternshipDetails() {

  const { id } = useParams();

  const [internship, setInternship] = useState(null);

  useEffect(() => {
    fetchInternship();
  }, []);

  const fetchInternship = async () => {

    try {

      const res = await api.get(`/admin/internships/${id}`);

      if (res.data.success) {
        setInternship(res.data.data);
      }

    } catch (error) {
      console.log(error);
    }

  };

  if (!internship) {
    return (
      <div className="p-8">
        <h2 className="text-xl">Loading...</h2>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-50 p-8">

      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            Internship Details
          </h1>

          <Link
            to="/admin/internships"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Back
          </Link>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="font-semibold text-gray-500">Title</p>
            <p>{internship.title}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-500">Company</p>
            <p>{internship.employer?.companyName}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-500">Industry</p>
            <p>{internship.employer?.industry}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-500">Location</p>
            <p>{internship.location}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-500">Type</p>
            <p>{internship.type}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-500">Stipend</p>
            <p>Rs. {internship.stipend}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-500">Deadline</p>
            <p>{new Date(internship.deadline).toLocaleDateString()}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-500">Status</p>

            <span
              className={`px-3 py-1 rounded-full ${
                internship.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {internship.isActive ? "Active" : "Inactive"}
            </span>

          </div>

        </div>

        <div className="mt-8">

          <p className="font-semibold text-gray-500 mb-2">
            Description
          </p>

          <p>{internship.description}</p>

        </div>

      </div>

    </div>

  );

}