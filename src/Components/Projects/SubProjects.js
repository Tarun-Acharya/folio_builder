import React from "react";
import { Link } from "react-router-dom";
import "./SubProjects.css";
function SubProjects(props)
{
return(
<div className="subprojects"> 
<h1 className="header">
<Link to={props.name} className="link" >{props.name}</Link>
</h1>
<h2 className="role"> Team Lead </h2>
</div>
);
}
export default SubProjects;                         