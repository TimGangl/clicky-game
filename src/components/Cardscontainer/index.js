import React from "react";
import "./cardcontainer.css";
import GameCard from "../Cards";

function CardContainer() {
  return (
    <div>
      <div className="container-fluid"><GameCard /></div>
    </div>
  )
}
export default CardContainer;