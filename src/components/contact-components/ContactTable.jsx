"use client";
import { UserIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "../table";

const ContactTable = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(function (response) {
      setContact(response.data.products);
    });
  }, []);

  const tableHeaders = ["Icon", "Name", "Link", "Action"];

  const TableDatas = (data, index) => (
    <tr key={index} className="hover:bg-slate-100">
      <td className="whitespace-nowrap px-4 py-4">
        <div className="ml-2 w-10 h-10 text-gray-800 rounded-full  bg-indigo-400">
          <UserIcon className="text-white"/>
        </div>
      </td>
      <td className="whitespace-nowrap text-sm font-medium">
        <div className="inline gap-x-2  px-3 py-1 text-sm font-normal">
          {data.title}
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-4 max-w-xs">
        <div className="truncate">
          <h4 className="text-gray-700">{data.description}</h4>
        </div>
      </td>

      <td className="whitespace-nowrap px-4 py-4 text-sm flex justify-center">
        <a href={`contact/update-contact/${data.id}`}>
          <button className="flex rounded-lg px-4 py-2 gap-2 font-semibold text-white transition-colors duration-200 bg-primary hover:bg-primary_darker">
            Update
          </button>
        </a>
      </td>
    </tr>
  );

  const tableData = contact.map((contact, index) => TableDatas(contact, index));

  return <DataTable tableHeader={tableHeaders} tableData={tableData} />;
};

export default ContactTable;
