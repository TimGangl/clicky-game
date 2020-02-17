import React from "react";
import "./title.css";

function Title() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Simpson's Clicky Game</h1>
          <p className="lead">Click on an image to earn points. Don't click on any image more than once, or else Doh! You Loose</p>
        </div>
      </div>
    </div>
  )
}
export default Title;