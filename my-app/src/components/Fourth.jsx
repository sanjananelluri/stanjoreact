import React from 'react';
import "./Header.css";
import warmCool from "../assests/warmCool.jpg";
import brightness from "../assests/brightness.jpg";
import differentRooms from "../assests/differentRooms.jpg";
const LightingPreview = () => {
  return (
    <div className="fourth-container">
        <div className="fourth-text">
            <h1 >Not Sure Which Light to <br />Choose? Experience It First!</h1>
            <p><b> Still deciding? Our Virtual Lighting Preview lets you see how different lights fit<br /> your space before buying.</b></p>
        </div>
        <div className="image-container">
  <div className="image-box" style={{ backgroundImage: `url(${warmCool})` }}>
    <div className="fourth-content-overlay">
      <h2 className="innovative-heading">Test Warm<br /> vs.Cool <br /> tones</h2>
      <p className="innovative-description">Experience the perfect lighting balance in your space.</p>
    </div>
  </div>
  <div className="image-box" style={{ backgroundImage: `url(${brightness})` }}>
    <div className="fourth-content-overlay">
      <h2 className="innovative-heading">Adjust <br /> Brightness <br /> levels</h2>
      <p className="innovative-description">Adjust brightness levels to suit your mood.</p>
    </div>
  </div>
  <div className="image-box" style={{ backgroundImage: `url(${differentRooms})` }}>
    <div className="fourth-content-overlay">
      <h2 className="innovative-heading">Try it  in<br /> Different <br/> Rooms</h2>
      <p className="innovative-description">Custom lighting options for every room.</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default LightingPreview;