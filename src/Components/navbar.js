import React from "react";

function navbar() {
  return (
    <>
      <div className="flex justify-start py-4 bg-slate-800 text-white font-bold gap-28 ">
        <span>
          <a href="/" className="ml-8 mr-32 text-xl font-bold">
            My Portfolio
          </a>
        </span>
        <span className="px-2 hover:bg-white hover:rounded-lg hover:text-blue-900 ">
          <a href="#home">Home</a>
        </span>
        <span className="px-2 hover:bg-white hover:rounded-lg hover:text-blue-900 ">
          <a href="#about">About</a>
        </span>
        <span className="px-2 hover:bg-white hover:rounded-lg hover:text-blue-900 ">
          <a href="#project">Projects</a>
        </span>
        <span className="px-2 hover:bg-white hover:rounded-lg hover:text-blue-900 ">
          <a href="#footer">Contact me</a>
        </span>
        <span className="px-2 hover:bg-white hover:rounded-lg hover:text-blue-900 ml-24 ">
          <a
            href="https://drive.google.com/file/d/1bGFdjWVguHYPdWOBG6-X9DdFSHgLfnbk/view?usp=sharing"
            
          >
            Resume
          </a>
        </span>
      </div>
    </>
  );
}
export default navbar;
