import React, {useContext} from "react";
import {AuthContext} from "../../context/Auth/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";
import {SnackbarContext} from "../../context/Snackbar/SnackbarContext";

const PopUp = (props) => {

        const authContext = useContext(AuthContext);
        const [isOpen, setIsOpen] = React.useState(false);

        const {isAuth} = authContext;
    const snackbarContext = useContext(SnackbarContext);
    const {openSnackbar} = snackbarContext;

        const registerForEvent = (id) => {
            console.log(id)
            // var data = JSON.stringify({ event_id: id });

            var config = {
                method: "post",
                url: process.env.REACT_APP_API_URL + "events/register/" + id,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                // data: data,
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    openSnackbar("Registration Successful", "success");
                })
                .catch(function (error) {
                    openSnackbar("Error: " + error.response.data.msg, "error");
                    console.log(error.response);
                });
        };

        return (
            <>
                <>
                    <div
                        className="popup-container"
                        style={
                            props.open
                                ? {opacity: 1, pointerEvents: "all"}
                                : {opacity: 0, pointerEvents: "none"}
                        }
                    >

                    </div>
                    {
                        props.open &&
                        <>
                            <div className="popup">
                                <h3 className="text-center">{props.name}</h3>
                                <b><i>{props.info}</i></b> <br/>
                                <p>{props.moreInfo}</p>
                                {props.wildcard !== null && (<p>{props.wildcard}</p>)}
                                {props.wdInfo !== null && (<p>{props.wdInfo}</p>)}
                                {props.wdLink !== null && (<p>{props.wdLink}</p>)}
                                <ol style={{
                                    listStyle: "none",
                                    marginLeft: "-30px"
                                }}>{props.rounds !== null && props.rounds.map((round) => <li key={round}>{round}</li>)}</ol>
                                <strong>Rules and Regulations:</strong> <br/>
                                <ol style={{listStyle: "none", marginLeft: "-30px"}}>
                                    {props.rules !== null && props.rules.map((rule) => <li key={rule}>{rule}</li>)}
                                </ol>

                                <strong>Team Distribution: </strong> <br/>
                                <ol style={{
                                    listStyle: "none",
                                    marginLeft: "-30px"
                                }}>{props.team !== null && props.team.map((t) => <li key={t}>{t}</li>)}</ol>

                                <button
                                    className="event-links"
                                    onClick={() => props.toggle && props.toggle(false)}
                                >
                                    Close
                                </button>
                                {isAuth && <button
                                    className={"event-links event-links-active"}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    Register
                                </button>}
                                {!isAuth && <Link to={"/login"}>
                                    <button
                                        className={"event-links event-links-active"}
                                    >
                                        Login/Signup to register
                                    </button>
                                </Link>}
                                {isOpen && <>
                                    <br/><br/>
                                    <div style={{
                                        backgroundColor: "#acacac",
                                        padding: "1rem",
                                        margin: "0 5rem",
                                        textAlign: "center"
                                    }}>
                                        Confirm registration for {props.name} ?
                                        <br/>
                                        <button
                                            className={"event-links-small event-links-active"}
                                            onClick={() => registerForEvent(props.id)}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            className={"event-links-small"}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            No
                                        </button>
                                    </div>
                                </>}
                            </div>
                        </>
                    }
                </>
            </>
        );
    }
;

export default PopUp;
