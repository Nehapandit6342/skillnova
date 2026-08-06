import { FileSearch } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyApplications() {
  return (
    <div className="rounded-xl border bg-white py-16 text-center">
      <FileSearch className="mx-auto h-14 w-14 text-slate-400" />

      <h2 className="mt-5 text-2xl font-bold">No Applications Found</h2>

      <p className="mt-2 text-slate-500">
        Start applying for internships and track them here.
      </p>

      <Link
        to="/internships"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        Browse Internships
      </Link>
    </div>
  );
}
