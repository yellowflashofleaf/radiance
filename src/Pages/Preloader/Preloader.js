import React from "react";
import "./Preloader.css";
import Particles from "react-particles-js";
import AOS from "aos";

const Preloader = () => {
  AOS.init();
  return (
    <div className="preloader">
      <div
        style={{
          marginTop: "20vh",
        }}
        data-aos="zoom-in"
      >
        <div
          className="page-title"
          style={{
            textAlign: "center",
            fontFamily: '"Montserrat", sans-serif !important',
          }}
        >
          PICT ACM STUDENT CHAPTER - Women in Computing
          <br /> PRESENTS
        </div>
        <div className="loader-container">
          <img src="/radiance_logo_color.png" alt="logo" />
        </div>
      </div>
      {/* <div className="spinner-box-loader">
        <div className="blue-orbit-loader leo-loader"></div>

        <div className="green-orbit-loader leo-loader"></div>

        <div className="red-orbit-loader leo-loader"></div>

        <div className="white-orbit-loader w1-loader leo-loader"></div>
        <div className="white-orbit-loader w2-loader leo-loader"></div>
        <div className="white-orbit-loader w3-loader leo-loader"></div>
      </div> */}
      <Particles
        style={{ position: "absolute", top: "0", height: "100%" }}
        params={{
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#00f0ff" },
            shape: {
              type: "edge",
              stroke: { width: 1, color: "#ff020271" },
              polygon: { nb_sides: 2 },
              // image: { src: "img/github.svg", width: 300, height: 300 },
            },
            opacity: {
              value: 0.2,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
            },
            size: {
              value: 12,
              random: true,
              anim: { enable: false, speed: 0, size_min: 0.3, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 56.14460148062693,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: false,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 600 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "bubble" },
              onclick: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default Preloader;
