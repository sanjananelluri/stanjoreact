import React from 'react';
import './Header.css'; 
import explore from "../assests/explore.jpg"; // Import the image 

function Second() {
  return (
    <div className="stanjo-container">
      <div className="stanjo-content">
        <h1>Welcome to Stanjo
        <br/>- Lighting the Way
        Forward Brighter.</h1>
        
        <p>
          At Stanjo, we believe lighting is more than just illumination—it's about enhancing spaces, creating ambiance, and delivering unmatched efficiency. Our mission is to provide high-quality, energy-efficient LED lighting solutions that blend innovation, durability, and style to brighten homes, offices, and outdoor spaces.
        </p>
        <button className="explore-button">Explore Collection</button>
      </div>
      <div className="right-image">
         <h2 className="brighter-text">Brighter. <br /> Smarter. <br /> Built to Last</h2>
         <img src={explore} alt="explore" />
      </div>
    </div>
  );
}

export default Second;