import React from "react";
import "./Main.css";
import diamondPattern from "./diamond-about.svg";
import img3 from "./images/Acm img.png";
import img2 from "./images/Acmw img.png";
import img1 from "./images/Pasc img.png";
import * as R from "./index2";
import { IoLocationSharp } from "react-icons/io5";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <>
      <div className="main-about mt-5">
        <section id="container-about main-h1-section">
          <div className="main-h1-div ">
            <h1 className="About-Us page-title mb-5">ABOUT US</h1>
          </div>
        </section>
        <br />
        <section id="pasc-acm-acmw-section mt-5">
          <div className="container-about pasc-acm-acmw-div-container">
            <div className="row pasc-acm-acmw-div-row">
              <div className="col-lg-4">
                <div className="about-div">
                  <img className="pasc-img" src={img1} alt="" />
                  <h2 className="header haeder-block my-3">
                    <b>PASC</b>
                  </h2>
                  <p className="about-text">
                    PICT ACM Student's Chapter (PASC) is the most active ACM
                    chapter in India.
                  </p>
                  <p className="about-text">#UnitedWeStand</p>
                  <p className="about-text">
                    At PASC, we all work together, as a team. We take utmost
                    efforts for the success of each and every member of PASC.{" "}
                    <span className="dots1">...</span>
                    <span id="more1">
                      We help them to achieve not only technical superiority but
                      also bring the best out of them in Non-technical fields as
                      well so that they become the pioneers of today's world.
                      Since, we at PASC bring our Motto into reality, last year
                      we were honored as the BEST ACM STUDENT CHAPTER IN INDIA.
                    </span>
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark btn-1"
                    onClick={R.btn_1}
                  >
                    Know More
                  </button>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="about-div">
                  <img className="acmw-img" src={img2} alt="" />
                  <h2 className="header haeder-block my-3">
                    <b>ACM-W </b>
                  </h2>
                  <p className="about-text">
                    With the objective to support and celebrate the full
                    engagement of women in all aspects of computing field, we
                    conducted an event ACM Pune ‘Celebration of Women in
                    Computing’ (APCWIC-2018) in association with ACM-W India and
                    ACM Pune Professional Chapter.{" "}
                    <span className="dots2">...</span>{" "}
                    <span id="more2">
                      This was the first edition and it was held at PICT, Pune.
                      We organized this event to provide a platform to women
                      professionals and girl students for interaction with
                      eminent individuals from the industry as well as academia,
                      where in they learned about the various challenges and how
                      one can overcome them
                    </span>
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark btn-2"
                    onClick={R.btn_2}
                  >
                    Know More
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-div">
                  <img className="acm-img" src={img3} alt=""></img>
                  <h2 className="header haeder-block my-3">
                    <b>ACM</b>
                  </h2>
                  <p className="about-text">
                    The Association for <br /> Computing Machinery (ACM) is the
                    world’s largest educational and scientific society uniting
                    professionals, educators and researchers in the field of
                    computer science to inspire dialogue, share resources and
                    address the challenges in the domain. The purpose of this{" "}
                    <span className="dots3">...</span>
                    <span id="more3">
                      {" "}
                      organization is to advance the scientific development,
                      construction and application of the new machinery for
                      computing, reasoning, and handling of information. The
                      mission is to offer the students an opportunity to learn,
                      innovate and grow into intellectuals, visionaries and
                      technocrats, who contribute to promoting the advancements
                      in science and technology. The ACM India Council is an
                      effort of ACM aimed at improving the level of ACM
                      activities across the country. The ACM India Council
                      comprises a cross-section of the Computer Science and
                      Information Technology communities committed to increasing
                      the visibility and relevance <br /> of ACM in India.
                    </span>
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark btn-3"
                    onClick={R.btn_3}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" py-5 mb-1">
          <div className="container-about ">
            <h1 className="Header Contact-Us page-title">
              <b>CONTACT US</b>
            </h1>
          </div>

          <div className="container-about">
            <div className=" row ">
              <div className="address-content  col-lg-4 header">
                <IoLocationSharp size={30} />
                <h2>Address</h2>

                <h5>Pune Institute of Computer Technology,</h5>
                <h5>Behind Bharati Vidyapeeth University,</h5>
                <h5>Dhankawadi, Pune,</h5>
                <h5>Maharashtra-411043</h5>
              </div>
              <div className="container-about col-lg-4 contact-us-container">
                <div className="contact-us-text">
                  <MailIcon fontSize="large" />
                  <h5>
                    {"  "}
                    acm.pict@gmail.com
                  </h5>
                  <div className="my-3">
                    <PhoneIcon fontSize="large" /> {"  "}
                    <h5> Jinesh Parakh - 93700 62436</h5>
                    <h5>
                      {"  "}
                      Atharv Chavan - 97650 62678
                    </h5>
                  </div>

                  <a
                    className="social m-3"
                    target="_blank"
                    href="https://www.linkedin.com/company/pict-acm-student-chapter/"
                  >
                    <LinkedInIcon className="icon" fontSize="large" />
                  </a>
                  <a
                    className="social m-3"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href="https://www.instagram.com/acm.pict/"
                  >
                    <InstagramIcon className="icon" fontSize="large" />
                  </a>
                  <br />
                  <a
                    className="social m-3"
                    target="_blank"
                    href="https://www.facebook.com/acmpict/"
                  >
                    <FacebookIcon className="icon" fontSize="large" />
                  </a>
                  <a
                    className="social m-3"
                    target="_blank"
                    href="https://twitter.com/_pict_acm_"
                  >
                    <TwitterIcon className="icon" fontSize="large" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 address-content">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.304757794562!2d73.8508336!3d18.4575421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1607946113596!5m2!1sen!2sin"
                  width="290"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title={"map"}
                ></iframe>
              </div>
            </div>
          </div>
          <div className="diamond-pattern-about">
            <img src={diamondPattern} width={"100%"} height={"100%"} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
