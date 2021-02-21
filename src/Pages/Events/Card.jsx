// import Link from "next/link";
import React from "react";
import PopUp from "./PopUp";

const Card = (props) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    return (
        <>
            <PopUp
                open={isModalOpen}
                toggle={setIsModalOpen}
                info={props.info}
                moreInfo={props.moreInfo}
                team={props.team}
                fees={props.fees}
                rules={props.rules}
                rounds={props.rounds}
                wildcard={props.wildcard}
                wdLink={props.wdLink}
                wdInfo={props.wdInfo}
                content={props.content}
            />
            <div className="col-md-3">
                <div className="card e-card gradient-border" onClick={() => setIsModalOpen(true)}>
                    <img
                        src={props.img || "https://via.placeholder.com/400"}
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
                            <div className="event-name">{props.content}</div>
                            <a href="#">
                                {/* <button
              className="link"
              onClick={() => setIsModalOpen(true)}
            >
              Register
            </button> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
