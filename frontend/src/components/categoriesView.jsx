import React from 'react'


const CategoriesView = () => {
  return (
      
    <div className="catogories-part">
    <div className="left-information-card">
      <div className="information-title">Best Selling  <br />Plants</div>
      <div className="information-content">Easiest way to <br /> healthy life by buying <br /> your favorite plants </div>
      <div className="information-button">See more
      <div className="information-button-icon"></div>
      </div>
    </div>

    <div className="product-cards">
      <div className="product-card">
        <img className="product-photo" src="" alt="product-photo"/>
        <div className="product-name">Tennis Ball</div>
        <div className="product-price">1000 USD</div>
      </div>
      <div className="product-card">
      <img className="product-photo" src="" alt="product-photo"/>
        <div className="product-name">Tennis Ball</div>
        <div className="product-price">1000 USD</div>
      </div>
      <div className="product-card">
      <img className="product-photo" src="" alt="product-photo"/>
        <div className="product-name">Tennis Ball</div>
        <div className="product-price">1000 USD</div>
      </div>
    </div>
  </div>

  )
}

export default CategoriesView