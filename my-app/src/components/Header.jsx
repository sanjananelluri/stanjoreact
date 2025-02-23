import React from "react";
import "./Header.css";

import arrow from "../assests/chevron-down.svg";
import hamburger from "../assests/hamburg.svg";
import facebook from "../assests/facebook.svg";
import instagram from "../assests/Insta.svg";
import loc from "../assests/loc.svg";
import call from "../assests/call.svg";
import mail from "../assests/mail.svg"
import linkedin from "../assests/linked.svg";
import twitter from "../assests/twitter.svg";
import stanjo from "../assests/stanjo.svg";


export const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="contacts-section">
          <div>
            <img src={loc} alt="" />
            Hyderabad, INDIA
          </div>
          <div>
            <img src={call} alt="" />
            +91 6305858219
          </div>
          <div>
            <img src={mail} alt="" />
            info@stanjo.in
          </div>
        </div>
        <div className="socialmedia-icons">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <div className="bottom-header">
        <nav>
          
        </nav>
        <img src={stanjo} alt="fb" className="stanjo-img" />
        <div>Home</div>
        <div>About Us | Certifications</div>
        <div className="products">
          Products
          <img src={arrow} alt=">" />
        </div>
        <div>LM79 Reports</div>
        <div>Shop</div>
        <div>Contact Us</div>
        <div>
          Calculators <img src={arrow} alt=">" />
        </div>
        <div className="header-hamburg">
          <img src={hamburger} alt="menu" />
        </div>
      </div>
    </header>
  );
};