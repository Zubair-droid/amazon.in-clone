import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id, title, image, price, rating}) {
     const [{basket}, dispatch] = useStateValue();

    const addToBasket = ()=>{
        //dispatch the product component
        dispatch({
            type : "ADD_TO_BASKET",
            item: {
                id : id,
                title: title,
                image:image,
                price: price,
                rating:rating
            },
        });
    };
    return (
        <div className = "product_component">
            
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
            
            
        <img src  = {image} alt = ""/>  
        <button onClick = {addToBasket}  className="cart_button">Add to Cart</button>  
        </div>
            
            
    );
}

export default Product;
