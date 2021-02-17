import React, {useLayoutEffect, useState} from "react";
import './style.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-particles-js";

const Link = ({linkto, href}) => {
    return (
        <>
            <div className="spinner-box" data-aos="zoom-in-down" data-aos-offset="150" data-aos-easing="ease-in-sine"
                 duration="900">
                <div className="linkto"><a href={href}>{linkto}</a></div>

                <div className="solar-system">
                    <div className="earth-orbit orbit">
                        <div className="planet earth"></div>
                        <div className="venus-orbit orbit">
                            <div className="planet venus"></div>
                            <div className="mercury-orbit orbit">
                                {/* <div className="planet mercury"></div> */}
                                <a href={href}>
                                    <div className="sun"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Links = () => {

    return (
        <>
            <div>
                <div className="about-title" data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine"
                     duration="900">EXPLORE PULZION
                </div>
                <div className="links">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <Link linkto="Events" href="/events"/>
                        </div>
                        <div className="col-md-4 text-center">
                            <Link linkto="Sponsors" href="/sponsors"/>
                        </div>
                        <div className="col-md-4 text-center">
                            <Link linkto="Team" href="/team"/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Links