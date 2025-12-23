import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


const NavBar = () => {
  return (
    <div>
      <nav >
                    <div className="NavLeft">
                      <h4><img src="logo.png" alt="Logo" /></h4>
                       <h4>About Me</h4>
                    <h4>Portfolio</h4>
                    <h4>Services</h4>
                    <h4>Blogs</h4>
                    </div>
                    <div>
                      <h4>Book A Call <MdOutlineArrowOutward /></h4>
                    </div>
                </nav>
    </div>
  )
}

export default NavBar
