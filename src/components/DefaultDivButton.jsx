import React from "react";
import "../styles/Layout.css";
const DefaultDivButton = (props) => {
  return (
    <button className="defaultDivButton" onClick={props.onClick}>
      Create a Div
    </button>
  );
};

export default DefaultDivButton;
