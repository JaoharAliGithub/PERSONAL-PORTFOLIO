import React from "react";
import "react-typist/dist/Typist.css";
import "../styles/Intro.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  render() {
    const one = (
      <p>
        i'm studying as a highschool student at <b>Louise Arbour SS</b>
      </p>
    );
    const two = (
      <p>
        i enjoy <b>frontend development</b>, <b>pure computer science</b>,{" "}
        <b>physics (classical and quantum)</b>, and{" "}
        <b>producing music.</b>in my freetime i play video games, soccer, and
        watch whatever's good
      </p>
    );

    const descItems = [one, two];
    const techStack = [
      "JavaScript ES6+",
      "Python",
      "React.js",
      "Java",
      "HTML & CSS",
      "TypeScript",
    ];

    const techItems = techStack.map((stack) => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {descItems}
              {"here's the tech i use:"}
              <ul className="tech-stack">
                {techStack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
