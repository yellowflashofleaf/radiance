import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EventCard from "../../../components/cards";

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);

  const getMyEvents = () => {
    var config = {
      method: "get",
      url: process.env.REACT_APP_API_URL + "myEvents/",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        setMyEvents(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getMyEvents();
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {myEvents.length == 0 ? (
          <></>
        ) : (
          myEvents.map((eve) => (
            <Grid item xs={3}>
              <EventCard
                eName={eve.event_id.name}
                content={eve.description}
                type="myEvent"
                slot={eve.event_id.name}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default MyEvents;
