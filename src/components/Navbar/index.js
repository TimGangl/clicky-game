import React from "react";
import "./navbar.css";


function NavBar() {
  return (

    <nav className="navbar sticky-top navbar-light">
      <a className="navbar-brand" href="/"><h3>Clicky Game</h3></a>

      <h3>Click A Picture to Begin</h3>
      <h3>Score: 0  |  Top Score: 0</h3>
    </nav>
  )
};
export default NavBar;