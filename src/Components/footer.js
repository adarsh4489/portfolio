import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
function footer() {
  return (
    <>
      <div id="footer" className="flex flex-col bg-slate-800">
        <div className="flex flex-row justify-center gap-20 font-semibold text-lg my-4 pt-6  text-white">
          <a href="/">
            {" "}
            <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 px-2"> Home </span>{" "}
          </a>
          <a href="/">
            {" "}
            <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 px-2"> About </span>{" "}
          </a>
          <a href="/">
            {" "}
            <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 px-2"> Projects </span>{" "}
          </a>
          <a href="/">
            {" "}
            <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 px-2"> contact </span>{" "}
          </a>
          <a href="https://drive.google.com/file/d/1bGFdjWVguHYPdWOBG6-X9DdFSHgLfnbk/view?usp=sharing">
            {" "}
            <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 px-2"> Download resume </span>{" "}
          </a>
        </div>

        <div class=" flex flex-row my-6">
          <div class="flex w-full">
            <div className="flex-1 flex flex-col gap-2 p-4 text-white text-center ">
              <h2 className="text-3xl font-semibold">Technologies</h2>
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                <a href="/">HTML</a>
              </span>
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                <a href="/">CSS</a>
              </span>
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                <a href="/">Javascrit</a>
              </span>
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                <a href="/">Bootstrap</a>
              </span>
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                <a href="/">React</a>
              </span>
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                <a href="/">Tailwind CSS</a>
              </span>
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                <a href="/">My SQL</a>
              </span>
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
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
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                <a href="https://auth.geeksforgeeks.org/user/ad4489">Geeks For Geeks</a>
              </span>
             
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                {" "}
                <a href="https://www.hackerrank.com/mishraadarshkum1">
                  Hackerrank{" "}
                </a>
              </span>
              <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
                <a href="https://www.codechef.com/users/ad4489">Codechef</a>
              </span>
             
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-10  text-white">
          <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
            <a href="https://github.com/adarsh4489">
              <BsGithub />
            </a>
          </span>
          <span className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
            <a href="https://www.linkedin.com/in/adarsh-mishra-ad/">
              <BsLinkedin />
            </a>
          </span>
          <span  className=" hover:bg-white hover:rounded-lg hover:text-blue-900 ">
            <a href="https://www.instagram.com/mishra_ad0111/?igshid=MzRlODBiNWFlZA%3D%3D">
              <BsInstagram />
            </a>
          </span >
          
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
