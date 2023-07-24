import React from "react";
import EditHeader from "./EditHeader";

const HeaderComponent = ({ selectedRoute }) => {
  return (
    <div className="lg:mx-40 md:mx-20 sm:mx-4 bg-white py-8 h-screen">
      <div className="flex flex-col">
        <p className="text font-bold text-4xl">Header</p>
        <p className="text text-md">Management of Header Section</p>
      </div>
      <hr className="my-4" />

      <div className="h-screen w-full rounded-lg">
        {selectedRoute === "edit-header" ? (
          <div className="lg:block md:block sm:block">
            <EditHeader />
          </div>
        ) : selectedRoute === "view-header" ? (
          <div className="lg:block md:block sm:block">
            <EditHeader />
          </div>
        ) : null}
      </div>
      
    </div>
  );
};

export default HeaderComponent;
