"use"
import React from 'react'
import MultiSelect from '../MultiSelect'
import Upload from '../upload'

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const UpdateProject = () => {
  return (
    <form className="border border-gray-400 border-b p-4 rounded-md shadow-sm">
      <div className="text text-xl font-semibold">Update Project</div>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4">
      <label className="block text-gray-700 font-medium"> Banner Image </label>
        <Upload />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium"> Title </label>
        <input
          type="text"
          id="title"
          className="mt-1 p-2 border border-gray-400 rounded-md w-full"
          placeholder="Enter Title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium"> Description </label>
        <textarea
          type="description"
          id="description"
          className="mt-1 p-2 border border-gray-400 rounded-md w-full"
          placeholder="Enter description"
        />
      </div>
      <div className="mb-4">
      <label className="block text-gray-700 font-medium"> Tech Stack</label>

        <MultiSelect options={options}/>
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

export default UpdateProject