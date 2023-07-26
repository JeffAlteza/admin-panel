"use client"
import DataTable from "@/components/table/table";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Project = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(function (response) {
      setProduct(response.data.products);
    });
  }, []);

  const tableHeaders = ["Title", "Brand", "Description", "Action"]; // Corrected a typo in "Action"

  return (
    <div className="bg-white py-8 h-screen lg:mx-40 md:mx-20 sm:mx-4">
      <div className="flex flex-col">
        <p className="text font-bold text-4xl">Project</p>
        <p className="text text-md">Project Management</p>
      </div>
      <hr className="my-4" />
      <DataTable tableHeader={tableHeaders} tableData={product} /> {/* Use the 'product' state as the tableData */}
    </div>
  );
};

export default Project;
