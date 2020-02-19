import React from "react";
import "./title.css";

function Title() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center"><strong><a href="https://fontmeme.com/simpsons-font/"><img src="https://fontmeme.com/permalink/200219/c8e4d49015fb2aa513c6247aa163aacf.png" alt="simpsons-font" border="0"></img></a></strong></h1>
        <h5 className="lead text-center"><strong>Click on an image to earn points. Don't click on any image more than once, or else Doh! You Loose</strong></h5>
      </div>
    </div>
  )
}
export default Title;