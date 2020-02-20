import React, { Component } from "react";
import "./navbar.css";
import Score from "../Score"


class NavBar extends Component {
  render() {
    return (<nav className="navbar sticky-top navbar-light" >

      <div className="col-sm-4">
        <a className="navbar-brand" href="/"><h3>Clicky Game</h3></a>
      </div>
      <div className="col-sm-4">
        <h3>{this.props.message}</h3>
      </div>
      <div className="col-sm-4">
        <h3><Score score={this.props.score} topScore={this.props.topScore} /></h3>
      </div>
    </nav >)

  };
};
export default NavBar;