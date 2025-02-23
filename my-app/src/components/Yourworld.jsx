import React from 'react'
import "./Header.css";
import hall from "../assests/hall.jpeg";
export default function Yourworld() {
  return (
    <div className='Innovation-main'>
      <img src={hall} alt="menu" />
      <div className='innovation-content'>
        <div className='innovative-heading'>Lighting Your World with Innovation and Efficiency</div>
        <div className='innovative-description'>We Provide High-Performance LED Lights for Every Need</div>
        <div className='innovative-buttons'>
          <button className='shop-button'>Shop Now</button>
          <button className='innovation-explore-button'>Explore Products</button>

        </div>
      </div>
    </div>
  )
}