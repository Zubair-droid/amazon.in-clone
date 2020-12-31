import React from 'react';
import "./Checkout.css";

function Checkout() {
    return (
        <div className = "checkout">
         <div className = "checkout_left">
           <img className = "checkout_ad" 
           src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/Dec_2020/V2/Modern_1500X200_Revised01B.jpg" alt = " "/>
          
          <div >
                 <h2 className = "checkout_title">Your shopping cart.</h2>
                 {/* {Basket} */}
             </div>
         </div>

        <div className = "checkout_right">
           <h2>The subtotal will go here.</h2>
        
        </div>
        </div>
    )
}

export default Checkout
