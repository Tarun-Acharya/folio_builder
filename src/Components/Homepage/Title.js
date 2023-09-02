import React from "react";
import "./Title.css";
function Title(props) {
  return (
    <div className="title_page">
      <img src={props.details.pic} className="title_image" alt="title_image" />
      <h1 className="name"> {props.details.name}</h1>
      <h1 className="role">{props.details.role}</h1>
    </div>
  );
}
export default Title;
