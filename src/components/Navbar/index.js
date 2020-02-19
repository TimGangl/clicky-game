import React from "react";
import "./navbar.css";


function NavBar(props) {
  let message = ""
  let color = "black"
  switch (props.status) {
    case "correct":
      message = "You Guessed Correctly!"
      color = "rgb(18,41,36)"
      break;
    case "incorrect":
      message = " Doh! You Guessed Incorrectly!"
      color = "red"
      break;
    case "win":
      message = "You Win!"
      color = "green"
      break;
    default:
      message = "Click an image to begin!"
  }
  console.log(message)
  return (

    <nav className="navbar sticky-top navbar-light">
      <a className="navbar-brand" href="/"><h3>Clicky Game</h3></a>

      <h3 className="nav-item" style={{ color: color }}>Click A Picture to Begin</h3>
      <h3 className="nav-item">Score: {props.score}  |  Top Score: {props.topScore}</h3>

    </nav>
  )
};
export default NavBar;