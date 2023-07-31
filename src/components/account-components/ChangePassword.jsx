"use client"
import React, { useState } from "react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Handle password change logic here
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);

    // Reset form fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrorMessage("");
  };

  return (
    <div className="bg-white p-8 border border-gray-400 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-400 rounded-md w-full"
            placeholder="Enter your current password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-400 rounded-md w-full"
            placeholder="Enter your new password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-400 rounded-md w-full"
            placeholder="Confirm your new password"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary hover:bg-primary_darker text-white font-semibold py-2 px-4 rounded-md"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
