import React, { Component } from "react";

import "./Backdrop.css";

import HomeCard from "./HomeCard";

class Backdrop extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="row">
          <div className="col_1"></div>
          <div className="col_2"></div>
        </div>
      </div>
    );
  }
}

export default Backdrop;
