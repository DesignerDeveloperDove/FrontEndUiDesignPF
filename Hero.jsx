import React, { useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

function Hero(){
    useEffect(
        () => {
            
           

            gsap.to('.background', {
                xPercent: -50, // Move by half the width to keep the scrolling continuous
                duration: 20,// couldnt find a faster speed that didnt take away from the animation
                repeat: -1, // Infinite scrolling
                ease: 'linear'
              });
        }, 
        []);
        
         //   gsap.fromTo("#HeroText"),{

            

       



    return(
        <> 
       
        <div id="HeroText">
            <h1>Hey, Im Dove</h1>
                <h2>Front-End Engineer</h2>
                    <span>&</span>
                <h2>UI Designer</h2>
        </div>
        <div className="background">
            <img src="/Images2/PortfolioBackground2.jpg" alt="Background"></img>
            <img src="/Images2/PortfolioBackground2.jpg" alt="Background"></img>
        </div> 
        
     </>
    )
}
export default Hero;



