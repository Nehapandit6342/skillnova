import { Badge } from "@/components/ui/badge";

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <div className={`mb-16 ${center ? "text-center" : "text-left"}`}>
      {badge && (
        <Badge
          variant="secondary"
          className="mb-4 rounded-full px-4 py-1 text-sm"
        >
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
