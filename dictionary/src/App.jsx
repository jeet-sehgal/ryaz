import { useState } from "react";
import "./App.css";

function App() {
  const [meaning, setMeaning] = useState("");
  const [word, setWord] = useState("");
  const [input, setInput] = useState("");
  const [errorDiv, setErrorDiv] = useState(false);
  const [correctDiv, setCorrectDiv] = useState(false);

  const call = async () => {
    try {
      setWord(input);
      let means = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      ).then((res) => res.json());
      setMeaning(means[0].meanings[0].definitions[0].definition);
      setErrorDiv(false);
      setCorrectDiv(true);
    } catch {
      setErrorDiv(true);
      setCorrectDiv(false);
    }
  };

  function Error() {
    return (
      <div className="error">
        <h3 style={{ color: "red" }}>Word Not Found</h3>
      </div>
    );
  }
  function Correct() {
    return (
      <div className="correct">
        <span className="word">
          <h3>{word}</h3>
        </span>
        :
        <span className="meaning">
          <h5>{meaning}</h5>
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="main">
        <h1>Dictionary</h1>
        <input
          type="text"
          placeholder="Enter your word"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <button onClick={call}>Meaning</button>
      </div>
      <div className="resultContainer">
        {errorDiv ? <Error /> : null}
        {correctDiv ? <Correct /> : null}
      </div>
    </>
  );
}

export default App;
