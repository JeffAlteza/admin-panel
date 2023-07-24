import HeaderComponent from "@/components/header/header";
import React from "react";

const ViewHeader = () => {
  const selectedRoute = "view-header"; 

  return <HeaderComponent selectedRoute={selectedRoute} />;
};

export default ViewHeader;