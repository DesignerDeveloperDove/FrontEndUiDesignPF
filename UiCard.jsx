import React from "react"
import { Link } from "react-router-dom";
function UiCard(){


    return(
        <>
            <div className="UiCardRow">

                <div className="Card1">
                    <Link to="/Internship">
                       <img src="Images2/IDDCard.jpg" alt="" />  
                    </Link>
               
                    <div id="CardTitle">
                            <h3>IDD Web/App Design Intern</h3>
                        </div>
                    <div id="StackList">
                        <div id="ImageStack">
                            <p>
                                This is an overview of my internship with IDayDream Studios/MrGYB. 
                            </p>

                        </div>
                        
                    </div>
                </div>

                <div className="Card1">
                    <Link to="/ESI">
                        <img src="Images2/ESICard.jpg" alt="" />
                    </Link>
                    <div id="CardTitle">
                            <h3>ESI Design Competition</h3>
                        </div>
                    <div id="StackList">
                        <div id="ImageStack">
                            <p>
                            I participated in a design Competition designing for a start-up company. 
                            </p>

                        </div>
                        
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default UiCard;