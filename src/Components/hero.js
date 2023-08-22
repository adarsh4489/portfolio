import React from "react";
import logo from "../images/Sitting.png";

function hero() {
  return (
    <>
      <div className="flex flex-row justify-between bg-blue-300">
        <div className="flex flex-col py-16 mx-24">
          <h2 className="py-2 text-4xl font-semibold text-yellow-400">
            Hello, I'm
          </h2>
          <h2 className="py-2 text-4xl font-semibold text-red-200">
            Adarsh Mishra
          </h2>
          <h2 className="py-2 text-4xl font-semibold text-blue-600">
            I am a Frontend Developer
          </h2>
          <p className="w-2/3 my-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            quisquam, necessitatibus culpa quo suscipit nostrum, minima, saepe
            obcaecati quae est repudiandae facere iure tempora incidunt
            accusantium officia dolores quas inventore?
          </p>
          <button className="bg-slate-900 w-40 p-3 my-4 mx-1 rounded-lg text-white">
            <a href="/">Download Resume</a>
          </button>
        </div>

        <div className="flex pt-16 justify-start pl-16  pr-40 bg-blue-900 rounded-l-full">
          <img src={logo} className="w-96 h-80  mr-56 " alt="profile" />
        </div>
      </div>
    </>
  );
}
export default hero;
