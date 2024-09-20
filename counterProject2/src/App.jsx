import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  function change(no) {
    if (no > 0) {
      if (count < 20) setCount(count + no);
    }
    else{
      if (count > 0) setCount(count + no);
    }
  }

  return (
    <>
      <h1>count 0-20</h1>
      <h2>Counter : {count}</h2>
      <button onClick={() => change(1)}>add {count}</button>
      <br />
      <br />
      <button onClick={() => change(-1)}>remove {count}</button>
    </>
  );
}

export default App;
