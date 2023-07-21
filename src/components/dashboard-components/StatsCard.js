import React from "react";

const StatsCard = () => {
  return (
    <div className="bg-card text-card-foreground rounded-xl border shadow bg-white">
      <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
      <h3 className="text-sm font-medium tracking-tight text-primary_darker">Total Revenue</h3>
    </div>
    <div className="p-6 pt-0">
      <div className="text-2xl font-bold ">$45,231.89</div>
      <p className="text-muted-foreground text-xs">+20.1% from last month</p>
    </div>
    </div>
  );
};

export default StatsCard;
