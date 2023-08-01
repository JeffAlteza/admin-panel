"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from '../DataTable';

const ProjectTable = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      axios.get("https://dummyjson.com/products").then(function (response) {
        setProduct(response.data.products);
      });
    }, []);
  
    const tableHeaders = ["Title", "Brand", "Description", "Action"];
  
    const TableDatas = (data, index) => (
      <tr key={index} className="hover:bg-slate-100">
        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
          <div>
            <h2 className="font-medium text-gray-800">{data.title}</h2>
          </div>
        </td>
        <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
          <div className="inline gap-x-2 rounded-full bg-indigo-400 px-3 py-1 text-sm font-normal text-white">
            {data.brand}
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-4 max-w-xs">
          <div className="truncate">
            <h4 className="text-gray-700">{data.description}</h4>
          </div>
        </td>
    
        <td className="whitespace-nowrap px-4 py-4 text-sm flex justify-center">
          <a href={`project/update-project/${data.id}`}>
          <button className="flex rounded-lg px-4 py-2 gap-2 font-semibold text-white transition-colors duration-200 bg-primary hover:bg-primary_darker">
            Update
          </button>
          </a>
        </td>
      </tr>
    );
  
    const tableData = product.map((product, index) => TableDatas(product, index));
  
    return (
        <DataTable tableHeader={tableHeaders} tableData={tableData} />
    );
}

export default ProjectTable