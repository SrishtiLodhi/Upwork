import React from "react";
import { GoVerified } from "react-icons/go";

function JobCard({ title, description }) {
  return (
    <div className="flex flex-col">
      {/* Title Row */}
      <div className="flex flex-row items-center space-x-2">
        <p className="flex-1 font-medium text-md pr-8">{title}</p>
        <div className="border-2 rounded-full">
          <div className="rounded-full w-[14px] h-[14px] m-2">
            <ThumbsDown />
          </div>
        </div>
        <div className="border-2 rounded-full">
          <div className="rounded-full w-[14px] h-[14px] m-2">
            <HeartEmoji />
          </div>
        </div>
      </div>

      {/* Price and Time Row */}
      <div className="flex">
        <p className="font-medium text-xs text-[#5E6D55]">
          Fixed-Price
          <span className="text-xs font-normal text-gray-500">
            {" "}
            - Posted 1 hr ago
          </span>
        </p>
      </div>

      {/* Pricing Row */}
      <div className="flex items-center mt-2">
        <div className="flex flex-col w-1/2">
          <p className="font-medium text-sm">$100</p>
          <p className="text-xs text-gray-500">Budget</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-sm">Entry level</p>
          <p className="text-xs text-gray-500">Experience Level</p>
        </div>
      </div>

      {/* Description Row */}
      <div className="text-sm font-normal mt-6">{description}</div>

      {/* Topics Row */}
      <div className="flex space-x-1 text-xs my-4">
        <p className="rounded-full text-gray-500 bg-[#E3EBE4] p-1 px-2">
          React Native
        </p>
        <p className="rounded-full text-gray-500 bg-[#E3EBE4] p-1 px-2">
          Web Design
        </p>
        <p className="rounded-full text-gray-500 bg-[#E3EBE4] p-1 px-2">CSS</p>
      </div>

      {/* Payment Row */}
      <div className="flex items-center text-xs space-x-1">
        <GoVerified fill="#2057C3" />
        <p className="text-[#5E6D55] font-medium pr-2">Payment Verified</p>
        <p className="text-gray-500">
          <span className="text-black font-medium">$90+ </span>spent
        </p>
      </div>
    </div>
  );
}

function ThumbsDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 14 14"
      role="img"
    >
      <path
        fill-rule="evenodd"
        d="M3.237 1.368h5.896v5.375c0 .185-.097.552-.2.757l-2.564 2.802c-.205.22-.317.508-.317.81v1.35c-.35-.274-.946-1.057-.215-2.974a1.2 1.2 0 00-1.115-1.624H1.54l1.697-6.496zM.15 8.948c.142.183.36.284.614.284H4.48c-1.194 3.422.965 4.492 1.22 4.605a1.946 1.946 0 001.629-.033.177.177 0 00.09-.152l.002-2.475s2.577-2.79 2.587-2.79h3.78c.116 0 .21-.078.21-.172V.172c0-.094-.095-.17-.21-.17L3.085 0C2.59 0 2.08.404 1.947.903L.032 8.243a.805.805 0 00.12.706z"
      ></path>
    </svg>
  );
}

function HeartEmoji() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 14 14"
      role="img"
    >
      <path
        fill-rule="evenodd"
        d="M3.938 1.683c-1.206 0-2.188.999-2.188 2.227 0 .487.153.95.441 1.339l4.81 5.996 4.829-6.021c.268-.364.421-.827.421-1.314 0-1.228-.982-2.227-2.188-2.227-1.206 0-2.187.999-2.187 2.227h-1.75c0-1.228-.982-2.227-2.188-2.227zM7.001 14L.785 6.252A3.888 3.888 0 010 3.91C0 1.754 1.767 0 3.938 0c1.236 0 2.34.568 3.063 1.455A3.94 3.94 0 0110.063 0c2.171 0 3.938 1.754 3.938 3.91 0 .839-.265 1.641-.766 2.316L7.001 14z"
      ></path>
    </svg>
  );
}

export default JobCard;
