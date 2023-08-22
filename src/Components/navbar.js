import React from "react";
// import footer from "./footer";
// import hero from "./hero";
// import about from "./about";
// import projects from "./projects";

function navbar() {
  return (
    <>
      <div className="flex justify-start py-4 bg-slate-800 text-white gap-32">
        <span>
          <a href="/" className="ml-8 mr-32 text-xl font-bold">
            My Portfolio
          </a>
        </span>
        <span>
          <a href="/">Home</a>
        </span>
        <span>
          <a href="/">About</a>
        </span>
        <span>
          <a href="/">Projects</a>
        </span>
        <span>
          <a href="/">Contact me</a>
        </span>
        <span>
          <a href="/" className="ml-28">
            logo
          </a>
        </span>
      </div>
    </>
  );
}
export default navbar;
