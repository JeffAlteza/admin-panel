import DataTable from "@/components/table/table";
import React from "react";

const Project = () => {
  return (
    <div className="bg-white py-8 h-screen lg:mx-40 md:mx-20 sm:mx-4">
      <div className="flex flex-col">
        <p className="text font-bold text-4xl">Project</p>
        <p className="text text-md">Project Management</p>
      </div>
      <hr className="my-4" />
      <DataTable />
    </div>
  );
};

export default Project;
