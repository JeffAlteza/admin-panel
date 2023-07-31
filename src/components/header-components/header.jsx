"use client";
import React, { useEffect } from "react";
import EditHeader from "./EditHeader";
import ViewHeader from "./ViewHeader";

const HeaderComponent = ({ selectedRoute }) => {
   useEffect(()=>{
    const getData = async ()=>{
      const query = await fetch('https://dummyjson.com/products');
      const response = await query.json();
      console.log('date:', response)
    }
    getData();
  },[])

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
            <ViewHeader />
          </div>
        ) : null}
      </div>
      
    </div>
  );
};

export default HeaderComponent;
