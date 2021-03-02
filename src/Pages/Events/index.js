import React, { useContext, useEffect, useState } from "react";
import Footer from "../../Footer";
import Card from "./Card";
import "./events.css";
import axios from "axios";
import { AuthContext } from "../../context/Auth/AuthContext";

const Index = (props) => {
  const [flag, setFlag] = useState(props.flag || "A");
  const [events, setEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const authContext = useContext(AuthContext);

  const { isAuth } = authContext;

  async function getMyEvents() {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}myEvents`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setMyEvents(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    (async function () {
      const res = await axios.get(
        "https://pulzion-2021.s3.ap-south-1.amazonaws.com/assets/events_data.json"
      );
      setEvents(res.data);
      if (isAuth) await getMyEvents();
    })();
  }, [isAuth]);

  useEffect(() => {
    let allEvents = Object.assign([], events);
    for (let i of allEvents) {
      i.isRegistered = false;
      for (let j of myEvents) {
        if (i._id === j.event_id._id) {
          i.isRegistered = true;
          i.regId = j.reg_id;
          if (j.slot_id !== null) {
            i.slot_id = j.slot_id;
            // i.regId = j.reg_id;
          }
        }
      }
    }
    setEvents([]);
    setEvents(allEvents);
    // eslint-disable-next-line
  }, [myEvents]);

  return (
    <>
      <h1 className="text-center page-title" style={{ color: "#0ff" }}>
        {flag === "A" && <>ALL </>}
        {flag === "T" && <>TECHNICAL </>}
        {flag === "NT" && <>NON-TECHNICAL </>}
        {flag === "MY" && <>MY </>}
        EVENTS
      </h1>
      <div className="hero-link-container">
        <a
          href="/"
          className={
            flag === "A" ? "event-links event-links-active" : "event-links"
          }
          onClick={(e) => {
            e.preventDefault();
            setFlag("A");
          }}
        >
          All
        </a>
        <a
          href="/technical"
          className={
            flag === "T" ? "event-links event-links-active" : "event-links"
          }
          onClick={(e) => {
            e.preventDefault();
            setFlag("T");
          }}
        >
          Technical Events
        </a>
        <a
          href="/nonTechnical"
          className={
            flag === "NT" ? "event-links event-links-active" : "event-links"
          }
          onClick={(e) => {
            e.preventDefault();
            setFlag("NT");
          }}
        >
          Non Technical Events
        </a>
        {isAuth && (
          <a
            href="/myevents"
            className={
              flag === "MY" ? "event-links event-links-active" : "event-links"
            }
            onClick={(e) => {
              e.preventDefault();
              setFlag("MY");
            }}
          >
            My Events
          </a>
        )}
      </div>

      <div className="e-card-container row justify-content-center">
        {flag === "A" &&
          events.map((e, i) => (
            <Card key={i} {...e} updateMyEvents={getMyEvents} />
          ))}
        {flag === "T" &&
          events.map(
            (e, i) =>
              e.isTechnical && (
                <Card key={i} {...e} updateMyEvents={getMyEvents} />
              )
          )}
        {flag === "NT" &&
          events.map(
            (e, i) =>
              !e.isTechnical && (
                <Card key={i} {...e} updateMyEvents={getMyEvents} />
              )
          )}
        {flag === "MY" &&
          events.map(
            (e, i) =>
              e.isRegistered && (
                <Card key={i} {...e} updateMyEvents={getMyEvents} />
              )
          )}
      </div>
      {/* </section>  */}
      <Footer />
    </>
  );
};

export default Index;
