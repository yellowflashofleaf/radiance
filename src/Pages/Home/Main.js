import React, { useEffect } from "react";
import "./Main.css";
import main from '../../Bg/home-blo-cyber-ecurity (1).png'
import Part from '../../Bg/part.png'
import { useHistory } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  
  const history = useHistory()
  AOS.init();

  return (
    <>
        
        <div className="home-img-mob">
        <img src={Part} className="img-fluid"/>
        </div>

      <div className="main">
            <div className="title">PULZION<span style={{color:"red", fontSize:"inherit"}}>'</span>20</div>
            <div className="subtitle" data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine" duration="900">The Annual Technical fest of PASC</div>
        <div className="reg-btn" data-aos="flip-up" data-aos-offset="150" data-aos-easing="ease-in-sine" duration="900">
        <button className="shrink-border" onClick={() => history.push('/login')}> REGISTER NOW!</button>
        </div>

        
      </div>
      
      
    </>
  );
}
