import React from "react";
import HigherOrderComp from "./HigherOrderComp";

const HoverCounter = (props) => {

  return (
    <div>
      <button onMouseOver={props.func}>Hover: {props.cnt}</button>
    </div>
  );
};

export default HigherOrderComp(HoverCounter);
