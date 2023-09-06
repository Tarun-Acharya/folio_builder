import React from "react";
import "./ExpCard.css";
import { Link } from "react-router-dom";
function ExpCard(props) {
  console.log(props.work);

  return (
    <div className="top">
      <Link to={"/Work/" + props.work.Company} className="link">
        <div className="ExpCard">
          <h2>{props.work.Company}</h2>
          <p>
            From: {props.work.From} To: {props.work.To}
          </p>
          <p>
            <strong>Role: </strong> {props.work.Role}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ExpCard;
