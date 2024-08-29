import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex justify-center p-4 text-sm lg:justify-between">
      {/* Logo Container */}
      <div className="flex space-x-4 items-center font-medium cursor-pointer flex-1 lg:flex-none justify-between">
        <div className="items-center lg:hidden">
          <HamburgerMenuButton />
        </div>
        <div className="flex h-6 w-auto">
          <Logo />
        </div>
        <div className="items-center lg:hidden w-6 h-6">
          <SearchIcon />
        </div>
        <div className="hidden items-center space-x-0.5 lg:flex">
          <span>Find Work</span>
          <FiChevronDown />
        </div>
        <div className="hidden items-center space-x-0.5 lg:flex">
          <span>My Jobs</span>
          <FiChevronDown />
        </div>
        <div className="hidden items-center space-x-0.5 lg:flex">
          <span>Reports</span>
          <FiChevronDown />
        </div>
        <div className="hidden lg:flex">
          <span>Messages</span>
        </div>
      </div>

      {/* Search Container */}
      <div className="hidden items-center lg:flex">
        <div className="flex items-center border-2 border-[#F2F7F2] rounded-full hover:bg-[#F2F7F2] group">
          <div className="flex items-center space-x-1 font-medium rounded-full hover:bg-white py-2 px-4 group/search border-2 border-white group-hover:border-[#F2F7F2] group-hover/search:border-white">
            <div className="w-5 h-5">
              <SearchIcon />
            </div>
            <input
              className="placeholder:text-black group-hover:bg-[#F2F7F2] group-hover/search:bg-white outline-0"
              placeholder="Search"
            ></input>
          </div>
          <div className="group/divider h-5 border-[0.75px] w-0 group-hover:border-[#F2F7F2] group-focus/search:"></div>
          <button className="group/jobs flex items-center space-x-0.5 font-medium rounded-full hover:bg-white py-2 px-4  border-2 border-white group-hover:border-[#F2F7F2] group-hover/jobs:border-white focus:border-[#9AAA97]">
            <span>Jobs</span>
            <FiChevronDown />
          </button>
        </div>
        <button className="w-11 h-11 p-[10px]">
          <HelpIcon />
        </button>
        <button className="w-11 h-11 p-[10px]">
          <ContractsIcon />
        </button>
        <button className="w-11 h-11 p-[10px]">
          <NotificationIcon />
        </button>
        <img
          className="w-14 h-14 p-[10px] rounded-full object-cover"
          src="https://www.upwork.com/profile-portraits/c1qV0NNfhSMG_LZblUhhzJyQoYErEpg50qqwLQe7eFzV5mdrG8CnZBW9VWYroTSI42"
          alt="avatar"
        />
      </div>
    </div>
  );
}

function HamburgerMenuButton({ cssProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const customCss = `flex items-center p-2 ${cssProps}`;

  return (
    <button className={customCss} onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 102 28"
      role="img"
      aria-hidden="true"
    >
      <path
        fill="#14a800"
        d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
      ></path>
      <path
        fill="#14a800"
        d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
      ></path>
      <polygon
        fill="#14a800"
        points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
      ></polygon>
      <path
        fill="#14a800"
        d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
      ></path>
      <path
        fill="#14a800"
        d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
      ></path>
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 24 24"
      role="img"
    >
      <path
        fill="var(--icon-color, #001e00)"
        fill-rule="evenodd"
        d="M11.922 21c.545 0 1.013-.468 1.013-.935 0-.546-.468-.935-1.013-.935-.545 0-.935.467-.935.935-.078.467.39.935.935.935z"
        clip-rule="evenodd"
      ></path>
      <path
        vector-effect="non-scaling-stroke"
        stroke="var(--icon-color, #001e00)"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M6 8.688C6 5.571 8.805 3 12.234 3c3.273 0 6.078 2.182 5.61 4.987-.312 2.104-3.195 3.35-4.52 4.987-1.168 1.48-1.168 2.65-1.324 3.662"
      ></path>
    </svg>
  );
}

function ContractsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 24 24"
      role="img"
    >
      <path
        vector-effect="non-scaling-stroke"
        stroke="var(--icon-color, #001e00)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M15.34 15.999l4.26-2.364c.533-.272.533-1.181 0-1.454L3 3l2.13 17.271c.09.545.71.909 1.155.636l4.616-2.545"
      ></path>
      <path
        vector-effect="non-scaling-stroke"
        stroke="var(--icon-color, #001e00)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M10.9 18.362l2.753 2.09c.532.364 1.243.092 1.331-.636l.355-3.908L3 3l7.9 15.362z"
      ></path>
    </svg>
  );
}

function NotificationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 24 24"
      role="img"
    >
      <path
        vector-effect="non-scaling-stroke"
        stroke="var(--icon-color, #001e00)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M19.273 17.564l-1.359-2.209c-.08-.082-.08-.245-.08-.327v-4.99c0-2.946-2.397-5.4-5.274-5.4h-.72c-2.877 0-5.274 2.372-5.274 5.4v5.072c0 .163 0 .245-.08.327l-1.359 2.045c-.32.41 0 1.064.56 1.064h13.027c.559.082.879-.491.559-.982z"
        clip-rule="evenodd"
      ></path>
      <path
        vector-effect="non-scaling-stroke"
        stroke="var(--icon-color, #001e00)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M12.16 4.636V3M9.842 18.628c0 1.308 1.04 2.372 2.318 2.372 1.279 0 2.318-1.064 2.318-2.372"
      ></path>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 24 24"
      role="img"
    >
      <path
        vector-effect="non-scaling-stroke"
        stroke="var(--icon-color, #001e00)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M10.688 18.377a7.688 7.688 0 100-15.377 7.688 7.688 0 000 15.377zm5.428-2.261L21 21"
      ></path>
    </svg>
  );
}
export default Navbar;
