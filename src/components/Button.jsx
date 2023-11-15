import React from "react";

const Button = (props) => {
  const handleClick = () => {
    console.log("clicked " + props.id);
    props.setSelectedID(props.id);
  };
  return (
    <button onClick={handleClick} style={props.style}>
      Button
    </button>
  );
};

export default Button;
