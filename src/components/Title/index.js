import React from "react";
import "./title.css";

function Title() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center"><strong><h1 className="title">The Simpsons Clicky Game!</h1></strong></h1>
        <h3 className="lead text-center"><strong>Click on an image to earn points. Don't click on any image more than once, or else Doh! You Loose</strong></h3>
      </div>
    </div>
  )
}
export default Title;