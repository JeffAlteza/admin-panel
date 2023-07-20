import StatsCard from "@/components/dashboard-components/StatsCard";
import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-white py-8 h-screen">
      <div className="lg:mx-40 md:mx-20 sm:mx-4">
        <div className="flex flex-col">
          <p className="text font-bold text-4xl">Dashboard</p>
          <p className="text text-md">Statistical Analysis</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
