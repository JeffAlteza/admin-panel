import React from "react";

const UpdateEmail = () => {
  return (
    <div className="flex items-center justify-center bg-slate-200 py-10 h-screen -mt-20">
      <div className="max-w-md overflow-hidden rounded-lg bg-white shadow-lg mx-2">
        <div className="px-6 py-6">
          <div className="mb-2 text-xl font-bold">
            <p className="text-black font-bold text-lg" >Update your email</p>
            </div>
          <p className="text-base text-gray-500">
            Change the email address you want associated with your account.
          </p>
        </div>
        <div className="mx-auto flex flex-wrap justify-end space-x-2 px-6 pb-4">
          <input
            type="text"
            name="email"
            id="email"
            className="mb-2 block flex-1 rounded-lg border border-gray-500 py-1.5 pl-1 placeholder-slate-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Enter email address"
          />
          <button className="h-9 w-28 rounded-lg bg-indigo-500 font-bold text-white hover:bg-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmail;
