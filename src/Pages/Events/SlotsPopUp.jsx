import React, {useContext, useEffect} from "react";
import {AuthContext} from "../../context/Auth/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";
import {SnackbarContext} from "../../context/Snackbar/SnackbarContext";
import classNames from "classnames";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

const SlotsPopUp = (props) => {

    const authContext = useContext(AuthContext);
    const [pending, setPending] = React.useState(false)
    const {isAuth} = authContext;
    const snackbarContext = useContext(SnackbarContext);
    const {openSnackbar} = snackbarContext;


    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const [slots, setSlots] = React.useState([]);

    const getSlots = (id) => {

var config = {
  method: 'get',
  url: process.env.REACT_APP_API_URL + 'myevents/slots/' + props.id,
  headers: { 
    'Authorization': 'Bearer ' + localStorage.getItem('token'), 
    
  }
};

axios(config)
.then(function (response) {
    setSlots(response.data)
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
    }

    // const registerForEvent = (id) => {
    //     console.log(id)
    //     setPending(true)
    //     var config = {
    //         method: "post",
    //         url: process.env.REACT_APP_API_URL + "events/register/" + id,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + localStorage.getItem("token"),
    //         },
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //             openSnackbar("Registration Successful", "success");
    //             props.updateMyEvents()
    //         })
    //         .catch(function (error) {
    //             openSnackbar("Error: " + error.response.data.msg, "error");
    //             console.log(error.response);
    //         }).finally(() => {
    //         setPending(false)
    //     })

    // }


    // console.log(props)


    useEffect(()=>{
console.log(slots)
    },[slots])

    useEffect(()=>{
       if(props.open) getSlots();
    },[props.open])

    return (
        <>
            <>
                <div
                    onClick={() => props.toggle && props.toggle(false)}
                    className="popup-container"
                    style={
                        props.open
                            ? {opacity: 1, pointerEvents: "all"}
                            : {opacity: 0, pointerEvents: "none"}
                    }
                >
                </div>
                {
                    props.open && slots.length>0 &&
                    <>
                        <div className="popup bg-dark text-light p-5">
                            <button
                                style={{
                                    float: "right",
                                    padding: "5px 12px",
                                    borderRadius: "25px",
                                    position: "absolute",
                                    right: "3%",
                                    top: "3%"
                                }}
                                onClick={() => props.toggle && props.toggle(false)}
                            >
                                X
                            </button>
    
<FormControl component="fieldset">
      {/* <FormLabel component="legend">Slots</FormLabel> */}
      <RadioGroup aria-label="" name="slots" value={value} onChange={handleChange}>
      {slots.map((s)=> (
        <FormControlLabel value={s._id} control={<Radio />} label={s.start_time +  " - " +s.end_time} />
        ))}
      </RadioGroup>
    </FormControl>

                            {/* <h3 className="text-center">{props.name}</h3>
                            <b><i>{props.info}</i></b> <br/>
                            <p>{props.moreInfo}</p>
                            
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
                            {isAuth &&
                            <PopConfirm title="Confirm Registration?" onConfirm={() => registerForEvent(props.id)}>
                                <button
                                    className={props.isRegistered || !props.show ? "event-links event-links-disabled mt-3" : "event-links event-links-active mt-3"}
                                    disabled={props.isRegistered || !props.show}
                                >
                                   
                                    {!props.isRegistered && <>{!pending && props.show && <>Register <PlaylistAddIcon/></>} {pending && props.show && <>Register <CircularProgress
                                        size={20}/></>}   {!props.show && <>Registration Closed <NotInterestedIcon/> </>}</>}
                                    {props.isRegistered && <>Registered <CheckCircleOutlineIcon/></>}
                                </button>

                            </PopConfirm>}
                            {!isAuth && <Link to={"/login"}>
                                <button
                                    className={"event-links event-links-active mt-3"}
                                >
                                    Login/Signup to register
                                </button>
                            </Link>} */}
                        </div>
                    </>
                }
            </>
        </>
    );
};

export default SlotsPopUp;
