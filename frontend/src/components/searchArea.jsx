import React from 'react'
import flowerPhoto from "../images/flowerPhoto.png"
import { CiSearch } from "react-icons/ci";
const SearchArea = () => {
  return (
    
    <div className="search-area-view">
    <div className="search-area-content">
      <div className="search-area-title"><h3>Buy your <br />dream plants</h3></div>
      <div className="search-area-num-content">            
      </div>
      <div className="searchbar">
        <input type="text" placeholder="What are you looking for?" />
        <div className="search-button"><CiSearch className="searchIcon"/></div>
      </div>
    </div>
    <div className="search-area-view-image">
     
    {/*   <ReactSVG src={flowerSVG} /> */}
      <img src={flowerPhoto} alt="" />
    </div>

  </div>
  )
}

export default SearchArea