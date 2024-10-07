import { useEffect, useState } from "react";
import Input from "./Input";
import "./App.css";

function App() {
  const [currency, setCurrency] = useState("usd");
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return (
    <div style={{position:"relative",width:"fit-content",marginLeft:"10px"}}>
      <Input
        label="From"
        currency={currency}
        value={value}
        valueChange={setValue}
      />
      <button id="swap"
        onClick={() => {
          console.log(data);
        }}
      >
        swap
      </button>
      <Input label="To" currency={currency} disable={true} />
    </div>
  );
}

export default App;
