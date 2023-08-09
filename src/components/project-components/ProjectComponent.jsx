import ViewProject from "@/app/project/view-project/page";
import React from "react";
import ProjectTable from "./ProjectTable";
import UpdateProject from "./UpdateProject";

const ProjectComponent = ({ selectedRoute }) => {
  return (
    <div className="bg-white py-8 h-screen lg:mx-40 md:mx-20 sm:mx-4">
      <div className="flex flex-col">
        <p className="text font-bold text-4xl">Project</p>
        <p className="text text-md">Project Management</p>
      </div>
      <hr className="my-4" />
      <div className="h-screen w-full rounded-lg">
        {selectedRoute === "project" ? (
          <div className="lg:block md:block sm:block">
            <ProjectTable />
          </div>
        ) : selectedRoute === "update-project" ? (
          <div className="lg:block md:block sm:block">
            <UpdateProject id={1}/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectComponent;
