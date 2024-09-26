import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App({
  heading = "demo heading",
  para = "some random text",
  btn = "learn more",
}) {
  return(
  <>
    <h1>{heading}</h1>
    <p>{para}</p>
    <button>{btn}</button>
  </>)
}

export default App;
