import React from "react";
import "./team.css";
import Fontawesome from "react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamCard = ({name, designation, image, link}) => {
    AOS.init({duration: 500});

    return (
        <>
            <div className="col-md-4">
                <div className="team-member">
                    <img src={image} alt={name}></img>
                    <div className="Ellipse_1_copy_5"></div>
                    <div className="Ellipse_1_copy_4"></div>
                    <div className="Ellipse_1_copy_3"></div>
                    <div className="Ellipse_1_copy_2"></div>
                    <div className="Ellipse_1_copy"></div>
                </div>

                <div className="t-name">
                    {name}{" "}
                    <a href={link}>
                        <Fontawesome
                            name="linkedin-square"
                            style={{color: "rgb(6 108 134)"}}
                        />
                    </a>{" "}
                </div>
                <div className="t-designation">{designation}</div>
            </div>
        </>
    );
};

export default TeamCard;
