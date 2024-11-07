import React, { useContext } from "react";
import DataContext from "../context/DataContext";

function Btn() {
  const { setTheme, theme, color, setColor } = useContext(DataContext);
  function handel() {
    setTheme(!theme);
    theme ? setColor("dark") : setColor("light");
  }
  return <input type="checkbox" onChange={handel} />;
}

export default Btn;
