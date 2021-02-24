import React from "react";
import Footer from "../../Footer";
import "./sponsor.css";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

const Sponsor = () => {
    return (
        <>
            <div className="sponsor" style={{height: "70vh"}}>
                <div className="page-title">SPONSORS</div>
                <br/>
                <h1>Coming Soon...</h1>
                <br/><br/><br/><br/>
                <h3>Want to collaborate? Interested in sponsoring?</h3>
                <br/>
                <h4>WE ARE HERE FOR YOU </h4>
                <br/><br/>
                <MailIcon fontSize="large"/>
                <h5>
                    {"  "}
                    acm.pict@gmail.com
                </h5>
                <div>
                    <PhoneIcon fontSize="large"/> {"  "}
                    <h5> Pranav Kadam- 94040 94923</h5>
                    <h5>
                        {"  "}
                        Aditya Avhad- 88886 18192
                    </h5>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Sponsor
