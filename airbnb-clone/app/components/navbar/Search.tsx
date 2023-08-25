"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

const Search: React.FC = () => {
  return (
    <div className="flex flex-row items-center border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="px-6">any Where</div>
      <div className="px-6 border-x-[1px]">Any Week</div>
      <div className="pl-6 pr-2 flex gap-2 items-center">
        Add Guest
        <span className=" h-[30px] w-[30px] bg-rose-600 rounded-full flex items-center justify-center">
          <BiSearch size={18} className=" text-white" />
        </span>
      </div>
    </div>
  );
};

export default Search;
