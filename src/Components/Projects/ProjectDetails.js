import { useParams } from "react-router-dom";
import React from "react";
import { Projects } from "./MainProjectPage";
import "./ProjectDetails.css";
function ProjectDetails() {
    const { userid } = useParams();
    var index= Projects.findIndex((project)=>
    {
    return project.name===userid;
    });
    return (
        
        <div className="mainprojectdescription">
            
            <div className="projectdescription">
                <h1 className="projectname">{Projects[index].name}</h1>

                
                <h2 className="role"> {Projects[index].role}</h2>
                <div className="line"></div>
            </div>
            <div className="pi">
            <div className="paragraphs">
            <p className="description">
            {Projects[index].p1}
                </p>
                <p className="p1des">
                {Projects[index].p2}
                </p>
            </div>


            <div className="picture">
                <img src={Projects[index].photo} className="imagesection" alt="imggg" />
            </div>
        </div>
        </div>
    )
    
}
export default ProjectDetails;