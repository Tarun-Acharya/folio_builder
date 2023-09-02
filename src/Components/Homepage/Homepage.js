import React from "react";
import Backdrop from "./Backdrop";
import HomeCard from "./HomeCard";

function Homepage() {
  return (
    <div className="AppElements">
      <Backdrop />
      <HomeCard></HomeCard>
    </div>
  );
}

export default Homepage;
