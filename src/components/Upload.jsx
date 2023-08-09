"use client";
import { ArrowUpTrayIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

const Upload = ({src_image}) => {
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
        {src_image ? (
          <div className="w-full h-full p-3">
            <Image
              src={src_image}
              alt="Uploaded"
              width={100}
              height={100}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        ) : selectedImage ? (
          <div className="w-full h-full p-3">
            <Image
              src= {selectedImage}
              alt="Uploaded"
              width={100}
              height={100}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <PhotoIcon className="w-10 h-10 mb-4 text-primary" />
            <p className="mb-2 text-sm text-gray-800">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
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
