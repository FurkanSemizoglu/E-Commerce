import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { BiMenuAltRight } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav>
        <div className="left-bar">
          <div className="logo">F-COMMERCE</div>
        </div>

        <div className="right-bar">
          <div className="navbar-articles">
            <ul>
              <li>
                <a id="" href="">Home</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="navbar-icons">
            <ul>
              <li><a href=""><SlBasket /></a></li>
              <li><a href=""><IoPersonOutline /> </a></li>
              <li> <div className="separater-line"></div></li>
              <li>  <a href=""><BiMenuAltRight /></a></li>
            </ul>
            
            
          
          </div>
        </div>
      </nav>
  )
}

export default Navbar