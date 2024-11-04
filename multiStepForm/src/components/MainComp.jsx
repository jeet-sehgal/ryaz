import React from "react";
import "./mainComp.css";

function MainComp({ heading = null, desc = null, child = null }) {
  return (
    <>
      <h3 className="subHeading">{heading}</h3>
      <p className="subPara">{desc}</p>
      {child}
    </>
  );
}

export default MainComp;
