import React from "react";
import { useParams } from "react-router-dom";
import "./WorkPage.css";
import { useSelector } from "react-redux";
function WorkPage() {
  const { company } = useParams();
  const workExperience = useSelector(
    (state) =>
      state.workExperiences.filter((work) => work.Company === company)[0]
  );

  return (
    <div className="WorkPage">
      <h1> {workExperience.Company} </h1>
      <h2> {workExperience.Role} </h2>
      <h3>
        From {workExperience.From} - To {workExperience.To}
      </h3>
      <p>{workExperience.Description}</p>
    </div>
  );
}

export default WorkPage;
