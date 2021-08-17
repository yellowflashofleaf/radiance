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
    // window.VANTA.GLOBE({
    //   el: "#your-element-selector",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: true,
    //   minHeight: 300.0,
    //   minWidth: 300.0,
    //   width: "98vw",
    //   height: "90vh",
    //   scale: 1.0,
    //   scaleMobile: 1.0,
    //   color: 0xe4ff,
    //   color2: 0x92c3c3,
    //   backgroundColor: 0x0,
    // });
    // window.scrollTo(0, 5000);
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 500);
  }, []);

  return (
    <>
      <div
        className="main"
        style={{
          maxHeight: "90vh",
          overflow: "hidden !important",
        }}
      >
        <div
          id="your-element-selector"
          style={{
            position: "absolute",
            margin: "0 -5%",
            height: "90vh",
            zIndex: "1",
          }}
        >
          <></>
        </div>
        <div className="spon"></div>
        <div className="title" style={{ zIndex: "10", position: "absolute" }}>
          <div className="col-md-4 p-3 text-center">
            <img src="/Logos/GigIndia_horiz.png" />
          </div>
          <div
            style={{ fontSize: "1rem", textAlign: "center" }}
            className="mt-1 col-md-4"
          >
            presents
          </div>
          <span className="hii">
            Radiance
            <span
              style={{
                color: "rgba(22, 164, 189, 0.9)",
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

        <div
          className="subtitle row"
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          duration="900"
        >
          <Typography style={{ color: "#fff", paddingLeft: 0 }}>
            co-powered by
          </Typography>
          <div className="col-sm-2 py-3 text-center">
            <img src="/Logos/Nitor Infotech.png" />
          </div>
          <div className="col-sm-2 py-3 text-center">
            <img src="/Logos/iMocha.png" />
          </div>
        </div>
        <div
          className="reg-btn"
          style={{ position: "absolute", zIndex: "10", marginTop: "20%" }}
        >
          <button
            className="shrink-border"
            onClick={() => {
              isAuth ? history.push("/myevents") : history.push("/login");
            }}
          >
            {" "}
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
          4th, 5th, 6th September 2021
        </div>
      </div>
    </>
  );
}
