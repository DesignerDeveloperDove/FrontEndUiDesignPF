import React from "react";
import { Link } from "react-router-dom";
function ReactCS(){
    return(
        <>
       
        <div className="BackButton">

                <Link to="/">
                    Home
                </Link>
        </div>

            <div className="ImgHolder">
                <h1 className="Header2">React Intro & Tutorial</h1>
                    <h3 className="Header">Role: Front-End Developer</h3>
                    <div id="ImgBox">
                        <img src= "/Images2/ReactCSImg.jpg" alt="Background"></img>  
                    </div>


                    <div className="HeadText">
                        <div id="SubHeader">
                            <h1>Project Summary </h1>                        
                        </div>
                        <div id="Text">
                            <p>
                            This project was an in-class assignment and marked my first introduction to <em>React.js</em>. It was completed as part of my "FrontEnd II" course, where we explored the applications of <em>Javascript</em> in creating modern, interactive websites and learned the JS library <em>GSAP</em>. For our final project, we were tasked with researching and utilizing another JavaScript library.
                            <hr />
                            I served as the <em>Team Lead</em>, overseeing a group divided into two sub-teams: the Design Team, responsible for the visual design and layout, and the Development Team, focused on implementing the functionality. As the leader, I managed the team's workflow using Git and personally contributed to <em>approximately 96% of the development work</em>. Through this experience, I gained a strong foundational understanding of <em>React.js</em>, as well as proficiency in <em>Git and GitHub</em>. 
                            </p>
                        </div>
                    </div>

                    <div className="HeadText">
                        <div id="SubHeader">
                            <h1>Goals</h1>                        
                        </div>
                        <div id="Text">
                            <p>
                            When working on this project, I ensured that, as Team Lead, specific checkpoints and check-in dates were set to keep the team on track and ensure all goals were met. The main goals of this project were as follows:

                            <ul> <em> 
                                    <li>Understand How the Framework Functions</li> 
                                    <li>Understand When It’s Best to Use React</li> 
                                    <li>Understand React Syntax</li> 
                                </em> 
                            </ul>
                            Ultimately, everything I learned about React was shared with my team to collaboratively create a <em>user-friendly and informative</em> site dedicated to teaching about React.js.
                            </p>
                        </div>
                        <div className="Image">
                            <div id="ImgBox2">
                            <img src="/Images2/ReactGoals.jpg" alt="Background"></img>  
                            <img src="/Images2/ReactGoals2.jpg" alt="Background"></img>  

                            </div>
                        </div>
                    </div>

                    <div className="HeadText">
                        <div id="SubHeader">
                            <h1>Final Results </h1>                        
                        </div>
                        <div id="Text">
                            <p>
                            In the end, the project was completed on time and successfully achieved all the goals we set out to accomplish. Beyond that, I took the initiative to purchase a domain and learned how to host the project under my own domain. If you'd like to see the final product, feel free to visit it using the link below:
                            </p>

                            <div className="Image">
                            <div id="ImgBox">
                                <a href="http://developerdove.com/ReactProject/ProjectReact-ReactProject/Fall%202024%20copy/Front%20end%20II/React%20Project%20copy/">Click to See Hosted WebSite</a>  
                              <hr />
                                
                            </div>
                        </div>
                        </div>
                    </div>
            </div>

        </>
    )
}
export default ReactCS