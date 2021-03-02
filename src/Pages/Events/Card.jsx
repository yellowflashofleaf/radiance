import React from "react";
import PopUp from "./PopUp";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import SlotsDialog from "./slots";
import { Button } from "@material-ui/core";
import SlotsPopUp from "./SlotsPopUp";

const Card = (props) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [isSlotsOpen, setIsSlotsOpen] = React.useState(false);


    return (
        <>

            <PopUp
                {...props}
                id={props._id}
                open={isModalOpen}
                toggle={setIsModalOpen}
            />
            <SlotsPopUp
                // {...props}
                id={props._id}
                open={isSlotsOpen}
                toggle={setIsSlotsOpen}
            />
            <div className="col-md-3 px-3 py-3">
                <div className="card e-card gradient-border" >
                    <img
                        src={props.image}
                        alt="event img"
                    />
                    <div className="e-card-text text-center">
                        <div className="e-card-buttons"
                             style={{
                                 minWidth: "50%"
                             }}
                        >
                            <div className="event-name"><b>{props.name}</b></div>
                            <div className="event-info"><i> {props.info}</i></div>
                            <button
                                className="event-links"
                                // onClick={() => props.toggle && props.toggle(false)}
                                onClick={() => setIsModalOpen(true)}
                            >
                                View
                            </button>
                            <br/><br/>
                            {props.isRegistered && <>
                                <div style={{color: "#0acc0a"}}>Registered <CheckCircleOutlineIcon/></div>
                                <div style={{color: "#fff", paddingTop: "0.2rem"}}>Ticket ID: {props.regId}</div>
                                <Button onClick={()=>setIsSlotsOpen(true)}> Slots</Button>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
            {/* <SlotsDialog isOpen={isSlotsOpen} slots={slots}/> */}
        </>
    );
};

export default Card;
