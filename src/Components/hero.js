import React from "react";
import logo from "../images/Sitting.png";

function hero() {
  return (
    <>
      <div id="home" className="flex flex-row justify-between bg-blue-300">
        <div className="flex flex-col py-16 mx-24">
          <h2 className="py-2 text-4xl font-semibold text-blue-900">
            Hello, I'm
          </h2>
          <h2 className="py-2 text-4xl font-semibold text-blue-900">
            Adarsh Mishra
          </h2>
          <h2 className="py-2 text-4xl font-semibold text-blue-600">
            I am a Frontend Developer
          </h2>
          <p className="w-2/3 my-2 text-lg text-black">
            A dedicated software developer with a burning passion for crafting
            extraordinary software and applications that make a positive impact
            on people's lives worldwide. My journey in the world of code is
            driven by one simple mantra: "Write code to build useful stuff!"
          </p>
          <button className="bg-slate-800 w-40 p-3 my-4 mx-1 font-semibold rounded-lg hover:bg-blue-400 hover:opacity-80 hover:text-black text-white">
            <a href="https://drive.google.com/file/d/1bGFdjWVguHYPdWOBG6-X9DdFSHgLfnbk/view">
              Download Resume
            </a>
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
