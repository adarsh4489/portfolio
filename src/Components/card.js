import React from "react";

function card(){
    return (
      <>
        <div className="flex flex-1 flex-col text-center p-2 bg-blue-900 rounded-xl">
          <h2 className="text-3xl"> Heading</h2>
          
          <p className="text-lg">
           <ul>Lorem ipsum dolor sit amet.</ul>
           <ul>Lorem ipsum dolor sit amet.</ul>
           <ul>Lorem ipsum dolor sit amet.</ul>
           <ul>Lorem ipsum dolor sit amet.</ul>
           <ul>Lorem ipsum dolor sit amet.</ul>
           <ul>Lorem ipsum dolor sit amet.</ul>
          </p>
          <div className=" flex gap-4 my-2 justify-center">
            <a href="">
              <button className="text-center py-2 px-6 rounded-lg text-black font-semibold text-lg bg-white ">
                Code
              </button>
            </a>
            <a href="">
              <button className="text-center py-2 px-6 rounded-lg text-white text-lg bg-red-300 ">
                Demo
              </button>
            </a>
          </div>
        </div>
      </>
    );
}
export default card