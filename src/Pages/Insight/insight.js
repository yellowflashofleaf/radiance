import React from "react";
import Footer from "../../Footer";
import "./insight.css";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

const Insight = () => {
  return (
    <>
      <div className="sponsor" style={{ height: "100%" }}>
        <div className="page-title">INSIGHT</div>
        <br />
        <h1>HOLA!!!</h1>
        <br />
        <h2>Glad you are here!</h2>
        <br />

        <h3>Entries will be accepted from 27th February...</h3>
        <br />
        <br />

        <h5>
          {"  "}
          Haven't registered yet?{" "}
          <a
            href="/events"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#990090",
            }}
          >
            Register Now
          </a>
        </h5>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Insight;
