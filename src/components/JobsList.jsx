import React from "react";
import JobCard from "./JobCard";

function JobsList() {
  return (
    <div className="font-sans rounded-2xl border">
      <header className="px-8 pt-4 border-b">
        <h1 className="text-xl font-medium pb-4">Jobs you might like</h1>
        <div className="flex flex-row text-sm font-medium text-[#5E6D55] pb-2">
          <button className="px-4 pl-0 hover:text-black">Best Matches</button>
          <button className="px-4 hover:text-black ">Most Recent</button>
          <button className="px-4 hover:text-black ">Saved Jobs</button>
        </div>
      </header>
      <p className="px-8 py-4 text-[14px]">
        Browse the most recent jobs that match your skills and profile
        description to the skills clients are looking for.
      </p>
      <div className="p-8 border-b hover:bg-[#F2F7F2] cursor-pointer">
        <JobCard
          title={"Frontend developer for React App with skills in Tailwind CSS"}
          description={
            "I need a frontend developer to build a React App with skills in Tailwind CSS. This website consists of only one webpage."
          }
        />
      </div>
      <div className="p-8 hover:bg-[#F2F7F2] cursor-pointer rounded-b-2xl">
        <JobCard
          title={"Frontend developer for React App with skills in Tailwind CSS"}
          description={
            "I need a frontend developer to build a React App with skills in Tailwind CSS. This website consists of only one webpage."
          }
        />
      </div>
    </div>
  );
}

export default JobsList;
