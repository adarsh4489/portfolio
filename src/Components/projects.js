import React from "react";
import Card from "../Components/card";

function projects() {
  return (
    <div id="project" className="bg-blue-300 py-8">
      <h2 className="text-center text-3xl font-bold">Projects</h2>
      <div className="flex flex-row gap-8 mx-6 my-6">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="text-center my-4">
        <a href="https://github.com/adarsh4489">
          <button className="text-center py-2 px-6 rounded-lg text-white text-lg bg-blue-800 ">
            More
          </button>
          <p className="text-sm">For more projects visit my GitHub page</p>
        </a>
      </div>
    </div>
  );
}
export default projects;
