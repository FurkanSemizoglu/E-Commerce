import "./App.css";
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { BiMenuAltRight } from "react-icons/bi";
import flowerPhoto from "./images/flowerPhoto.png"
import { CiSearch } from "react-icons/ci";

//import flowerSVG from "./images/flower-photo.svg.svg"
/* import ReactSVG from 'react-svg';
import { ReactComponent as flowerSVG } from './images/flowerPhotoSVG.svg'; */
function App() {
  return (
    <>
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

      <div className="catogories-part">
        <div className="left-information-card">
          <div className="information-title">Best Selling Plants</div>
          <div className="information-content">Easiest way to healthy life by buying your favorite plants </div>
          <div className="information-button">See more</div>
        </div>

        <div className="product-cards">
          <div className="product-card">
            <img src="" alt="product-photo"/>
            <div className="product-name"></div>
            <div className="product-price"></div>
          </div>
          <div className="product-card">
          <img src="" alt="product-photo"/>
            <div className="product-name"></div>
            <div className="product-price"></div>
          </div>
          <div className="product-card">
          <img src="" alt="product-photo"/>
            <div className="product-name"></div>
            <div className="product-price"></div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
