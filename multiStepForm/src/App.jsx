import "./App.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/one"
        >
          <li>1</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/two"
        >
          <li>2</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/three"
        >
          <li>3</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/forth"
        >
          <li>4</li>
        </NavLink>
      </ul>
    </>
  );
}

export default App;
