import React from "react";
import Card from "./ProjectCard";

function ProjectPage(){
    return(
        <>
        <div className="Header"id="Float">    
            <div className="HeaderText">
                <h1 >Web Development</h1>
            </div>
        </div>

        <div className="ProjectContainer">
            <div id="DaCards">
                <Card />
            </div>
        </div>
        </>
        
    )
}
export default ProjectPage;
