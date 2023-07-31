import React from "react";
import Link from "next/link";
import ProfileContent from "./ProfileContent";
import ChangePassword from "./ChangePassword";

const Profile = ({ selectedRoute }) => {
  return (
    <div className="bg-white py-8 h-screen">
      <div className="lg:mx-40 md:mx-20 sm:mx-4">
        <div className="flex flex-col">
          <p className="text font-bold text-4xl">Account</p>
          <p className="text text-md text-gray-700">
            Manage your account settings and change password
          </p>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col lg:flex-row gap-2">
        
          <div className="flex lg:flex-col md:flex-row sm:flex-row lg:h-20 md:h-10 w-80 px-1 gap-2">
            <Link href="/account/profile">
              <div
                className={`px-4 py-2 rounded-lg ${
                  selectedRoute === "profile"
                    ? "bg-primary_lighter text-white"
                    : "hover:bg-slate-100"
                }`}
              >
                <p className="text text-md font-semibold">Profile</p>
              </div>
            </Link>
            <Link href="/account/change-password">
              <div
                className={`px-4 py-2 rounded-lg ${
                  selectedRoute === "change-password"
                    ? "bg-primary_lighter text-white"
                    : "hover:bg-slate-100"
                }`}
              >
                <p className="text text-md font-semibold">Change Password</p>
              </div>
            </Link>
          </div>

          <div className="h-screen w-full rounded-lg p2 overflow-hidden">
            {selectedRoute === "profile" ? (
              <div className="lg:block md:block sm:block">
                <ProfileContent />
              </div>
            ) : selectedRoute === "change-password" ? (
              <div className="lg:block md:block sm:block">
                <ChangePassword />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
