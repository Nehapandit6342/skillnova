import { useState } from "react";

import CompanyTable from "../components/CompanyTable";
import CompanyTabs from "../components/CompanyTabs";


export default function Companies() {

  const [activeTab, setActiveTab] = useState("All Companies");


  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Companies
        </h1>

        <p className="text-slate-500 mt-1">
          Manage registered companies and verify employers.
        </p>
      </div>


      <CompanyTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />


      <CompanyTable 
        status={activeTab}
      />

    </div>
  );
}