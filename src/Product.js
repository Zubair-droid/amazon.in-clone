import React from 'react';
import './Product.css';

function Product({title, image, price, rating}) {
    return (
        <div className = "product_component">
            <img src  = {image} alt = ""/>
            <div className = "product_info">
            <p>{title}</p>
            <div className = "product_rating">
            {Array(rating).fill().map((_, i) => (
                 <p>⭐</p>
            ))}
            </div>
            <p className = "product_price">
            <small>₹</small>
            <strong>{price}</strong></p>
            
            
            </div>
            
            
            <button className="cart_button">Add to Cart</button>
            </div>
    );
}

export default Product;
