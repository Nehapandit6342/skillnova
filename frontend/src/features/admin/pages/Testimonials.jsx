import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

function Testimonials() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: async () => {
      const res = await api.get("/admin/testimonials");
      return res.data.data;
    },
  });

  if (isLoading) {
    return <div className="p-6">Loading testimonials...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Failed to load testimonials.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Testimonials</h1>

      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Student</th>
            <th className="p-3 text-left">Company</th>
            <th className="p-3 text-left">Rating</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">
                  {item.designation}
                </div>
              </td>

              <td className="p-3">{item.company}</td>

              <td className="p-3">
                {"⭐".repeat(item.rating)}
              </td>

              <td className="p-3">
                {item.isActive ? (
                  <span className="rounded bg-green-100 px-2 py-1 text-green-700">
                    Active
                  </span>
                ) : (
                  <span className="rounded bg-red-100 px-2 py-1 text-red-700">
                    Inactive
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Testimonials;