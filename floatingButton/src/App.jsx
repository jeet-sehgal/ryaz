import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const btn = useRef(null);
  function move() {
    const direction=["+","-"];
    let Xpx = Math.floor(Math.random() * 200);
    let randomDirX = direction[Math.floor(Math.random() * 2)];
    let Ypx = Math.floor(Math.random() * 200);
    let randomDirY = direction[Math.floor(Math.random() * 2)];

    btn.current.style.transform = `translate(${randomDirX}${Xpx}px,${randomDirY}${Ypx}px)`;
  }
  function text(){
    btn.current.innerHTML="You can do it yourself";
  }
  function textReset(){
    btn.current.innerHTML="Ask for help";
  }
  function doIt(e){
    e.target.innerHTML="chal bhai!!!!!!";
  }
  return (
    <>
      <h1>You can ask for the help anytime</h1>
      <div className="controls">
        <button onMouseOver={move} ref={btn} style={{transition:"all .4s"}} onClick={text} onMouseOut={textReset}>
          Ask for help
        </button>
        <button onClick={doIt} style={{transition:"all .4s"}}>Do it yourself</button>
      </div>
    </>
  );
}

export default App;
