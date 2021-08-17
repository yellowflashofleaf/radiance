import React from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./numbers.css";
import ReactCountUp from "react-countup-v2";

const Number = ({ number, name }) => {
  return (
    <>
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
      </div>
    </>
  );
};

const About = () => {
  AOS.init();
  return (
    <>
      <div className="about">
        <div className="text-center mb-5 About-Us page-title">
          ABOUT RADIANCE
        </div>
        <div className="row mx-0 mt-5 ">
          <div className="col-md-6 mt-5">
            <div className="row number text-center">
              <Number number="300" name="Volunteers" icon="user-circle-o" />
              <Number number="8" name="Events" icon="calendar-check-o" />
              <Number number="2000" name="Footfall" icon="users" />
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
              Radiance is hosted by PICT ACM-Women Student Chapter, RADIANCE is
              our most spirited event which consists of a variety of technical
              and non-technical events, giving students an all-around experience
              beyond the syllabus. This event spotlights the achievements of
              women in STEM fields. The idea behind RADIANCE was to highlight
              the triumph of women who emerged victorious against the long and
              arduous journey of ups and downs. Since it is an event organized
              and managed by the PASC-W team, it provides opportunities for
              women to hone not only their technical expertise but also their
              management skills. During the last event, we experienced a
              footfall of 2000+ individuals in RADIANCE and are anticipating
              enthusiastic participation this year as well.
            </div>
            <div className="about-link text-right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
