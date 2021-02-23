import React, { useEffect, useLayoutEffect, useState } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./numbers.css";
import ReactCountUp from "react-countup-v2";
import Fontawesome from "react-fontawesome";

const Number = ({ number, name, icon }) => {
  return (
    <>
      {/* <div className="col-4"> */}
      <div
        className="loading"
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        duration="900"
      >
        <div className="dots">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="numbers">
          <ReactCountUp delay={100} endVal={number} />
        </div>
        <div className="name">{name}</div>

        {/* </div> */}
      </div>
    </>
  );
};

const About = () => {
  AOS.init();
  return (
    <>
      <div className="about">
        <div
          className="text-center mb-5 About-Us page-title"
          // data-aos="fade-up" // data-aos-offset="150" //
          //data-aos-easing="ease-in-sine" // duration="900"
        >
          ABOUT PULZION
        </div>
        <div className="row mx-0 mt-5 ">
          <div className="col-md-6 mt-5">
            <div className="row number text-center">
              <Number number="300" name="Volunteers" icon="user-circle-o" />
              <Number number="16" name="Events" icon="calendar-check-o" />
              <Number number="6000" name="Footfall" icon="users" />
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div
              className="about-desc"
              data-aos="fade-down"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine"
              duration="900"
            >
              Pulzion is the annual technical fest organized by PICT ACM Student
              Chapter. Pulzion has hosted multmiple events including coding
              competition ranging from amateur competitions two day-long as well
              as mock placements, business management based and quizzing events.
              It has become one of the most anticipated events taking place at
              PICT with participants from colleges all over Pune. With high
              aspirations, backed with sincerity and dedication, the PASC team
              aims to add value to the college and all the people in it.
            </div>
            <div className="about-link text-right">
              {/* <a href="/about">
                Know more <Fontawesome name="angle-right" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
