import React from "react";
import "./Title.css"
function Title(props) {
    return (
        <div className="title_page">

            <img src={props.details[0].pic} className="title_image" alt="title_image" />
            <h1 className="name"> {props.details[0].name}</h1>
            <h1 className="role">{props.details[0].role}</h1>
        </div>);
}
export default Title;