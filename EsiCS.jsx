import React from "react";
import { Link } from "react-router-dom";
function EsiCs(){
    return(
        <>
       
        <div className="BackButton4">

                <Link to="/">
                    Home
                </Link>
        </div>

            <div className="ImgHolder4">
                <h1 className="Header4">Hatchbridge Incubator</h1>
                    <h3 className="Header4">Role: Websie Design Competitior</h3>
                        <h4 className="Header4">(March/2024)</h4>
                    <div id="ImgBox4">
                        <img src= "/Images2/ESICSImg.jpg" alt="Background"></img>  
                    </div>


                    <div className="HeadText4">
                        <div id="SubHeader">
                            <h1>Competition Summary</h1>                        
                        </div>
                        <div id="Text">
                            <p>
                           Hatchbridge is a small company incubator based out of Kennesaw GA, every year the host a competition to allow students to design a website for a <em>start-up</em>  company, the winner of the competition website will then go into development by that start-up and will be used by the company 

                            <hr />
                            My team chose to design for a Start-Up company called <em>Exoskeloton Innovations</em>  or ESI for short. ESI is a company focused on bringing mechanical Exoskelotons to everyday life , specifically <em>sports & medicine</em>. My team was given a weekend to design them a site from scratch, only given brand colors and a few images.
                            </p>
                        </div>
                    </div>

                    <div className="HeadText4">
                        <div id="SubHeader">
                            <h1>Our Goals</h1>                        
                        </div>
                        <div id="Text">
                            <p>
                            At the start of the competition, our goal was to deliver ESI a <em>visually appealing</em>  and <em>user friendly </em>website. My primary responsibility was to define the brand colors and source assets, a process that required extensive <em>discussions and email exchanges with the CEO</em>.

                            A key turning point came when we realized that strong visual design alone would not be enough to stand out among competing student projects. Recognizing this, I expanded my role beyond design to include development. To achieve this, I began learning <em>Webflow</em> , which allowed us to refine our objectives into the following:

                            <ul> 
                                <em>
                                    <li>Gaining a deeper understanding of ESI</li>
                                    <li>Designing user-friendly and informative content</li>
                                    <li>Developing Figma files optimized for seamless handoff to development</li>
                                    <li>Creating responsive designs for desktop and laptop users</li> 
                                    <li>Mastering Webflow within a tight timeframe</li> 
                                </em> 
                            </ul>
                            Meeting these objectives came with challenges, particularly the steep learning curve of Webflow on such short notice. However, we delivered results that outperformed those of other teams, ultimately achieving our primary goals.
                            </p>
                        </div>
                        <div className="Image4">
                            <div id="ImgBox4_2">
                            <img src="/Images2/ESICSImg2.jpg" alt="Background"></img>  
                            <img src="/Images2/ESICSImg3.jpg" alt="Background"></img>  

                            </div>
                        </div>
                    </div>

                    <div className="HeadText4">
                        <div id="SubHeader">
                            <h1>Final Results </h1>                        
                        </div>
                        <div id="Text">
                            <p>
                            In the end, we secured <em>second place</em> , with the Webflow development significantly contributing to our success by reducing the amount of work required from ESI. While we did not achieve first place, I am <em>proud of our designs</em>  and, most importantly, grateful for the opportunity to learn a new tool like Webflow. This experience not only enhanced the project but also broadened my skill set in both <em>design and development tools</em>.
                            </p>

                            <div className="Image4">
                            <div id="ImgBox"> 
                                <a href="https://www.figma.com/design/P0Jno3QxYxm0GWsSJDfv3z/Hatchbridge-Project?node-id=114-135&t=8Wf14Car6nyqY9sX-1">See ESI Design</a>  

                            </div>
                            
                        </div>
                        </div>
                    </div>
            </div>

        </>
    )
}
export default EsiCs