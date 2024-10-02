import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [meaning, setMeaning] = useState("");
  const [word, setWord] = useState("");
  const call = async () => {
    let means = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    ).then((res) => res.json());
    setMeaning(means[0].meanings[0].definitions[0].definition);
  };

  return (
    <>
      <div className="main">
        <h1>Dictionary</h1>
        <input
          type="text"
          placeholder="Enter your word"
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <br />
        <button onClick={call}>Meaning</button>
      </div>
      <div className="resultContainer">
        <div className="error">
          <h3 style={{ color: "red" }}>Word Not Found</h3>
        </div>
        <span className="word">
          <h3>{word}</h3>
        </span>
        :
        <span className="meaning">
          <h5>{meaning}</h5>
        </span>
      </div>
    </>
  );
}

export default App;
