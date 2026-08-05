import { useEffect, useState } from "react";
import SectionContainer from "@/components/common/SectionContainer";
import api from "@/lib/api";

export default function TrustedSection() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const fetchTechnologies = async () => {
    try {
      const res = await api.get("/public/home");

      if (res.data.success) {
        setTechnologies(res.data.data.technologies || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SectionContainer className="py-14">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Powered By Modern Technologies
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10 object-contain"
              />

              <span className="text-sm font-medium text-slate-600">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}