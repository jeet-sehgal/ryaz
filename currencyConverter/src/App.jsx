import { useEffect, useState } from "react";
import Input from "./Input";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [result,setResult]=useState(0);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[from]);
        setOptions(Object.keys(res[from]));
      });
  }, [from]);
  useEffect(convert,[to,value,setFrom])
  function convert(){
    setResult(value * data[to])
  }

  return (
    <div
      style={{ position: "relative", width: "fit-content", marginLeft: "10px" }}
    >
      <Input
        label="From"
        currency={from}
        value={value}
        valueChange={setValue}
        options={options}
        setCurrency={setFrom}
      />
      <button
        id="swap"
        onClick={() => {
          console.log(data);
          console.log(from);
        }}
      >
        swap
      </button>
      <Input
        label="To"
        currency={to}
        disable={true}
        
        setCurrency={setTo}
        options={options}
        value={result}
      />
      <button onClick={convert}>
        Convert {from.toUpperCase()} To {to.toUpperCase()}
      </button>
    </div>
  );
}

export default App;
