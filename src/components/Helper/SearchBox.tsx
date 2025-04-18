import React from "react";
import { FaCalendarWeek, FaMap } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]">
      <div className="flex items-center space-x-6">
        <FaMap className="size-6 text-blue-500" />
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-lg font-medium ">Location</p>
            <p className="text-base font-normal">where are you going?</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="size-6 text-blue-500" />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium ">Start Date </p>
          <input type="date" className="outline-none border-none  text-base" />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="size-6 text-blue-500" />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium ">End Date </p>
          <input type="date" className="outline-none border-none  text-base" />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <FaUserGroup className="size-6 text-blue-500" />
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-lg font-medium ">Guest</p>
            <p className="text-base font-normal">1 Guest 1 Room</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
