import React from "react";
import "../styles/Layout.css";

const DefaultButton = (props) => {
  return (
    <button className="defaultButton" type="button" onClick={props.handleClick}>
      Create a button
    </button>
  );
};
export default DefaultButton;
