import { PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const ViewHeader = () => {
  return (
    <form className="border border-gray-400 border-b p-4 rounded-md shadow-sm">
      <div className="text text-xl font-semibold">View Header</div>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Banner Image</label>

        <div className="flex items-center justify-center">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border border-gray-400 border-b rounded-lg cursor-pointer bg-gray-100 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <PhotoIcon className="w-20 h-20 text-primary" />
            </div>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium"> Title </label>
        <input
          type="text"
          id="title"
          className="mt-1 p-2 border border-gray-400 rounded-md w-full"
          placeholder="Enter Title"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium"> Description </label>
        <textarea
          type="description"
          id="description"
          className="mt-1 p-2 border border-gray-400 rounded-md w-full"
          placeholder="Enter description"
          disabled
        />
      </div>
      <div className="flex justify-end">
        <Link href="/header/edit-header">
          <button className="bg-primary hover:bg-primary_darker text-white font-semibold py-2 px-4 rounded-md">
            Edit
          </button>
        </Link>
      </div>
    </form>
  );
};

export default ViewHeader;
