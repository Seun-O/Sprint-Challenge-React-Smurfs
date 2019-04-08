import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <menu>
      <nav>
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
