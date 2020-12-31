import React from 'react';
import './Home.css';
import Product from "./Product.js";

function Home() {
    return (
        <div className = "home">
            <div className= "home_container">
                <img className = "home_image"
                    src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro/Dec/Last_Week/V184735168_WLM_Redmi_Note9Pro_DesktopTallHero_1500x600._CB412535135_.jpg" 
                   //src = "https://images-eu.ssl-images-amazon.com/images/G/31/Watches/WatchoutsaleDec2020/GWBANNERS/1500x600._CB412869810_.jpg"
                   //src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/MI_Laptops/MI_Notebook_Fest_Dec_2020/S2/ingress/Mi_NoteBook_Sale_Banners_1500X300.jpg"
                   alt = " "
                />
            <div className = "home_row">
                <Product 
                title  = "OPPO Reno4 Pro (Silky White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers. Visit the Oppo Store"
                 image = "https://images-na.ssl-images-amazon.com/images/I/81dBes518cL._SX679_.jpg"   
                price  = {34990}
                rating  = {5}

                />
                <Product 
                    title  = "Redmi Note 9 Pro (Aurora Blue, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G & Alexa Hands-Free | Upto 6 Months No Cost EMI by Redmi"
                    image = "https://m.media-amazon.com/images/I/51ny7ASFe4L.jpg"
                    price = {12999}
                    rating =  {4}

                />
                
              
            </div>
            <div className = "home_row">
                <Product 
                    title = "Redmi 9 Power (Blazing Blue, 4GB RAM, 64GB Storage) by Redmi"
                    image =  "https://m.media-amazon.com/images/I/41+aHRW9EqL.jpg"
                    price = {10999}
                    rating = {4}
                />
                <Product 
                title = "Redmi 9 Prime (Space Blue, 4GB RAM, 64GB Storage)- Full HD+ Display & AI Quad Camera by Redmi"
                    image = "https://m.media-amazon.com/images/I/41S3ERlmEgL.jpg" 
                    price = {9999}
                    rating = {4}

                />
                <Product
                    title = "Redmi 9 Power (Electric Green, 4GB RAM, 128GB Storage) by Redmi"
                    image =  "https://images-na.ssl-images-amazon.com/images/I/71anKhv48FL._SL1500_.jpg"
                    price = {10999}
                    rating = {4}
                />
               

               
            </div>
            <div className = "home_row">
               
                <Product 
                    title = "Apple iPhone 7 (32GB) - Black"
                    image =  "data:image/webp;base64,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"
                    price = {23990}
                    rating = {4}
                />
               
               
            </div>

            </div>
        </div>
    );
}

export default Home;
