import Profile from "@/components/profile-components/Profile";
import React from "react";

const ProfilePage = () => {
  const selectedRoute = "profile";

  return <Profile selectedRoute={selectedRoute} />;
};

export default ProfilePage;
