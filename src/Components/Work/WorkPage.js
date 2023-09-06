import React from "react";
import { useParams } from "react-router-dom";
import "./WorkPage.css";
function WorkPage() {
  const { company } = useParams();
  return (
    <div className="WorkPage">
      <h1> {company} </h1>
      <h2> From 2010 - To 2015 </h2>
      <p>
        "Finding the truth wouldn't be easy, that's for sure. Then there was the
        question of whether or not Jane really wanted to know the truth. That's
        the thing that bothered her most. It wasn't the difficulty of actually
        finding out what happened that was the obstacle, but having to live with
        that information once it was found."
      </p>
    </div>
  );
}

export default WorkPage;
