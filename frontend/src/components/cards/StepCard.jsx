import { ArrowRight } from "lucide-react";

export default function StepCard({
  icon: Icon,
  title,
  description,
  showArrow = true,
}) {
  return (
    <div className="flex items-center">
      <div className="group w-44 rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="font-semibold text-slate-900">{title}</h3>

        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </div>

      {showArrow && (
        <ArrowRight className="mx-4 hidden text-slate-400 lg:block" />
      )}
    </div>
  );
}
