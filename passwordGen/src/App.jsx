import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  let passGen = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "1234567890";
    if (char) str += "!@#$%*";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);
  };
  const passRef = useRef(null);
  useEffect(passGen, [length, number, char]);
  const copy = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current.select()
  };
  return (
    <div className="container">
      <h1>
        <span>Password</span> Generater
      </h1>
      <div className="main">
        <div className="top">
          <input type="text" readOnly value={password} ref={passRef} />
          <button onClick={copy}>copy</button>
        </div>
        <div className="lower">
          <div>
            <input
              type="range"
              id="len"
              min={1}
              max={30}
              value={length}
              onChange={(e) => setLength(() => e.target.value)}
            />
            <label htmlFor="range">length ({length})</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="number"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="number">number</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="char"
              onChange={() => setChar((prev) => !prev)}
            />
            <label htmlFor="char">character</label>
          </div>
          <button onClick={passGen}>Recreate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
