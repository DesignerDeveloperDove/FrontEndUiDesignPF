import React from "react"
import { Link } from 'react-router-dom';

function Card(){


    return(
        <>
            <div className="CardRow">


                <div className="Card1">
                    <Link to="/TailsProject">
                         <img src="Images2/TailsAdoptionCard.jpg" alt="" />

                    </Link>
                    <div id="CardTitle">
                            <h3>TailsAdoption.org </h3>
                        </div>
                    <div id="StackList">
                        <div id="ImageStack">
                            <img src="./Images2/ReactCard.jpg" alt="" />
                            <img src="./Images2/TailwindCssCard.jpg" alt="" />
                            <img src="./Images2/TSCard.jpg" alt="" />
                            <img src="./Images2/PhpCard.jpg" alt="" />
                            <img src="./Images2/MySQLCard.jpg" alt="" />

                        </div>
                        
                    </div>
                </div>


                <div className="Card1">
                   <Link to="/FantaProject">
                    <img src="Images2/FantaCard.jpg" alt="" />
                    </Link> 
                    <div id="CardTitle">
                            <h3>Fanta App(With DB)</h3>
                        </div>
                    <div id="StackList">
                        <div id="ImageStack">
                            <img src="./Images2/HtmlCard.jpg" alt="" />
                            <img src="./Images2/CssCard.jpg" alt="" />
                            <img src="./Images2/JSCard.jpg" alt="" />
                            <img src="./Images2/GsapCard.jpg" alt="" />
                            <img src="./Images2/PhpCard.jpg" alt="" />
                            <img src="./Images2/MySQLCard.jpg" alt="" />

                        </div>
                        
                    </div>
                </div>

                <div className="Card1">
                <Link to="/ReactProject">
                        <img  src="Images2/ReactProjectCard.jpg" alt="" /> 
                </Link>
                    <div id="CardTitle">                           
                            <h3>React Tutorial</h3>
                        </div>
                    <div id="StackList">
                        <div id="ImageStack">
                            <img src="./Images2/ReactCard.jpg" alt="" />
                            <img src="./Images2/HtmlCard.jpg" alt="" />
                            <img src="./Images2/CssCard.jpg" alt="" />
                            <img src="./Images2/JSCard.jpg" alt="" />
                            <img src="./Images2/GsapCard.jpg" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;