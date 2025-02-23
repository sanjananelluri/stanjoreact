import React from "react";
import "./Header.css";
import facebook from "../assests/facebook.svg";
import instagram from "../assests/Insta.svg";
import loc from "../assests/loc.svg";
import call from "../assests/call.svg";
import mail from "../assests/mail.svg"
import linkedin from "../assests/linked.svg";
import twitter from "../assests/twitter.svg";
import stanjo from "../assests/stanjo.svg";
export default function Footer() {
  return (
    <div className="footer-head">
      <div className="footer-left">
      <img src={stanjo} alt="fb" className="stanjo-img" />
        <h4>Lighting Your World with Innovation and Efficiency</h4>
        <div>
          <div className="footer-contact-details">
            <img src={loc} alt="fb" />
            Hyderabad, India
          </div>
          <div className="footer-contact-details">
            <img src={call} alt="fb" />
            +91 6305858219
          </div>
          <div className="footer-contact-details">
            <img src={mail} alt="fb" />
             info@stanjo.in
          </div>
        </div>
        <div className="socialmedia-icons">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="facebook" />
          <img src={linkedin} alt="facebook" />
          <img src={twitter} alt="facebook" />
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-products">
            <h5>PRODUCTS</h5>
            <div>Panel Lights</div>
            <div>Flood Lights</div>
            <div>Street Lights</div>
            <div>Downlights</div>
            <div>LED Indoor Lights</div>
            <div>LED Outdoor Lights</div>
            <div>Tubelights & Bulbs </div>
        </div>
        <div className="footer-others">
            <h5>OTHERS</h5>
            <div>About</div>
            <div>Products Gallery</div>
            <div>Caluclators</div>
            <div>Contact Ust</div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
}