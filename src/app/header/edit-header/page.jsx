import HeaderComponent from "@/components/header-components/header";
import React from "react";

const page = () => {
  const selectedRoute = "edit-header";

  return <HeaderComponent selectedRoute={selectedRoute} />;
};

export default page;