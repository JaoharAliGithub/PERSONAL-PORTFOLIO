import React from "react";

function Project(props) {
  const title = props.title;
  const techStack = props.techStack;
  const link = props.link;
  const desc = props.desc;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{techStack}</h2>
      <h3>{link}</h3>
      <p>{desc}</p>
    </div>
  );
}
export default Project;
