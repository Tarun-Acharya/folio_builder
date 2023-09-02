import React from "react";
import Title from "./Title";
import Aboutme from "./Aboutme";
import picture from "../../TestFiles/picture.jpeg";
import "./HomeCard.css";
function HomeCard() {
  const details = { pic: picture, name: "Virat", role: "Cricketer" };

  return (
    <div className="Card">
      <Title details={details} />
      <Aboutme />
    </div>
  );
}

export default HomeCard;
