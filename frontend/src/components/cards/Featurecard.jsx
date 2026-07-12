export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>

      <p className="leading-7 text-slate-600">{description}</p>
    </div>
  );
}
