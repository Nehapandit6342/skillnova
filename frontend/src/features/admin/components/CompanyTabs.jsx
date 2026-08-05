import { useState } from "react";

const tabs = [
  "All Companies",
  "Pending",
  "Verified",
  "Blocked",
];

export default function CompanyTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-3 border-b pb-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}