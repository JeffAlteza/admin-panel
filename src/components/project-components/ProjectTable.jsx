"use client";

import React, { useEffect, useState } from "react";
import DataTable from "../DataTable";
import PRODUCTAPI from "../../../lib/api/productApi";
import { useRouter } from 'next/navigation';

const ProjectTable = () => {
  const router = useRouter();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await PRODUCTAPI.getProducts();
      setProduct(res);
    };
    getAllProducts();
  }, []);

  const tableHeaders = ["Title", "Description", "Tech Stack", "Action"];

  const TableDatas = (data, index) => (
    <tr key={index} className="hover:bg-slate-100">
      <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
        <div>
          <h2 className="font-medium text-gray-800">{data.title}</h2>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-4 max-w-xs">
        <div className="truncate">
          <h4 className="text-gray-700">{data.description}</h4>
        </div>
      </td>

      <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
        <div className="flex gap-x-2">
          {(() => {
            try {
              const techStackArray = JSON.parse(data.tech_stack);

              return techStackArray.map((tech, index) => (
                <div
                  key={index}
                  className="inline gap-x-2 rounded-full bg-indigo-400 px-3 py-1 text-sm font-normal text-white"
                >
                  {tech}
                </div>
              ));
            } catch (error) {
              console.error("Error parsing tech stack JSON:", error);
              return <p>Error parsing tech stack data.</p>;
            }
          })()}
        </div>
      </td>

      <td className="whitespace-nowrap px-4 py-4 text-sm flex justify-center">
          <button className="flex rounded-lg px-4 py-2 gap-2 font-semibold text-white transition-colors duration-200 bg-primary hover:bg-primary_darker" onClick={() => router.push(`/project/update-project/${data.id}`)}>
            Update
          </button>
      </td>
    </tr>
  );

  const tableData = product.map((product, index) => TableDatas(product, index));
  return <DataTable tableHeader={tableHeaders} tableData={tableData} />;
};

export default ProjectTable;
