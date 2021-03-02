import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { SnackbarContext } from "../../context/Snackbar/SnackbarContext";
import classNames from "classnames";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import moment from "moment";
import { Button, CircularProgress } from "@material-ui/core";
import { store } from "react-notifications-component";

class PopConfirm extends React.Component {
  state = {
    visible: true,
  };

  togglePop = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  render() {
    let classContent = classNames("pop-content", {
      hidden: !this.state.visible,
    });

    return (
      <div className="pop-container">
        <span onClick={this.togglePop}>{this.props.children}</span>
        <div className={classContent}>
          <div className="text-content">
            <span>{this.props.title}</span>
          </div>
          <div className="actions">
            <button onClick={this.togglePop}>No</button>
            <button
              onClick={() => {
                this.props.onConfirm();
                this.togglePop();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const SlotsPopUp = (props) => {
  const authContext = useContext(AuthContext);
  const [pending, setPending] = React.useState(false);
  const { isAuth } = authContext;
  const snackbarContext = useContext(SnackbarContext);
  const { openSnackbar } = snackbarContext;

  const [value, setValue] = React.useState(null);

  const [loading, setLoading] = React.useState(true);

  const handleSlotsChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  const [slots, setSlots] = React.useState([]);

  const getSlots = () => {
    var config = {
      method: "get",
      url: process.env.REACT_APP_API_URL + "myevents/slots/" + props.id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        setSlots(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  const bookSlot = (sid) => {
    var data = JSON.stringify({ event_id: props.id });

    var config = {
      method: "post",
      url: "https://api-ems.pulzion.in/myevents/slots/" + sid,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        store.addNotification({
          title: "Slot Booking Successful!",
          message: "Slot booked for event: " + props.name,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
        props.isBooked(true);
        console.log(JSON.stringify(response.data));
        props.toggle && props.toggle(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (props.open) getSlots();
  }, [props.open]);

  return (
    <>
      <>
        <div
          onClick={() => props.toggle && props.toggle(false)}
          className="popup-container"
          style={
            props.open
              ? { opacity: 1, pointerEvents: "all" }
              : { opacity: 0, pointerEvents: "none" }
          }
        ></div>
        {props.open && slots.length > 0 && (
          <>
            {loading ? (
              <div className="popup bg-dark text-light p-5">
                <CircularProgress />
              </div>
            ) : (
              <>
                <div className="popup bg-dark text-light p-5">
                  <button
                    style={{
                      float: "right",
                      padding: "5px 12px",
                      borderRadius: "25px",
                      position: "absolute",
                      right: "3%",
                      top: "3%",
                    }}
                    onClick={() => props.toggle && props.toggle(false)}
                  >
                    X
                  </button>

                  <h3 className="text-center">Book Slot</h3>
                  <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Slots</FormLabel> */}
                    <RadioGroup
                      aria-label=""
                      name="slots"
                      value={value}
                      onChange={handleSlotsChange}
                    >
                      {slots.map((s) => (
                        <FormControlLabel
                          value={s._id}
                          control={<Radio />}
                          label={
                            moment(s.start_time).format("DD MMM YYYY") +
                            " : " +
                            moment(s.start_time).format(" hh:mm") +
                            " - " +
                            moment(s.end_time).format(" hh:mm")
                          }
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <br />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Button
                      variant="outlined"
                      className="mx-3"
                      onClick={() => props.toggle && props.toggle(false)}
                    >
                      Cancel
                    </Button>
                    <PopConfirm
                      title="Confirm Slot Booking?"
                      onConfirm={() => bookSlot(value)}
                    >
                      <Button
                        variant="contained"
                        className="mx-3"
                        style={{
                          backgroundColor: "#00ccff",
                          fontWeight: "bold",
                        }}
                        disabled={!value}
                      >
                        Book
                      </Button>
                    </PopConfirm>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>
    </>
  );
};

export default SlotsPopUp;
