import React from 'react';
import "./Header.css"; // Import your CSS file
import screen3 from "../assests/Group 3.svg";// Import the image

function Third() {
  return (
    <div className="third-container">
      {/* Heading Content Above the Image */}
      <div className="heading-container">
        <h1>Choose the Perfect</h1>
        <h1>Light for Your Space</h1>
        <h4>Explore Our Best-Selling LED Solutions</h4>
      </div>

      {/* Image and Right Side Content */}
      <div className="content-wrapper">
        {/* Image on the Left */}
        <div className="image-container">
          <img 
            src={screen3} 
            alt="screen3" 
            className="cieling-lights-image"
          />
        </div>

        {/* Content on the Right */}
        <div className="right-content">
          
          <div className="led-panel-lights">
            <h3>LED Panel Lights</h3>
            <p>Sleek, stylish, and perfect for modern interiors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;