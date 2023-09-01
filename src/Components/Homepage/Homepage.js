import React, { Component } from "react";
import Backdrop from "./Backdrop";
import HomeCard from "./HomeCard";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="AppElements">
        <Backdrop />
        <HomeCard></HomeCard>
      </div>
    );
  }
}

export default Homepage;
