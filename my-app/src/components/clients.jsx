import React from 'react'
import "./Header.css";
import AP from "../assests/AP.svg";
import TG from "../assests/TG.svg";
import YL from "../assests/YL.svg";
import GT from "../assests/GT.svg";
import YR from "../assests/YR.svg";
import tata from "../assests/tata.svg";
import lT from "../assests/l&T.svg";
import PG from "../assests/PG.svg";
import sccl from "../assests/sccl.svg";
import ncc from "../assests/ncc.svg";
import srr from "../assests/srr.svg";
export const Clients = () => {
  return (
    <div class="about-clients">
      <div class="clients-heading">
        <h1>Trusted by Leading <br/>
        Business and Industries</h1>
        <h6>Partneing with top brands to deliver reliable,energy-efficient<br/>
        lightning solutions for every space</h6>
      </div> 
      <div class="row-1">
            <div class="clients-image">
                <img src={AP} alt="" />
            </div>
            <div class="clients-image">
                <img src={TG} alt="" />
            </div>
            <div class="clients-image">
                <img src={YL} alt="" />
            </div> 
            <div class="clients-image">
                <img src={GT} alt="" />
            </div>
            <div class="clients-image">
                <img src={YR} alt="" />
            </div>
            <div class="clients-image">
                <img src={tata} alt="" />
            </div>
      </div> 
      <div class="row-2">
        <div class="client-image">
            <img src={lT} alt="" />
        </div>
        <div class="client-image">
            <img src={PG} alt="" />
        </div>
        <div class="client-image">
            <img src={sccl} alt="" />
        </div>
        <div class="client-image">
            <img src={ncc} alt="" />
        </div>
        <div class="client-image">
            <img src={srr} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Clients;