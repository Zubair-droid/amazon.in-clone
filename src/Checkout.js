import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
    
  return (
        <div className = "checkout">
         <div className = "checkout_left">
           <img className = "checkout_ad" 
           src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/Dec_2020/V2/Modern_1500X200_Revised01B.jpg" alt = " "/>
          
          <div >
                 <h3>Hello {user?.email}</h3>
                 <h2 className = "checkout_title">Your shopping cart.</h2>
                 {/* <CheckoutProduct 
                   title  ="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                   image = "https://images-eu.ssl-images-amazon.com/images/I/41rS468sC2L._AC_US160_FMwebp_QL70_.jpg"
                   price = "1999"
                   rating = "⭐⭐⭐⭐⭐"


                 /> */}

                 
                {basket.map(item => (
                  <CheckoutProduct 
                   id  = {item.id}
                   rating = {item.rating}
                   title = {item.title}
                   image = {item.image}
                   price = {item.price}

                   />
                 
                 ))} 

                 
               
                 {/* {BasketItem} */}
                 {/* {BasketItem} */}
                 {/* {BasketItem} */}
             </div>
         </div>

        <div className = "checkout_right">
           <Subtotal />
        </div>
    </div>
  );
}

export default Checkout;
