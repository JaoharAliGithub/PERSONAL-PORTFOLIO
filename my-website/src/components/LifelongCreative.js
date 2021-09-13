import React from "react";
import logo from "./lifelongcreative-min.png"; // with import
import "../styles/LifelongCreative.css";
class LifelongCreative extends React.Component {
  render() {
    return (
      <div className="lifelongcreative">
        <img src={logo} alt="oops lol"/>
      </div>
    );
  }
}

export default LifelongCreative;
