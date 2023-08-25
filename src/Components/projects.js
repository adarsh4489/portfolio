import React from "react";
import Card from "../Components/card";

function projects() {
  return (
    <div id="project" className="bg-blue-300 py-8">
      <h2 className="text-center text-3xl font-bold">Projects</h2>
      <div className="flex flex-row gap-8 mx-6 my-6">
        <Card
          heading="BookMania"
          description="A book review website where we can see books along with description
        developed using Html Css and bootstrap  "
          githubLink="https://github.com/adarsh4489"
          livelink="https://github.com/adarsh4489"
        />
        <Card
          heading="Microsoft-clone"
          description="Developed a responsive home page of microsoft website using tailwind css."
          githubLink="https://github.com/adarsh4489"
          livelink="https://github.com/adarsh4489"
        />
        <Card
          heading="Weather page"
          description=" A Weather page where we can check temperature, humidity, wind speed and many more .
          Used open weather map API in this mini project"
          githubLink="https://github.com/adarsh4489/weather-page"
          livelink="https://weather-app-by-ad.netlify.app/"
        />
      </div>
      <div className="text-center my-4">
        <a href="https://github.com/adarsh4489">
          <button className="text-center py-2 px-6 rounded-lg font-bold  hover:bg-blue-600 hover:opacity-80 hover:text-black text-white text-lg bg-blue-800 ">
            More
          </button>
          <p className="text-sm">For more projects visit my GitHub page</p>
        </a>
      </div>
    </div>
  );
}
export default projects;
