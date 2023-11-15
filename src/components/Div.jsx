import React from "react";

const Div = (props) => {
  const handleClick = () => {
    console.log("clicked " + props.id);
    props.setSelectedID(props.id);
  };
  return (
    <div
      onClick={handleClick}
      style={props.style}
      className={`section ${props.isSelected ? "selected" : ""}`}
    >
      Type Here
    </div>
  );
};

export default Div;
