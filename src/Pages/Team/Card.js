import React from "react";
import "./team.css";
import Fontawesome from "react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamCard = ({ name, designation, image, link }) => {

  AOS.init({ duration : 500});

  return (
    <>
      <div className="col-md-4 team-member" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
        <div className="card inner">
          <img src={image}></img>
        </div>
        <div className="card outer">
          <div className="t-name">
            {name}{" "}
            <a href={link}>
              <Fontawesome
                name="linkedin-square"
                style={{ color: "rgb(6 108 134)" }}
              />
            </a>{" "}
          </div>
          <div className="t-designation">{designation}</div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
