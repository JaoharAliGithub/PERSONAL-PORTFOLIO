import { React, useState } from "react";
import Project from "./Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Projects extends React.Component {
  render() {
    const projects = [
      {
        title: "Java Practice",
        desc: "All the java programs I've written over the course of my programming career up until now. They are all example programs or exercises from the Introduction to Java.",
        techStack: "Java, JavaFX, developed in Eclipse IDE",
        link: "https://github.com/jxharr/java",
      },
      {
        title: "This Website",
        desc: "My personal portfolio website with a ReactJS front end",
        techStack:
          "JavaScript (ReactJS), HTML, CSS, developed in Visual Studio Code",
        link: "https://github.com/jxharr/personal-website",
      },
    ];

    return (
      <div id="projects">
        <Container>
          <Row>
            <Col>
              <Project
                title={projects[0].title}
                desc={projects[0].desc}
                link={projects[0].link}
                techStack={projects[0].techStack}
              />
            </Col>
            <Col>
              <Project
                title={projects[1].title}
                desc={projects[1].desc}
                link={projects[1].link}
                techStack={projects[1].techStack}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Projects;
