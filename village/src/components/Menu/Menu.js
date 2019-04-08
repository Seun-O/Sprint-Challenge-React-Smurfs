import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default () => {
  return (
    <menu>
      <nav>
        <h1>Smurf Village</h1>
        <ul>
          <li>
            <NavLink to="/">Smurfs</NavLink>
          </li>
          <li>
            <NavLink to="/smurf-form">Form</NavLink>
          </li>
        </ul>
      </nav>
    </menu>
  );
};
