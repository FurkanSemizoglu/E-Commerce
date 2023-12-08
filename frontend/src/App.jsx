import "./App.css";
import Navbar from "./components/navbar";
import SearchArea from "./components/searchArea";
import CategoriesView from "./components/categoriesView";

//import flowerSVG from "./images/flower-photo.svg.svg"
/* import ReactSVG from 'react-svg';
import { ReactComponent as flowerSVG } from './images/flowerPhotoSVG.svg'; */
function App() {
  return (
    <>
      <Navbar />

      <SearchArea />

      <CategoriesView />

      <div className="about-content-view">
          <div className="main-top-header"><h2>About Us</h2></div>
          <div className="second-header"><h4>Order now and appreciate the beauty of nature</h4></div>

          <div className="bottom-contents">
            <div className="content">
                <div className="image-pace"></div>
                <div className="content-header">Large Assortment</div>
                <div className="content-text">we offer many different types of products with fewer variations in each category.</div>
            </div>
          </div>

      </div>

      

    </>
  );
}

export default App;
