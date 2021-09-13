import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import "../styles/Intro.css";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <div id="3d-model"></div>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, i'm  "}
            <span className="intro-name">{"jao. "}</span>
            {""}
          </span>
        </Typist>
        <FadeInSection>
            <div className="intro-subtitle">
                i make stuff i guess
            </div>
            <div className="intro-desc">
                i'm currently a junior in high school from ontario, canada. if you walk in to my room you are likely to see me working on some frontend development, advanced java development, producing music, studying quantum mechanics, and anything else you can think of. 
            </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
