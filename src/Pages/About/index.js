import React from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./numbers.css";
import ReactCountUp from "react-countup-v2";

const Number = ({number, name}) => {
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
                    <ReactCountUp delay={100} endVal={number}/>
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
                <div
                    className="text-center mb-5 About-Us page-title"
                >
                    ABOUT PULZION
                </div>
                <div className="row mx-0 mt-5 ">
                    <div className="col-md-6 mt-5">
                        <div className="row number text-center">
                            <Number number="300" name="Volunteers" icon="user-circle-o"/>
                            <Number number="16" name="Events" icon="calendar-check-o"/>
                            <Number number="6000" name="Footfall" icon="users"/>
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
                            Pulzion is the annual flagship event organized by PICT ACM Student Chapter (PASC). Pulzion consists of multiple events in technical as well as non-technical domains including coding competitions, mock placement interviews, business management-based events, design and development based contests and quizzing events. It is one of the most anticipated events taking place at PICT. This year, Pulzion is going global to encourage students of varied backgrounds to participate and compete. With sincerity, dedication and high aspirations, our chapter hopes to add value to our college and the community.
                        </div>
                        <div className="about-link text-right">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
