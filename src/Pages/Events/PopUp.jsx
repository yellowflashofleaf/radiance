import React, { useEffect } from "react";
import Modal from "react-modal"

const PopUp = (props) => {

  // useEffect(() => {
  //   if(props.open){
  //     document.body.style.overflow = "hidden"
  //   }
  //   else{
  //     document.body.style.overflow = "auto"
  //   }
  // })

  return (
    <>
    <>
    <div
      className="popup-container"
      style={
        props.open
          ? { opacity: 1, pointerEvents: "all" }
          : { opacity: 0, pointerEvents: "none" }
      }
    >
      
    </div>
    {
      props.open && 
      <>
      <div className="popup">
        <h3 className="text-center">{props.content}</h3>
        <b><i>{props.info}</i></b> <br />
        <p>{props.moreInfo}</p> 
        {props.wildcard !== null && (<p>{props.wildcard}</p>)}
        {props.wdInfo !== null && (<p>{props.wdInfo}</p>)}
        {props.wdLink !== null && (<p>{props.wdLink}</p>)}
        <ol style={{listStyle: "none", marginLeft: "-30px"}}>{props.rounds !== null && props.rounds.map((round) => <li key={round}>{round}</li>)}</ol>
        <strong>Rules and Regulations:</strong> <br />
        <ol style={{listStyle: "none", marginLeft: "-30px"}}>
          {props.rules !== null && props.rules.map((rule) => <li key={rule}>{rule}</li> )}
        </ol>

        <strong>Team Distribution: </strong> <br />
        <ol style={{listStyle: "none", marginLeft: "-30px"}}>{props.team !== null && props.team.map((t) => <li key={t}>{t}</li> )}</ol>
        
        <p><strong>Fees: </strong>{props.fees}</p>
        <button
          className="event-links"
          onClick={() => props.toggle && props.toggle(false)}
        >
          Close
        </button>
        {/* <Link href="#"> */}
        <a
          href="/#"
          className="event-links event-links-active"
          style={{ marginLeft: "1rem", marginTop: "1rem" }}
        >
          Register
        </a>
      </div>
      </>
    }
    </>
    </>
  );
};

export default PopUp;
