/* ProductCard.jsx */
import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, rating, image, colors }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="wishlist-icon">♡</span>
      </div>
      
      <div className="image-section">
        <img src={image} alt={name} className="main-img" />
        
        {colors && colors.length > 0 && (
          <div className="color-variants">
            {colors.map((color, index) => (
              <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
            ))}
            <span className="more-colors">+</span>
          </div>
        )}
      </div>

      <div className="info-section">
        <h4 className="title">{name}</h4>
        <div className="footer">
          <span className="price">${price.toFixed(2)}</span>
          <div className="rating">
            <span className="star">★</span> {rating}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
