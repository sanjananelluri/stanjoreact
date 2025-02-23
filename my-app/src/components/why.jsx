import React from 'react'
import "./Header.css";
import facebook from "../assests/facebook.svg";
import bestseller from "../assests/best-seller.svg";
import technology from "../assests/technology.svg";
import ledbulb from "../assests/led-bulb.svg";
import loyalCustomer from "../assests/loyal-customer.svg";
export  const Why = () => {
  return (
    <div class="features">
    <div class="why">    
        <h1>WHY CHOOSE STANJO?</h1>
        <h4>Premium Quality. Stunning Performance. Unmatched Value</h4>
    </div>

    <div class="images-row">
        <div class="images">
            <img src={bestseller} alt="" />
            <h3>High-Quality LED Technology</h3>
            <h6>Discover advanced LED lighting that delivers exceptional brightness and durability</h6>     
        </div> 
        <div class="images">
            <img src={technology} alt="" />
            <h3>Energy-efficient Savings</h3>
            <h6>Reduce your power bills without compromising on brightness or performance</h6>     
        </div>  
        <div class="images">
            <img src={ledbulb} alt="" />
            <h3>Elegant and Modern Designs</h3>
            <h6>Enhance your space with sleek, stylish lighting solutions that elevate any room</h6>     
        </div>  
        <div class="images">
            <img src={loyalCustomer} alt="" />
            <h3>Trusted by Thousands</h3>
            <h6>Join thousands of satisfied customers who trust our reliable and long-lasting LED lights</h6>     
        </div>
    </div>

    <div class="images-row">
        <div class="images-bottom">
            <img src={bestseller} alt="" />
            <h3>Longest Warranty</h3> 
            <h6>Enjoy peace of mind with our industry-leading warranty, ensuring your lights last for years to come</h6>      
        </div> 
        <div class="images-bottom">
            <img src={technology} alt="" />
            <h3>Low Cost of Ownership</h3> 
            <h6>Save on energy bills and maintenance costs with our affordable, durable LED lighting solutions</h6>      
        </div> 
        <div class="images-bottom">
            <img src={ledbulb} alt="" />
            <h3>Bright For Longer</h3> 
            <h6>Experience consistent, high-quality brightness with LED lights designed to last longer and shine brighter</h6>      
        </div> 
    </div> 
    </div>
    )
}

export default Why;