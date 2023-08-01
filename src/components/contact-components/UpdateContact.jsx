import React from 'react'
import Upload from '../upload'

const UpdateContact = () => {
    return (
        <form className="border border-gray-400 border-b p-4 rounded-md shadow-sm">
          <div className="text text-xl font-semibold">Update Social</div>
          <hr className="my-4 border-gray-300" />
          <div className="mb-4">
          <label className="block text-gray-700 font-medium"> Icon </label>
            <Upload />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium"> Name </label>
            <input
              type="text"
              id="title"
              className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              placeholder="Enter Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium"> Link </label>
            <input
              type="text"
              id="link"
              className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              placeholder="Enter Url"
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
      )
}

export default UpdateContact