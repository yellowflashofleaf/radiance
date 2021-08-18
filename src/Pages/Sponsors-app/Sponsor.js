import React from "react";
import Footer from "../../Footer";
import "./sponsor.css";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import SponsorList from "../Sponsors/list";

const AppSponsor = () => {
  return (
    <>
      <div
        style={{
          background: "url('./app-bg.jpeg')",
          backgroundSize: "cover",
          paddingTop: "25vh",
          position: "fixed",
          top: "0",
          width: "100vw",
          zIndex: "5000",
          minHeight: "100vh",
          overflow: "auto",
        }}
      ></div>
      {/* <div className="page-title">SPONSORS</div>
        <br /> */}
      {/* <h1>Coming Soon...</h1>
        <br />
        <h2>Want to collaborate? Interested in sponsoring?</h2>
        <br />

        <h3>WE ARE HERE FOR YOU </h3>
        <br />
        <br />
        <MailIcon fontSize="large" />
        <h5>
           
          acm.pict@gmail.com
        </h5>
        <br />
        <div>
          <PhoneIcon fontSize="large" />  
          <h5> Pranav Kadam- 94040 94923</h5>
          <h5>
             
            Aditya Avhad- 88886 18192
          </h5>
        </div> */}
      <div
        className="sponsor"
        style={{
          paddingTop: "10vh",
          // width: "100vw",
          zIndex: "9999",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SponsorList />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AppSponsor;
