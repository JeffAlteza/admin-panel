import StatsCard from "@/components/dashboard-components/StatsCard";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-w-screen mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3overflow-hidden">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
    </div>
  );
};

export default Dashboard;
