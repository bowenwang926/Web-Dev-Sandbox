import React, { useState } from "react";
import DefaultButton from "./defaultButton";
import Button from "./Button";
import DefaultDivButton from "./DefaultDivButton";
import Div from "./Div";
import "../styles/Layout.css";

const App = () => {
  const [buttons, setButtons] = useState({});
  const [divs, setDivs] = useState({});
  const [id, setID] = useState(1);
  const [selectedID, setSelectedID] = useState(null);
  const [error, setError] = useState(null);

  const isButtonSelected = selectedID in buttons;
  const checkValidInput = (input) => {
    if (
      //some bug here
      isNaN(Number(input) && !input.includes("px") && !input.includes("rem"))
    ) {
      setError(<span>{input} is not a valid input</span>);
      return false;
    }
    return true;
  };
  const setStyles = () => {
    const styles = Object.assign(
      {},
      isButtonSelected ? buttons[selectedID] : divs[selectedID]
    );
    let width = document.getElementsByName("width")[0].value;
    //if (!checkValidInput(width)) return;
    styles["width"] = width;
    const height = document.getElementsByName("height")[0].value;
    styles["height"] = height;
    const display = document.getElementsByName("display")[0].value;
    styles["display"] = display;
    const position = document.getElementsByName("position")[0].value;
    styles["position"] = position;
    const color = document.getElementsByName("color")[0].value;
    styles["backgroundColor"] = color;
    const padding = document.getElementsByName("padding")[0].value;
    styles["padding"] = padding;
    const margin = document.getElementsByName("margin")[0].value;
    styles["margin"] = margin;
    const newStyles = Object.assign({}, isButtonSelected ? buttons : divs);
    newStyles[selectedID] = styles;
    if (isButtonSelected) {
      setButtons(newStyles);
    } else {
      setDivs(newStyles);
    }
  };
  const handleClickButton = () => {
    console.log("creating button");
    const newButtonStyles = Object.assign({}, buttons);
    newButtonStyles[id] = {
      backgroundColor: "#0BA6FF",
      width: "100px",
      height: "50px",
      display: "inline",
      position: "static",
      padding: "0px",
      margin: "5px",
    };
    setSelectedID(id);
    setID(id + 1);
    setButtons(newButtonStyles);
  };
  const handleClickDiv = () => {
    console.log("creating Div");
    const newDivStyles = Object.assign({}, divs);
    newDivStyles[id] = {
      backgroundColor: "#006DB2",
      width: "250px",
      height: "250px",
      display: "inline-block",
      position: "static",
      padding: "0px",
      margin: "5px",
      borderRadius: "10px",
    };
    setSelectedID(id);
    setID(id + 1);
    setDivs(newDivStyles);
  };

  const renderButton = (id) => {
    const styles = buttons[id];
    return (
      <Button id={id} style={styles} setSelectedID={setSelectedID}></Button>
    );
  };
  const renderContainer = (id) => {
    const styles = divs[id];
    const isSelected = id === selectedID;
    return (
      <Div
        id={id}
        style={styles}
        setSelectedID={setSelectedID}
        isSelected={isSelected}
      ></Div>
    );
  };
  return (
    <>
      <div className="sidenavcreation">
        <DefaultButton handleClick={handleClickButton} />
        <DefaultDivButton onClick={handleClickDiv} />
      </div>
      <div className="canvas">
        {Object.keys(buttons).map(renderButton)}
        {Object.keys(divs).map(renderContainer)}
      </div>
      <div className="sidenavedit">
        <div className="input-group">
          <label htmlFor="name">Width</label>
          <input type="text" name="width" defaultValue="100px" />
        </div>
        <div className="input-group">
          <label htmlFor="name">Height</label>
          <input type="text" name="height" defaultValue="50px" />
        </div>
        <div className="input-group">
          <label htmlFor="name">Display</label>
          <input type="text" name="display" defaultValue="inline" />
        </div>
        <div className="input-group">
          <label htmlFor="name">Position</label>
          <input type="text" name="position" defaultValue="static" />
        </div>
        <div className="input-group">
          <label htmlFor="name">Color</label>
          <input type="text" name="color" defaultValue="#0BA6FF" />
        </div>
        <div className="input-group">
          <label htmlFor="name">Padding</label>
          <input type="text" name="padding" defaultValue="0px" />
        </div>
        <div className="input-group">
          <label htmlFor="name">Margin</label>
          <input type="text" name="margin" defaultValue="5px" />
        </div>
        <button type="submit" onClick={setStyles} className="submit-btn">
          Enter
        </button>
        {error}
      </div>
    </>
  );
};

export default App;
