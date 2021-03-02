import React from "react";
import PopUp from "./PopUp";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import SlotsDialog from "./slots";
import { Button, CircularProgress } from "@material-ui/core";
import SlotsPopUp from "./SlotsPopUp";
import moment from "moment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import EventNoteIcon from "@material-ui/icons/EventNote";

const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [isSlotsOpen, setIsSlotsOpen] = React.useState(false);

  const [isBooked, setIsBooked] = React.useState(false);

  console.log(props);

  return (
    <>
      <PopUp
        {...props}
        id={props._id}
        open={isModalOpen}
        toggle={setIsModalOpen}
      />
      <SlotsPopUp
        {...props}
        id={props._id}
        isBooked={setIsBooked}
        open={isSlotsOpen}
        toggle={setIsSlotsOpen}
      />
      <div className="col-md-3 px-3 py-3">
        <div className="card e-card gradient-border">
          <img src={props.image} alt="event img" />
          <div className="e-card-text text-center">
            <div
              className="e-card-buttons"
              style={{
                minWidth: "50%",
              }}
            >
              <div className="event-name">
                <b>{props.name}</b>
              </div>
              <div className="event-info">
                <i> {props.info}</i>
              </div>
              {/* <button
                className="event-links"
                // onClick={() => props.toggle && props.toggle(false)}
                onClick={() => setIsModalOpen(true)}
              >
                View
              </button> */}
              {/* <br />
              <br /> */}
              {props.isRegistered && (
                <>
                  <div style={{ color: "#0acc0a" }}>
                    Registered <CheckCircleOutlineIcon />
                  </div>
                  {props.slot_id || isBooked ? (
                    ""
                  ) : (
                    <div style={{ color: "#fff", paddingTop: "0.2rem" }}>
                      <b>Ticket ID:</b> {props.regId}
                    </div>
                  )}
                  <div style={{ color: "#fff", paddingTop: "0.2rem" }}>
                    {props.slot_id ? (
                      <>
                        <EventNoteIcon /> <b>Slot:</b>{" "}
                        {moment(props.slot_id.start_time).format("DD MMM") +
                          " : " +
                          moment(props.slot_id.start_time).format(" hh:mm") +
                          " - " +
                          moment(props.slot_id.end_time).format(" hh:mm")}
                      </>
                    ) : (
                      <>
                        {isBooked ? (
                          <>
                            {props.slot_id ? (
                              <>
                                <b>Slot:</b>{" "}
                                {moment(props.slot_id.start_time).format(
                                  "DD MMM YYYY"
                                ) +
                                  " : " +
                                  moment(props.slot_id.start_time).format(
                                    " hh:mm"
                                  ) +
                                  " - " +
                                  moment(props.slot_id.end_time).format(
                                    " hh:mm"
                                  )}
                              </>
                            ) : (
                              <>
                                <span style={{ color: "#00ccff" }}>
                                  Slot Booked! <AssignmentTurnedInIcon />
                                </span>{" "}
                              </>
                            )}
                          </>
                        ) : (
                          <button
                            onClick={() => setIsSlotsOpen(true)}
                            // variant="contained"
                            // className="mt-3"
                            className="event-links"
                            style={{}}
                          >
                            Book Slots
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
              <button
                className="event-links1"
                // onClick={() => props.toggle && props.toggle(false)}
                onClick={() => setIsModalOpen(true)}
              >
                View
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* <SlotsDialog isOpen={isSlotsOpen} slots={slots}/> */}
    </>
  );
};

export default Card;
