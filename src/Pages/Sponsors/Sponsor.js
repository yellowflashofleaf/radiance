import React from "react";
import Footer from "../../Footer";
import "./sponsor.css";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import SponsorList from "./list";

const Sponsor = () => {
  return (
    <>
      <div className="sponsor" style={{ height: "100%" }}>
        <div className="page-title">SPONSORS</div>
        <br />
        {/* <h1>Coming Soon...</h1>
                <br/>
                <h2>Want to collaborate? Interested in sponsoring?</h2>
                <br/>

                <h3>WE ARE HERE FOR YOU </h3>
                <br/><br/>
                <MailIcon fontSize="large"/>
                <h5>
                    {"  "}
                    acm.pict@gmail.com
                </h5>
                <br/>
                <div >
                    <PhoneIcon fontSize="large"/> {"  "}
                    <h5> Pranav Kadam- 94040 94923</h5>
                    <h5>
                        {"  "}
                        Aditya Avhad- 88886 18192
                    </h5>
                </div> */}
        <SponsorList />
      </div>
      <Footer />
    </>
  );
};

export default Sponsor;
