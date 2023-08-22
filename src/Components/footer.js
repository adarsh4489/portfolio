import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
function footer() {
  return (
    <>
      <div className="flex flex-col bg-slate-800">
        <div className="flex flex-row justify-center gap-20 font-semibold text-lg my-4 pt-6  text-white">
          <a href="/">
            {" "}
            <span> Home </span>{" "}
          </a>
          <a href="/">
            {" "}
            <span> About </span>{" "}
          </a>
          <a href="/">
            {" "}
            <span> Projects </span>{" "}
          </a>
          <a href="/">
            {" "}
            <span> contact </span>{" "}
          </a>
          <a href="/">
            {" "}
            <span> Download resume </span>{" "}
          </a>
        </div>

        <div class=" flex flex-row my-6">
          <div class="flex w-full">
            <div className="flex-1 flex flex-col gap-2 p-4 text-white text-center ">
              <h2 className="text-3xl font-semibold">Technologies</h2>
              <span>
                <a href="/">HTML</a>
              </span>
              <span>
                <a href="/">CSS</a>
              </span>
              <span>
                <a href="/">Javascrit</a>
              </span>
              <span>
                <a href="/">Bootstrap</a>
              </span>
              <span>
                <a href="/">React</a>
              </span>
              <span>
                <a href="/">Tailwind CSS</a>
              </span>
              <span>
                <a href="/">My SQL</a>
              </span>
              <span>
                <a href="/">Node Js</a>
              </span>
            </div>

            <div className="flex-1 p-2">
              <form class="bg-slate-500 shadow-lg rounded p-6  text-black">
                <div class="mb-4">
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div class="mb-2">
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="textarea"
                  >
                    Feedback
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                    className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    placeholder="give your feedback"
                  ></textarea>
                </div>
                <div class="flex items-center justify-center">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-1 p-4 flex-col gap-3 text-white text-center ">
              <h2 className="text-3xl font-semibold">coding profiles</h2>
              <span>
                <a href="/">gfg</a>
              </span>
              <span>leetcode</span>
              <span>hackerrank</span>
              <span>codechef</span>
              <span>codeforces</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-10  text-white">
          <span>
            <a href="https://github.com/adarsh4489">
              <BsGithub />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/adarsh-mishra-ad/">
              <BsLinkedin />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/mishra_ad0111/?igshid=MzRlODBiNWFlZA%3D%3D">
              <BsInstagram />
            </a>
          </span>
        </div>

        <div className="flex my-4 justify-center">
          <span className="text-white">
            © This portfolio belongs to Adrash Kumar Mishra.
          </span>
        </div>
      </div>
    </>
  );
}
export default footer;
