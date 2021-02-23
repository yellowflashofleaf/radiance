import {Grid} from "@material-ui/core";
import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {SnackbarContext} from "../../../../context/Snackbar/SnackbarContext.js";
import EventCard from "../../../components/cards.js";

const RegisterEvents = () => {
    const [events, setEvents] = useState([]);

    const snackbarContext = useContext(SnackbarContext);
    const {openSnackbar} = snackbarContext;

    const getAllEvents = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "events",
            headers: {},
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                setEvents(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const registerForEvent = (id) => {
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

    useEffect(() => {
        getAllEvents();
    }, []);

    return (
        <>
            <Grid container spacing={3}>
                {events.length == 0 ? (
                    <></>
                ) : (
                    events.map((eve) => (
                        <Grid item xs={3}>
                            <EventCard
                                eName={eve.name}
                                // content={eve.description}
                                image={eve.image}
                                id={eve._id}
                                register={registerForEvent}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
        </>
    );
};

export default RegisterEvents;
