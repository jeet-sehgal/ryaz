import { useEffect, useState } from "react";
import Input from "./Input";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState(0);
  const [call, setCall] = useState(false);
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
  useEffect(convert, [to, value, from]);
  function convert() {
    if (call) {
      setResult(Number(value * data[to]));
    } else {
      setCall(true);
    }

    // console.log(typeof(result))
  }
  function swap() {
    setCall(false);
    setFrom(to);
    setTo(from);
    setValue(result);
    setResult(value);
  }
  return (
    <div
      style={{ position: "relative", width: "fit-content", marginLeft: "10px", backgroundColor: "rgba(189, 195, 199, 1)", padding:"10px 20px", borderRadius:"5px"}}
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
          swap();
        }}
      >
        swap
      </button>
      <Input
        label="To"
        currency={to}
        disable={true}
        value={result}
        setCurrency={setTo}
        options={options}
      />
      <button onClick={convert} style={{padding:"5px 10px", borderRadius:"5px" , border:"1px solid black" , position:"relative",left:"50%",transform:"translateX(-50%)"}}>
        Convert {from.toUpperCase()} To {to.toUpperCase()}
      </button>
    </div>
  );
}

export default App;
