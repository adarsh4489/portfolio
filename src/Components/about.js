import React from "react";
import logo from "../images/standing-2.png";
// import { BsDownload } from "react-icons/bs";

function about() {
  return (
    <div className="flex flex-row justify-between bg-blue-400">
      <div className="flex py-16 justify-start pr-32  pl-40  bg-blue-900 rounded-r-full">
        <img src={logo} className="w-96 h-80  " alt="profile" />
      </div>
      <div className="flex flex-col py-12 pl-40 mx-auto w-2/3">
        <h2 className="text-4xl font-bold py-4 ">About</h2>
        <div className=" w-5/6 text-base ">
          <p>
            "About Me: I'm a passionate and results-driven web developer with a
            strong background in creating dynamic and responsive websites. I
            thrive on challenges and take pride in delivering innovative web
            solutions that exceed client expectations.
          </p>
          <p>
            With 2 years of personal experience in the field, I have honed my
            skills in front-end and currenty acquiring skills in back-end
            development and creating seamless user experiences.
          </p>
          <br />

          <p>
            I am proficient in a variety of web technologies, including: <br />
            Front-end: HTML, CSS, JavaScript, React,
            <br />
            Back-end: Node.js, Express
            <br />
            Databases: MySQL Version Control: Git, GitHub Responsive
            <br />
            Design: Bootstrap, Tailwind CSS
            <br /> Deployment & Hosting: Netlify
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
export default about;
