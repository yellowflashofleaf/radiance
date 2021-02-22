// import Link from "next/link";
import React from "react";
import PopUp from "./PopUp";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const Card = (props) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    return (
        <>
            <PopUp
                {...props}
                id={props._id}
                open={isModalOpen}
                toggle={setIsModalOpen}
            />
            <div className="col-md-3">
                <div className="card e-card gradient-border" onClick={() => setIsModalOpen(true)}>
                    <img
                        src={props.image}
                        alt="event img"
                    />
                    <div className="e-card-text text-center">
                        {/* <p>
            {props.content ||
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nulla autem ratione commodi exercitationem esse dignissimos nihil eos.Cumque consequuntur doloremque velit totam"}
          </p> */}
                        <div className="e-card-buttons"
                             style={{
                                 minWidth: "50%"
                             }}
                        >
                            <div className="event-name">{props.name}</div>
                            <button
                                className="event-links"
                                onClick={() => props.toggle && props.toggle(false)}
                            >
                                View
                            </button>
                            <br/><br/>
                            {props.isRegistered && <><div style={{color: "#0acc0a"}}>Registered <CheckCircleOutlineIcon/></div><div style={{color: "#fff", paddingTop: "0.2rem"}}>Ticket ID: {props.regId}</div></>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
