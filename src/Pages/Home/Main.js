import React, { useContext, useEffect } from "react";
import "./Main.css";
import { useHistory } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../context/Auth/AuthContext";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Typography } from "@material-ui/core";

export default function Main() {
  const history = useHistory();
  AOS.init();

  const authContext = useContext(AuthContext);
  const { isAuth } = authContext;
  useEffect(() => {
    window.VANTA.BIRDS({
      el: "#your-element-selector",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: "#000b2b",
      quantity: 3.5,
    });
    window.scrollTo(0, 5000);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  return (
    <>
      <div
        className="main"
        style={{
          maxHeight: "90vh",
        }}
      >
        <div
          id="your-element-selector"
          style={{
            position: "absolute",
            // margin: "0 -5%",
            height: "90vh",
            zIndex: "1",
          }}
        >
          <></>
        </div>
        <div className="homepage-container">
          {/* <div className="spon"></div> */}
          <div className="title text-center">
            <div>
              <img
                src="/Logos/PASC-W.png"
                style={{ height: "20%", width: "20%" }}
                className="title-sponsor"
              />
            </div>
            <div
              style={{ fontSize: "1rem", textAlign: "center", margin: "8px 0" }}
              // className="mt-1 col-md-4"
            >
              presents
            </div>
            <span className="hii">
              Radiance
              <span
                style={{
                  color: "#990090",
                  fontSize: "inherit",
                }}
              >
                '
              </span>
              21
            </span>
          </div>

          <div
            className="subtitle"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            duration="900"
          >
            The Annual Technical Fest of PASC-W
          </div>
          <br />
          <br />
          {/* <Typography
            style={{ color: "#fff", marginTop: -20, fontWeight: "600" }}
            className="copoweredByText"
          >
            co-powered by
          </Typography>
          <div
            className="row d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            duration="900"
          >
            <div className="col-sm-2 col-md-3 py-3">
              <img
                src="/Logos/Nitor Infotech.png"
                width="60%"
                className="copoweredBy"
              />
            </div>
            <div className="col-sm-2 col-md-3 py-3">
              <img
                src="/Logos/iMocha.png"
                width="60%"
                className="copoweredBy"
              />
            </div>
            <div className="col-sm-2 col-md-3 py-3">
              <img
                src="/Logos/iMocha.png"
                width="60%"
                className="copoweredBy"
              />
            </div>
            <div className="col-sm-2 col-md-3 py-3">
              <img
                src="/Logos/iMocha.png"
                width="60%"
                className="copoweredBy"
              />
            </div>
          </div>
           */}
          <div className="reg-btn">
            <button
              className="shrink-border"
              onClick={() => {
                isAuth ? history.push("/myevents") : history.push("/login");
              }}
            >
              {isAuth ? (
                <>
                  MY EVENTS <ArrowForwardIosIcon />
                </>
              ) : (
                <>
                  REGISTER NOW! <ArrowForwardIosIcon />
                </>
              )}
            </button>
          </div>
          <div
            className="coming-soon"
            //   data-aos="fade-up"
            //   data-aos-offset="150"
            //   data-aos-easing="ease-in-sine"
            //   duration="900"
            //   style={{ marginTop: "35%", fontSize: "1.5rem" }}
          >
            3rd, 4th, 5th September 2021
          </div>
        </div>
      </div>
    </>
  );
}
