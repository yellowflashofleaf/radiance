import React, {useContext} from "react";
import {AuthContext} from "../../context/Auth/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";
import {SnackbarContext} from "../../context/Snackbar/SnackbarContext";
import classNames from "classnames";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import {CircularProgress} from "@material-ui/core";

class PopConfirm extends React.Component {
    state = {
        visible: true,
    };

    togglePop = () =>
        this.setState(prevState => ({visible: !prevState.visible}));

    render() {
        let classContent = classNames("pop-content", {
            hidden: !this.state.visible
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
    const [isOpen, setIsOpen] = React.useState(false);
    const [pending, setPending] = React.useState(false)
    const {isAuth} = authContext;
    const snackbarContext = useContext(SnackbarContext);
    const {openSnackbar} = snackbarContext;

    const registerForEvent = (id) => {
        console.log(id)
        // var data = JSON.stringify({ event_id: id });
        setPending(true)
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
                props.updateMyEvents()
            })
            .catch(function (error) {
                openSnackbar("Error: " + error.response.data.msg, "error");
                console.log(error.response);
            }).finally(() => {
            setPending(false)
        })

    }


    console.log(props.isRegistered)

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
                        <div className="popup bg-dark text-light" >
                        <button
                        style={{float:"right", padding:"5px 12px", borderRadius:"25px"}}
                                onClick={() => props.toggle && props.toggle(false)}
                            >
                                X
                            </button>
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
                                className="event-links "
                                onClick={() => props.toggle && props.toggle(false)}
                            >
                                Close
                            </button>
                            {isAuth &&
                            <PopConfirm title="Confirm Registration?" onConfirm={() => registerForEvent(props.id)}>
                                <button
                                    className={props.isRegistered ? "event-links event-links-disabled" : "event-links event-links-active"}
                                    disabled={props.isRegistered}
                                >
                                    {!props.isRegistered && <>{!pending && <>Register <PlaylistAddIcon/></>} {pending && <>Register <CircularProgress
                                        size={20}/></>} </>}
                                    {props.isRegistered && <>Registered <CheckCircleOutlineIcon/></>}
                                </button>

                            </PopConfirm>}
                            {!isAuth && <Link to={"/login"}>
                                <button
                                    className={"event-links event-links-active"}
                                >
                                    Login/Signup to register
                                </button>
                            </Link>}
                        </div>
                    </>
                }
            </>
        </>
    );
};

export default PopUp;
