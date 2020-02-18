import React from "react";
import "./title.css";

function Title() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center"><strong>Simpson's Clicky Game</strong></h1>
        <h5 className="lead text-center"><strong>Click on an image to earn points. Don't click on any image more than once, or else Doh! You Loose</strong></h5>
      </div>
    </div>
  )
}
export default Title;