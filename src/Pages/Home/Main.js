import React, {useEffect} from "react";
import "./Main.css";
import main from "../../Bg/home-blo-cyber-ecurity (1).png";
import Part from "../../Bg/part.png";
import {useHistory} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
    const history = useHistory();
    AOS.init();

    useEffect(() => {
        window.VANTA.GLOBE({
            el: "#your-element-selector",
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 500.0,
            minWidth: 500.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3fffe6,
            color2: 0xe1ff,
            backgroundColor: 0x0,
        });
    }, []);

    return (
        <>
            {/* <div className="home-img-mob">
        <img src={Part} className="img-fluid"/>
        </div> */}

            <div className="main">
                <div
                    id="your-element-selector"
                    style={{
                        position: "absolute",
                        margin: "0 -5%",
                        height: "100vh",
                        zIndex: "1",
                        width: "100vw",
                    }}
                ></div>
                <div
                    className="title"
                    style={{zIndex: "10000", position: "absolute"}}
                >
                    PULZION
                    <span
                        style={{
                            color: "rgba(22, 164, 189, 0.9)",
                            fontSize: "inherit",
                        }}
                    >
            '
          </span>
                    21
                </div>
                {/* <div style={{ zIndex: "10000", position: "absolute" }}>
          <img
            style={{ zIndex: "10000", width: "40vw", marginTop: "15%" }}
            src="./p21.png"
          />
        </div> */}
                <div
                    className="subtitle"
                    data-aos="fade-up"
                    data-aos-offset="150"
                    data-aos-easing="ease-in-sine"
                    duration="900"
                    style={{position: "absolute", zIndex: "10000", marginTop: "15%"}}
                >
                    The Annual Technical Fest of PASC
                </div>
                <div
                    className="reg-btn"
                    data-aos="flip-up"
                    data-aos-offset="150"
                    data-aos-easing="ease-in-sine"
                    duration="900"
                    style={{position: "absolute", zIndex: "10000", marginTop: "20%"}}
                >
                    <button
                        className="shrink-border"
                        onClick={() => history.push("/login")}
                    >
                        {" "}
                        REGISTER NOW!
                    </button>
                </div>
            </div>
        </>
    );
}
