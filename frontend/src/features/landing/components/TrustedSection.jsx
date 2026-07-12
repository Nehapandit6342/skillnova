import SectionContainer from "@/components/common/SectionContainer";

import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiJsonwebtokens,
  SiPrisma,
  SiGooglegemini,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Express", icon: SiExpress },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "Prisma", icon: SiPrisma },
  { name: "Gemini AI", icon: SiGooglegemini },
];

export default function TrustedSection() {
  return (
    <SectionContainer className="py-14">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Powered By Modern Technologies
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="h-8 w-8 text-slate-700" />
              <span className="text-sm font-medium text-slate-600">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
