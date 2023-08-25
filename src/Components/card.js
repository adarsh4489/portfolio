import React from "react";

function card({ heading, description, githubLink, livelink}) {
 
  return (
    <>
      <div className="flex flex-1 flex-col text-center p-2 bg-blue-900 rounded-xl py-8 opacity-90 hover:bg-opacity-60">
        <h2 className="text-3xl font-bold text-green-300"> {heading}</h2>

        <p className="text-lg py-2  text-white">{description}</p>
        <div className=" flex gap-4 my-2 justify-center">
          <a href={githubLink}>
            <button className="hover:bg-white hover:rounded-lg hover:text-blue-900 text-center py-2 px-6 rounded-lg text-black  text-lg bg-emerald-600 font-bold">
              Code
            </button>
          </a>
          <a href={livelink}>
            <button className="hover:bg-white hover:rounded-lg hover:text-blue-900 text-center py-2 px-6 rounded-lg text-white text-lg bg-purple-700 font-bold ">
              Demo
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default card;
