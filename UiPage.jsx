import React, { useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import UiCard from "./UiCard";
gsap.registerPlugin(useGSAP);

function UiPage(){

    return(
            <>
                <div className="backgroundUi">
                    <img src="/Images2/UiBG2.jpg" alt="Background"></img>  

                </div>

                <div className="UiPosition">
                
                <div id="Float" className="UiHeader">    
                    <div className="HeaderText">
                        <h1>UI/Web Design</h1>
                    </div>
                </div>

                <div className="ProjectContainer">
                    <div id="DaCards">
                        <UiCard />
                    </div>
                </div>

            </div>
             
            </>


    )
};

export default UiPage;