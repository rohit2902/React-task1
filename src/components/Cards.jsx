import React from 'react'
import { CiBookmark } from "react-icons/ci";

const Cards = () => {
  return (
    <div className='parent'>
        <div className="card">
            <div className="top">
               <img className='img-box' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PSDa02YCAAQm-6794fNVz-yJAhtKLPxNtQ&s" alt="" />
                <button>Save <CiBookmark /></button>
            </div>
            <div className="center">
                <h3>Amozon <span>5 days ago</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div>
                    <h4>Part Time </h4>
                    <h4>Senior Level</h4>
                </div>
            </div>
            <div className="bottom">
                    <div>
                        <h3>$120/hr</h3>
                        <p>Sasaram, india</p>
                    </div>
                    <button>Apply Now</button> 
            </div>
        </div>
      
    </div>
  )
}

export default Cards
