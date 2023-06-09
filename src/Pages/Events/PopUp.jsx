import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { SnackbarContext } from "../../context/Snackbar/SnackbarContext";
import classNames from "classnames";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { CircularProgress } from "@material-ui/core";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

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

const PopUp = (props) => {
  const authContext = useContext(AuthContext);
  const [pending, setPending] = React.useState(false);
  const { isAuth } = authContext;
  const snackbarContext = useContext(SnackbarContext);
  const { openSnackbar } = snackbarContext;

  const registerForEvent = (id) => {
    console.log(id);
    setPending(true);
    var config = {
      method: "post",
      url: process.env.REACT_APP_API_URL + "events/register/" + id,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        openSnackbar("Registration Successful", "success");
        props.updateMyEvents();
      })
      .catch(function (error) {
        openSnackbar("Error: " + error.response.data.msg, "error");
        console.log(error.response);
      })
      .finally(() => {
        setPending(false);
      });
  };

  // console.log(props)

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
        {props.open && (
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
              <h3 className="text-center">{props.name}</h3>
              <b>
                <i>{props.info}</i>
              </b>{" "}
              <br />
              <p>{props.moreInfo}</p>
              {props.wildcard !== null && <p>{props.wildcard}</p>}
              {props.wdInfo !== null && <p>{props.wdInfo}</p>}
              {props.wdLink !== null && <p>{props.wdLink}</p>}
              <ol
                style={{
                  listStyle: "none",
                  marginLeft: "-30px",
                }}
              >
                {props.rounds !== null &&
                  props.rounds.map((round) => <li key={round}>{round}</li>)}
              </ol>
              <strong>Rules and Regulations:</strong> <br />
              <ol style={{ listStyle: "none", marginLeft: "-30px" }}>
                {props.rules !== null &&
                  props.rules.map((rule) => <li key={rule}>{rule}</li>)}
              </ol>
              <strong>Team Distribution: </strong> <br />
              <ol
                style={{
                  listStyle: "none",
                  marginLeft: "-30px",
                }}
              >
                {props.team !== null &&
                  props.team.map((t) => <li key={t}>{t}</li>)}
              </ol>
              {isAuth && props.show && (
                <PopConfirm
                  title="Confirm Registration?"
                  onConfirm={() => registerForEvent(props.id)}
                >
                  <button
                    className={
                      props.isRegistered || !props.show
                        ? "event-links event-links-disabled mt-3"
                        : "event-links event-links-active mt-3"
                    }
                    disabled={props.isRegistered || !props.show}
                  >
                    {!props.isRegistered && (
                      <>
                        {!pending && props.show && (
                          <>
                            Register <PlaylistAddIcon />
                          </>
                        )}{" "}
                        {pending && props.show && (
                          <>
                            Register <CircularProgress size={20} />
                          </>
                        )}{" "}
                      </>
                    )}

                    {props.isRegistered && (
                      <>
                        Registered <CheckCircleOutlineIcon />
                      </>
                    )}
                  </button>
                </PopConfirm>
              )}
              {!props.show && (
                <>
                  <button
                    className="event-links event-links-disabled mt-3"
                    disabled
                    style={{ backgroundColor: "#ff0000" }}
                  >
                    Registration Closed <NotInterestedIcon />{" "}
                  </button>
                </>
              )}
              {!isAuth && (
                <Link to={"/login"}>
                  <button className={"event-links event-links-active mt-3"}>
                    Login/Signup to register
                  </button>
                </Link>
              )}
            </div>
          </>
        )}
      </>
    </>
  );
};

export default PopUp;
