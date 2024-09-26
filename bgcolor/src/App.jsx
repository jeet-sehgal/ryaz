import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color,setColor]=useState("#FFFFFF")
  let random = () => {
    let rand = "#";
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
      rand += hex[Math.floor(Math.random() * 16)];
    }
    setColor(rand)
    document.body.style.setProperty("--bg",rand);
  };
  
  return (
    <>
      <h2>
      <span id="hex">Back</span>ground color : {color}
      </h2>
      <button onClick={random}>Change</button>
    </>
  );
}

export default App;
