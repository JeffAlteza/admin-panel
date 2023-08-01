import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const Dropdown = () => {
  return (
    <div>
      <div className="relative w-10 h-10 bg-slate-400 rounded-full ml-5 flex justify-center items-center text-white">
        <input type="checkbox" id="sortbox" className="absolute hidden" />
        <label for="sortbox" className="flex cursor-pointer items-center space-x-1">
          <UserIcon className=" cursor-pointer h-7 w-7" />
        </label>

        <div
          id="sortboxmenu"
          className="absolute divide-y divide-gray-500/10 right-1 top-full z-10 mt-1 w-52 rounded border border-gray-200 bg-white opacity-0 shadow transition delay-75 ease-in-out"
        >
          <div className="text text-primary p-3 font-semibold ">
            Account Setting
          </div>
          <ul className="block text-gray-900">
            <li>
              <a href="/account/profile" className="block px-3 py-2 hover:bg-gray-200">
                Profile
              </a>
            </li>
            <li>
              <a href="/account/change-password" className="block px-3 py-2 hover:bg-gray-200">
                Change Password
              </a>
            </li>
          </ul>
        <div className="text text-gray-900">
              <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                Logout
              </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
