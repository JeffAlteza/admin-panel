import React from "react";

const StatsCard = () => {
  return (
    <div className="bg-card text-card-foreground rounded-xl border shadow bg-white">
      <div class="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
      <h3 class="text-sm font-medium tracking-tight text-primary_darker">Total Revenue</h3>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-muted-foreground h-4 w-4"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    </div>
    <div class="p-6 pt-0">
      <div class="text-2xl font-bold ">$45,231.89</div>
      <p class="text-muted-foreground text-xs">+20.1% from last month</p>
    </div>
    </div>
  );
};

export default StatsCard;
