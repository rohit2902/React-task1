import React from 'react'
import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
  <div id='centercontainer'>
      
       <div className="left">
        <div  id='textContainer'>
                <div className="text">
                 <h4>200</h4>
                 <p>project completed</p>
           </div>
             <div className="text">
                 <h4>50</h4>
                 <p>Startup raised</p>
           </div>
        </div>
        <div id="center">
          <h1>Hero</h1>
          <p>- It's D.Nova a design wizerd </p>
        </div>
       <h5>Scroll Dow <BsArrowDown /></h5>

       </div>
       <div className="right" id='img'>
        <img src="Man.png" alt="" />
       </div>
      
   
  </div>
  )
}

export default Hero
