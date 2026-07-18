import EmployerForm from "../components/EmployerForm";

export default function AddEmployer() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Add Employer</h1>

      <EmployerForm onSubmit={handleSubmit} />
    </div>
  );
}