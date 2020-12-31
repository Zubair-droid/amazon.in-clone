/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className = "header">
        <Link to = '/'>
        <img 
               className = "header_logo"
               src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
           /> 

        </Link>
          
           <div className  ="header_search">
         
            <input 
            className = "header_searchInput"
            type  ="text" />
            { /* Logo */}
             
            <SearchIcon 
                className = "headerSearchIcon"
             />
        
           </div>
     
          <div className = "header_nav">
          <div className = "header_option"> 
          
          </div>
          <div className = "header_option"> 
             <span className = "header_optionLineOne">Hello Guest</span>
             <span className = "header_option_lineTwo">Sign In</span>
          </div>
          <div className = "header_option"> 
             <span className = "header_optionLineOne">Returns</span>
             <span className = "header_option_lineTwo">& Orders</span>
           
          </div>
          <div className = "header_option"> 
          <span className = "header_optionLineOne">Your</span>
             <span className = "header_option_lineTwo">Prime</span>
          
          </div>
          
          <Link to = '/checkout'>
          <div className= "header_optionBasket">
          <ShoppingBasketIcon />
          <span className = "header_optionLineTwo header_basketCount">0</span>
          </div>

          </Link>
          
          
          
          </div>
          
        </div>
          
    );
}

export default Header
