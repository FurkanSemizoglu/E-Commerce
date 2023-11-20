import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="left-bar">
          <div className="logo">Logo</div>
        </div>

        <div className="right-bar">
          <div className="navbar-articles">
            <ul>
              <li>
                <a href="">Home</a>
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
            <img src="" alt="asd" />
            <img src="" alt="asd" />
            <img src="" alt="ads" />
            <img src="" alt="asd" />
          </div>
        </div>
      </nav>

      <div className="search-area-view">
        <div className="search-area-content">
          <div className="search-area-title"><h3>Buy your <br />dream plants</h3></div>
          <div className="search-area-num-content">            
          </div>
          <div className="searchbar">
            <div className="search-button"></div>
          </div>
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
