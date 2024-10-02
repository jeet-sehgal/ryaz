import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.slice(0, 10));
      });
  }, []);
  function List() {
    return data.map((ele) => {
      let text;
      if (!ele.completed) text = "red";
      else text = "green";
      return (
        <li key={ele.id} style={{ color: text }}>
          {ele.title}
        </li>
      );
    });
  }
  

  return (
    <>
      <h1>Data</h1>
      <input type="text" placeholder="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <List />
    </>
  );
}

export default App;
