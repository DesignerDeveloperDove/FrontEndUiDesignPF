import React from "react";

function AboutPage(){
    return(
        <>
        <div className="AboutPage">
            <div className="LeftSide" id="Float">
            <img src="/Images2/MeInAHat.jpg" alt="" />
            </div>

            <div className="RightSide">
                <h1>About Dove</h1>
                <p id="AText">
                    <span>Hey im Dove</span>, im an Interactive Design student with an IT minor, and a passion for FrontEnd Development. I enjoy learning new things related to Developmen and UI design. I have experience from my Web/App design intern at IDD studios , there i used custom <em>HTML,CSS</em> inside of the CMS GoHighLevel to create websites for clients. I also recently was lucky enough to find work at Tails Adoption as a <em>
                   Front End Engineer </em> , and have been using <em>React,Typscript,and MySql</em> to develop the main site you see live today. 
                    
                    <hr></hr>
                    In school, I have taken classes in <em>Application Development, Database Systems, Front-End Development, User Interface Design, Interaction Design</em>, and much more. Over the years, I have gained experience in both <em>design</em> and <em>development</em>, from <em>Adobe Suites & Figma to MySQL and PHP</em>. I strive to learn and grow as a developer; I'm never done—I believe there is always more to learn.
                </p>

            </div>
        </div>
           
        
        </>
    )
}
export default AboutPage