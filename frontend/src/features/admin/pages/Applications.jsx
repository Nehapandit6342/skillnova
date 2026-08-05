import api from "@/lib/api";
import useApplications from "../hooks/useApplications";
import ApplicationTable from "../components/ApplicationTable";

function Applications() {
  const {
    data: applications = [],
    isLoading,
    isError,
    refetch,
  } = useApplications();

  const updateStatus = async (id, status) => {
    try {
      const response = await api.put(
        `/admin/applications/${id}`,
        { status }
      );

      if (response.data.success) {
        alert("Application updated successfully");
        refetch();
      }
    } catch (error) {
      console.log(error);
      alert("Failed to update application");
    }
  };

  const deleteApplication = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) return;

    try {
      const response = await api.delete(
        `/admin/applications/${id}`
      );

      if (response.data.success) {
        alert("Application deleted successfully");
        refetch();
      }
    } catch (error) {
      console.log(error);
      alert("Failed to delete application");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Loading Applications...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-500">
        Failed to load applications.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Applications
        </h1>

        <p className="text-gray-500 mt-2">
          Manage internship applications.
        </p>
      </div>

      <ApplicationTable
        applications={applications}
        onStatusUpdate={updateStatus}
        onDelete={deleteApplication}
      />
    </div>
  );
}

export default Applications;