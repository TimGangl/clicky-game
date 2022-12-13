import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    return (
      < img class="img-thumbnail" keys={this.props.keys} id={this.props.id} className={this.props.className} src={this.props.src} alt={this.props.alt} onClick={this.props.onClick}></img>
    )
  };
};


export default Card;