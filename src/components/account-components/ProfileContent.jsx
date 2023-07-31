import React from "react";

const ProfileContent = () => {
  return (
    <div className="bg-white p-8 rounded-md text-black border shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Address
          </label>
          <textarea
            id="address"
            className="mt-1 p-2 border rounded-md w-full"
            rows="4"
            placeholder="Enter your address"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary hover:bg-primary_darker text-white font-semibold py-2 px-4 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileContent;
