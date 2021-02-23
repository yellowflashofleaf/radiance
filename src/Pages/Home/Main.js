import React, {useContext, useEffect} from "react";
import "./Main.css";
import {useHistory} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {AuthContext} from "../../context/Auth/AuthContext";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Main() {
    const history = useHistory();
    AOS.init();

    const authContext = useContext(AuthContext);
    const {isAuth} = authContext;
    useEffect(() => {
        window.VANTA.GLOBE({
            el: "#your-element-selector",
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 300.0,
            minWidth: 300.0,
            width: "98vw",
            height: "90vh",
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xe4ff,
            color2: 0x92c3c3,
            backgroundColor: 0x0,
        });
    }, []);

    return (
        <>
            {/* <div className="home-img-mob">
        <img src={Part} className="img-fluid"/>
        </div> */}

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
                ></div>
                <div className="title" style={{zIndex: "10", position: "absolute"}}>
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
                >
                    The Annual Technical Fest of PASC
                </div>
                <div
                    className="reg-btn"
                    data-aos="flip-up"
                    data-aos-offset="150"
                    data-aos-easing="ease-in-sine"
                    duration="900"
                    style={{position: "absolute", zIndex: "10", marginTop: "20%"}}
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
                                MY EVENTS <ArrowForwardIosIcon/>
                            </>
                        ) : (
                            <>
                                REGISTER NOW! <ArrowForwardIosIcon/>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </>
    );
}
