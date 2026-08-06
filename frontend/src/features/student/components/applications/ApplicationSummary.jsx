import { FileText, Clock, Eye, CheckCircle, XCircle } from "lucide-react";

const cards = [
  {
    key: "total",
    title: "Total",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    key: "pending",
    title: "Pending",
    icon: Clock,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    key: "reviewing",
    title: "Reviewing",
    icon: Eye,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    key: "accepted",
    title: "Accepted",
    icon: CheckCircle,
    color: "bg-green-100 text-green-600",
  },
  {
    key: "rejected",
    title: "Rejected",
    icon: XCircle,
    color: "bg-red-100 text-red-600",
  },
];

export default function ApplicationSummary({ summary }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.key}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{card.title}</p>

                <h3 className="mt-2 text-2xl font-bold">
                  {summary?.[card.key] ?? 0}
                </h3>
              </div>

              <div className={`rounded-full p-3 ${card.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
