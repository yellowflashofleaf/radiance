import React, {useEffect, useState} from "react";
import Footer from "../../Footer";
import Card from "./Card";
import { allEvents, technicalEvents, nonTechnicalEvents } from "./eventConfig";
import "./events.css";
import axios from "axios";

const Index = () => {
  const [flag, setFlag] = useState("A");
  const [events, setEvents] = useState([])

  useEffect(()=>{
      (async function(){
          const res = await axios.get("https://pulzion-2021.s3.ap-south-1.amazonaws.com/assets/events_data.json")
          setEvents(res.data)
          console.log(res.data)
      })()
  }, [])

  return (
    <>
      <h1 className="text-center page-title" style={{ color: "#0ff" }}>
        {flag === "A" && <>ALL </>}
        {flag === "T" && <>TECHNICAL </>}
        {flag === "NT" && <>NON-TECHNICAL </>}
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
      </div>

      <div className="e-card-container row justify-content-center">
        {flag === "A" && events.map((e, i) => <Card key={i} {...e} />)}
        {flag === "T" && events.map((e, i) => e.isTechnical && <Card key={i} {...e} />)}
        {flag === "NT" &&
          events.map((e, i) => !e.isTechnical && <Card key={i} {...e} />)}
      </div>
      {/* </section>  */}
      <Footer />
    </>
  );
};

export default Index;
