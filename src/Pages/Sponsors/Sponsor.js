import React from "react";
import Footer from "../../Footer";
import "./sponsor.css";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
// import SponsorList from "./list";

const Sponsor = () => {
  return (
    <>
      <div className="sponsor" style={{ height: "100%" }}>
        <div className="page-title">SPONSORS</div>
        <br />
        <h1>Coming Soon...</h1>
        {/* <br /> */}
        <h2>Want to collaborate? Interested in sponsoring?</h2>
        <br />

        <h3>WE ARE HERE FOR YOU </h3>
        <br />
        {/* <br /> */}
        <MailIcon fontSize="large" />
        <h5>acm.pict@gmail.com</h5>
        <br />
        <div>
          <PhoneIcon fontSize="large" />
          <h5> Medha Badamikar- 97640 02676</h5>
          <h5>Manasi Hatekar- 99605 02349</h5>
          <h5>Krutika Patil- 95035 39045</h5>
        </div>
        {/* <SponsorList /> */}
      </div>
      <Footer />
    </>
  );
};

export default Sponsor;
