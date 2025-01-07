import React from "react";
import { Link } from "react-router-dom";
function FantaCS(){
    return(
        <>
       
        <div className="BackButton5">

                <Link to="/">
                    Home 
                </Link>
        </div>

            <div className="ImgHolder5">
                <h1 className="Header5">Fanta App & Database</h1>
                    <h3 className="Header5">Role: Full-Stack Developer</h3>
                        <h4 className="Header5">(Nov/2024)</h4>
                    <div id="ImgBox55">
                        <img src="/Images2/FantaCsImg.jpg" alt="Background"></img>  
                    </div>


                    <div className="HeadText5">
                        <div id="SubHeader">
                            <h1>Project Summary</h1>                        
                        </div>
                        <div id="Text">
                            <p>
                            This project was part of my final assignment for my database systems class. During the course, we covered the core principles of <em>MySQL and database design</em>, including topics like the difference between normalized and unnormalized data, when and where to use databases, <em>database management systems</em>, and entity-relationship models.

                            <hr />
                            Using this knowledge, I decided to combine it with my experience in front-end development to create a full-stack application. I chose the <em>MAMP stack</em>  as the foundation for my project and began building from there.
                            </p>
                        </div>
                    </div>

                    <div className="HeadText5">
                        <div id="SubHeader">
                            <h1>Goals</h1>                        
                        </div>
                        <div id="Text">
                            <p>
                            My primary objective was to create a<em>seamless user interaction with the database</em> , ensuring the experience felt intuitive and effortless. Unlike many other IT students who focused solely on "If it works," I prioritized crafting an engaging user experience. To achieve this, my project included the following key elements:

                            <ul> 
                                <em> 
                                    <li>A login screen</li> 
                                    <li>JavaScript animations</li> 
                                    <li>Well-structured SQL queries</li> 
                                    <li>Multiple pages</li> 
                                    <li>The ability to create an account</li> 
                                </em>
                            </ul>
                            By meeting these goals, I was able to leave the course with a sense of accomplishment, having not only done my best but also gained a deep understanding of how integral a database is to the overall user experience. Additionally, I developed a thorough grasp of the MAMP stack, ensuring its effective implementation throughout the project.
                            </p>
                        </div>
                        <div className="Image5">
                            <div id="ImgBox5">
                            <img src="/Images2/FantaCsImg2.jpg" alt="Background"></img>  
                            <img src="/Images2/FantaCsImg3.jpg" alt="Background"></img>  

                            </div>
                        </div>
                    </div>

                    <div className="HeadText5">
                        <div id="SubHeader">
                            <h1>Final Results </h1>                        
                        </div>
                        <div id="Text">
                            <p>
                                My project earned me <em>an A</em> and more importantly an oppertunity for a directed study from the professor in <em>Application Development </em> in the coming semester.As i go into my career i know that knowledge of application development and<em>database creation</em>  is mandatory for  <em>any front end developer</em>  and i truly enjoyed the process and have taken it into some of my other works. Though i have not hosted the live application feel free to<em>contact me for a demo</em>  of it and a full walk through of the project.
                            </p>

                            <div className="Image5">
                            <div id="ImgBox5">
                                <h2>The Database</h2>  

                            </div>
                            <div id="ImgBox5" >
                                
                                <img src="/Images2/FantaCsImg4.jpg" alt="Background"></img>  
                                 <img src="/Images2/FantaCsImg5.jpg" alt="Background"></img>  
                                 
                              <hr />

                                

                            </div>
                        </div>
                        </div>
                    </div>
            </div>

        </>
    )
}
export default FantaCS