import React from "react";
import { FiChevronRight } from "react-icons/fi";

function OptionsCard() {
  return (
    <div className="font-sans rounded-2xl border h-fit w-1/4 hidden lg:flex flex-col">
      <div className="flex items-center justify-between p-4 px-6 font-medium border-b rounded-t-2xl hover:bg-[#F2F7F2] cursor-pointer">
        <p className="flex-1">Upwork Academy</p>
        <FiChevronRight />
      </div>
      <div className="flex items-center justify-between p-4 px-6 font-medium border-b hover:bg-[#F2F7F2] cursor-pointer">
        <p className="flex-1">Direct Contracts</p>
        <FiChevronRight />
      </div>
      <div className="flex items-center justify-between p-4 px-6 font-medium border-b hover:bg-[#F2F7F2] cursor-pointer">
        <p className="flex-1">Get Paid</p>
        <FiChevronRight />
      </div>
      <div className="flex items-center justify-between p-4 px-6 font-medium border-b hover:bg-[#F2F7F2] cursor-pointer">
        <p className="flex-1">Community&Forums</p>
        <FiChevronRight />
      </div>
      <div className="flex items-center justify-between p-4 px-6 font-medium hover:bg-[#F2F7F2] cursor-pointer rounded-b-2xl">
        <p className="flex-1">Help Center</p>
        <FiChevronRight />
      </div>
    </div>
  );
}

export default OptionsCard;
