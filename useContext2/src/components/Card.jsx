import React, { useContext } from "react";
import DataContext from "../context/DataContext";

function Card() {
  const { color } = useContext(DataContext);
  return (
    <div>
      <p>hello there is the global data </p>
      <h1>{color}</h1>
      
    </div>
  );
}

export default Card;
