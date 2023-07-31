import Profile from "@/components/account-components/Profile";
import React from "react";

const ProfilePage = () => {
  const selectedRoute = "profile";

  return <Profile selectedRoute={selectedRoute} />;
};

export default ProfilePage;
