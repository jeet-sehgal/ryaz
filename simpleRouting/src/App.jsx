import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h2>Logo</h2>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "jeet" : "inactive")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "jeet" : "inactive")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "jeet" : "inactive")}
            end
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? "jeet" : "inactive")}
            end
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/github"
            className={({ isActive }) => (isActive ? "jeet" : "inactive")}
            end
          >
            GitHub
          </NavLink>
        </li>
      </ul>
      <div className="buttons">
      <button style={{color:"rgb(26, 211, 63)", backgroundColor:"white"}}>Log In</button>
      <button style={{color:"white", backgroundColor:"rgb(26, 211, 63)"}}>Sign In</button>
      </div>
    </div>
  );
}

export default App;
