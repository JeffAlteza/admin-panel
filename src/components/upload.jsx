"use client"
import { ArrowUpTrayIcon, PhotoIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
      >
        {selectedImage ? (
          <div className="w-full h-full p-3">
            <img
              src={selectedImage}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <PhotoIcon className="w-10 h-10 mb-4 text-primary"/>
            <p className="mb-2 text-sm text-gray-800">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-primary_lighter">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
        )}
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export default Upload;
