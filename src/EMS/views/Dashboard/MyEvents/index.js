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

  const bookSlot = (eid, sid) => {
    var data = JSON.stringify({ event_id: eid });

    var config = {
      method: "post",
      url: "https://api.radiance21.ml/myevents/slots/" + sid,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        Cookie: "__cfduid=d2cfc1cb73f6e94d0f882b1a4b7cc82b41613815019",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
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
        {myEvents.length === 0 ? (
          <></>
        ) : (
          myEvents.map((eve) => (
            <Grid item xs={3}>
              <EventCard
                eid={eve.event_id._id}
                eName={eve.event_id.name}
                image={eve.event_id.image}
                regId={eve.reg_id}
                content={eve.description}
                type="myEvent"
                slot={eve.event_id.name}
                slotId={eve.slot_id}
                bookSlot={bookSlot}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default MyEvents;
