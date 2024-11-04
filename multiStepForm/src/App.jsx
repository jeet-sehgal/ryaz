import "./App.css";
import { NavLink } from "react-router-dom";
import Nevigate from "./components/Nevigate";

function App() {
  return (
    <>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          <li>
            1
          </li><Nevigate heading={"STEP 1"} desc={"YOUR INFO"} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/two"
        >
          <li>
            2
          </li><Nevigate heading={"STEP 2"} desc={"SELECT PLAN"} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/three"
        >
          <li>
            3
          </li><Nevigate heading={"STEP 3"} desc={"ADD-ONS"} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/forth"
        >
          <li>
            4
          </li><Nevigate heading={"STEP 4"} desc={"SUMMARY"} />
        </NavLink>
      </ul>
    </>
  );
}

export default App;
