import React from 'react';
import './Home.css';
import Product from "./Product.js";

function Home() {
    return (
        <div className = "home">
            <div className= "home_container">
                <img className = "home_image"
                    src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_G17/GW_Hero/New_Color/D19646901_IN_WL_Mi_G71_Launch_DesktopTallHero_1500x600_C3._CB412973269_.jpg"
                   //src = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Sravanthi/MegaSalaryDays_Jan21/Salary-days-Jan-2021-herotator_1500x600._CB412648388_.jpg"
                   //src  = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                   //src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro/Dec/Last_Week/V184735168_WLM_Redmi_Note9Pro_DesktopTallHero_1500x600._CB412535135_.jpg" 
                   // src = "https://images-eu.ssl-images-amazon.com/images/G/31/Watches/WatchoutsaleDec2020/GWBANNERS/1500x600._CB412869810_.jpg"
                   //src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/MI_Laptops/MI_Notebook_Fest_Dec_2020/S2/ingress/Mi_NoteBook_Sale_Banners_1500X300.jpg"
                   alt = " "
                />
            <div className = "home_row">
                <Product 
                id = "0"
                title  = "HP 14 10th Gen Intel Core i5 14-inch HD Laptop."
                
                price  = {47490}
                rating  = {5}
                image = "https://images-eu.ssl-images-amazon.com/images/I/41rS468sC2L._AC_US160_FMwebp_QL70_.jpg"   

                />
                <Product 
                    id =  "1"
                    title  = "Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop"
                    
                    price = {43999}
                    rating =  {4}
                    image = "https://images-eu.ssl-images-amazon.com/images/I/41VYtP5KUHL._AC_US160_FMwebp_QL70_.jpg"

                />
               
                
              
            </div>
            <div className = "home_row">
                <Product 
                    id = "2"
                    title = "Redmi 9 Power  by Redmi"
                    
                    price = {10999}
                    rating = {4}
                    image =  "https://m.media-amazon.com/images/I/41+aHRW9EqL.jpg"
                />
                <Product 
                title = "Redmi 9 Prime "
                    id = "3"
                    price = {9999}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/41S3ERlmEgL.jpg" 

                />
                 <Product 
                    title = "OnePlus Nord 5G by OnePlus"
                    id = "4"
                    price = {29999}
                    rating = {4}
                    image =  "https://m.media-amazon.com/images/I/41+aHRW9EqL.jpghttps://m.media-amazon.com/images/I/410wqzkz4QL.jpg"
                />
               

               
            </div>
            <div className = "home_row">
               
                <Product 
                    title = "Samsung 34-inch Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
                    id = "5"
                    price = {81000}
                    rating = {4}
                    image =  "https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
                />
               
               
            </div>

            </div>
        </div>
    );
}

export default Home;
