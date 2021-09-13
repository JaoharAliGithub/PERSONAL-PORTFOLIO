import React from "react";
import "./App.css";
import "./components/Intro";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import LifelongCreative from "./components/LifelongCreative";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro />
        <About />
        <Projects />
        <LifelongCreative/>
      </div>
    </div>
  );
}

export default App;
