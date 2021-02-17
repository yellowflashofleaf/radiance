import React, {useState} from "react";
import Card from "./Card";
import {allEvents, technicalEvents, nonTechnicalEvents} from "./eventConfig";
import './events.css'

const Index = () => {
    const [flag, setFlag] = useState("A");

    return (
        <>
            <h1 className="text-center page-title" style={{color: "#0ff"}}>
                {
                    flag === "A" && <>ALL </>
                }
                {
                    flag === "T" && <>TECHNICAL </>
                }
                {
                    flag === "NT" && <>NON-TECHNICAL </>
                }
                EVENTS</h1>
            <div className="hero-link-container">
                <a href="/" className={flag === "A" ? "event-links event-links-active" : "event-links"} onClick={e => {
                    e.preventDefault();
                    setFlag("A")
                }}>All</a>
                <a href="/technical" className={flag === "T" ? "event-links event-links-active" : "event-links"}
                   onClick={e => {
                       e.preventDefault();
                       setFlag("T")
                   }}>Technical Events</a>
                <a href="/nonTechnical" className={flag === "NT" ? "event-links event-links-active" : "event-links"}
                   onClick={e => {
                       e.preventDefault();
                       setFlag("NT")
                   }}>Non Technical Events</a>
            </div>

            <div className="e-card-container row justify-content-center">
                {flag === "A" && allEvents.map((e, i) => (
                    <Card key={i} {...e} />
                ))}
                {flag === "T" && technicalEvents.map((e, i) => (
                    <Card key={i} {...e} />
                ))}
                {flag === "NT" && nonTechnicalEvents.map((e, i) => (
                    <Card key={i} {...e} />
                ))}
            </div>
            {/* </section>  */}
        </>
    );
};

export default Index;