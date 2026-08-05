import useInternships from "../hooks/useInternships";
import api from "@/lib/api";
import InternshipTable from "../components/InternshipTable";

function Internships() {
  const {
    data: internships = [],
    isLoading,
    isError,
    refetch,
  } = useInternships();

  const deleteInternship = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this internship?"
    );

    if (!confirmDelete) return;

    try {
      const response = await api.delete(`/admin/internships/${id}`);

      if (response.data.success) {
        alert("Internship deleted successfully");
        refetch();
      }
    } catch (error) {
      console.log(error);
      alert("Failed to delete internship");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Loading Internships...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-500">
        Failed to load internships.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Internships
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all internships posted by employers.
        </p>
      </div>

      <InternshipTable
        internships={internships}
        onDelete={deleteInternship}
      />
    </div>
  );
}

export default Internships;