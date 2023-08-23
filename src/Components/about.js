import React from "react";
import logo from "../images/standing-2.png";


function about() {
  return (
    <div id="about" className="flex flex-row justify-between bg-blue-400">
      <div className="flex py-24 justify-start pr-32  pl-40  bg-blue-900 rounded-r-full">
        <img src={logo} className="w-96 h-80  " alt="profile" />
      </div>
      <div className="flex flex-col py-12 pl-40 mx-auto w-2/3">
        <h2 className="text-4xl font-bold py-4 ">About</h2>
        <div className=" w-5/6 text-lg text-blue-900 ">
          <p>
            "I'm a passionate and results-driven web developer with a strong
            background in creating dynamic and responsive websites. I thrive on
            challenges, with 2 years of personal experience in the field.
          </p>
          <br />

          <p>
            I am proficient in a variety of web technologies, including: <br />
            <b> Front-end </b>: HTML, CSS, JavaScript, React,
            <br />
            <b> Back-end </b>: Node.js, Express
            <br />
            <b>Databases</b>: MySQL <br />
            <b> Version Control</b>: Git, GitHub Responsive
            <br />
            <b> Design</b>: Bootstrap, Tailwind CSS
            <br /> <b>Deployment & Hosting</b>: Netlify,vercel
          </p>

          <p>
            <b> Others</b>: A good knowlege of C++,OOPS,computer network and Data Structures.
          </p>
        </div>
      </div>
    </div>
  );
}
export default about;
