import Profile from "@/components/profile-components/Profile";
import React from "react";

const page = () => {
  const selectedRoute = "change-password";

  return <Profile selectedRoute={selectedRoute} />;
};

export default page;
