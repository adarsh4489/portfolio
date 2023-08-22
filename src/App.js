import React from "react";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import Projects from "./Components/projects";
import About from "./Components/about";
// import ThreeColumnDiv from "./Components/try";

import Footer from "./Components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      {/* <ThreeColumnDiv /> */}
    </div>
  );
}

export default App;
