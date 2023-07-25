import { PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const ViewHeader = () => {
  return (
    <form className="border border-b p-4 rounded-md shadow-sm">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">
          Banner Image
        </label>

        <div class="flex items-center justify-center">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-b rounded-lg cursor-pointer bg-gray-100 "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
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
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Enter Title"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium"> Description </label>
        <textarea
          type="description"
          id="description"
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Enter description"
          disabled
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary hover:bg-primary_darker text-white font-semibold py-2 px-4 rounded-md"
        >
          <Link href="/header/edit-header">Edit</Link>
        </button>
      </div>
    </form>
  );
};

export default ViewHeader;