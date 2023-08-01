import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const DataTable = ({ tableHeader, tableData }) => {
  const TableHeader = (title, index) => (
    <th
      key={index}
      scope="col"
      className="px-4 py-3.5 text-left text-sm font-medium text-gray-900 rtl:text-right "
    >
      <span>{title}</span>
    </th>
  );

  return (
    <div>
      <section className="container mx-auto px-4 pb-6">
        {/* <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="relative mt-4 flex items-center md:mt-0">
            <MagnifyingGlassIcon className="text-white bg-white"/>

            <input
              type="text"
              placeholder="Search"
              className="block w-full rounded-lg border border-gray-400 bg-white py-1.5 pl-11 pr-5 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 rtl:pl-5 rtl:pr-11 md:w-80"
            />
          </div>
        </div> */}

        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle overflow-x-hidden">
              <div className="overflow-hidden border border-gray-400 rounded-lg">
                <table className="w-full divide-y divide-gray-400">
                  <thead className="bg-slate-100">
                    <tr>
                      {tableHeader.map((tableHeaders, index) =>
                        TableHeader(tableHeaders, index)
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-400 bg-white">
                    {tableData}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-gray-700 ">
            Page <span className="font-medium text-gray-700">1 of 10</span>
          </div>

          <div className="mt-4 flex items-center gap-x-4 sm:mt-0">
            <a
              href="#"
              className="flex w-1/2 items-center justify-center gap-x-2 duration-200 bg-white border-primary border hover:bg-primary_darker hover:text-white text-primary font-semibold py-2 px-4 rounded-md sm:w-auto"
            >
              <ArrowLeftIcon className="w-4 h-4" />

              <span> Previous </span>
            </a>

            <a
              href="#"
              className="flex w-1/2 items-center justify-center gap-x-2 duration-200 bg-white border-primary border hover:bg-primary_darker hover:text-white text-primary font-semibold py-2 px-4 rounded-md sm:w-auto"
            >
              <span> Next </span>

              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataTable;
