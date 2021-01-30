import React from "react";
import './team.css'
import TeamCard from "./Card";
import KaleMaam from './img/Kalemaam.jpg'
import Nachiket from './img/nachiket.jpg'
import Tanush from './img/tanush.jpg'
import Shwetali from './img/Shwetali.jpg'
import Shlok from './img/shlok.jpg'
import Himani from './img/himani.jpg'
import Geet from './img/Geet.jpg'
import Darshan from './img/darshan.jpeg'
import YashA from './img/yashagrawal.jpg'
import YashJ from './img/yashjeswani.jpg'
import Gaurav from './img/gaurav.png'
import Aditi from './img/aditi.jpg'
import Ritik from './img/ritik.jpg'
import Krishna from './img/krishna.jpeg'
import Mihir from './img/mihir.jpg'

const data1 = [
  {
    image: KaleMaam,
    name: "Dr. Geetanjali Kale",
    designation: "TEACHER GUARDIAN",
    link: "https://www.linkedin.com/in/dr-geetanjali-kale-17148922/"
  }
]

const data2 = [
  {
    image: Nachiket,
    name: "Nachiket Erlekar",
    designation: "PASC CHAIRMAN",
    link: "https://www.linkedin.com/in/nachiket-erlekar-514777160/"
  }, 
  {
    image: Tanush,
    name: "Tanush Maddiwar",
    designation: "PASC VICE CHAIRMAN",
    link: "https://www.linkedin.com/in/tanush-maddiwar/"
  }
]

const data3 = [
  {
    image: Shwetali,
    name: "Shwetali Shimangaud",
    designation: "SECRETARY",
    link: "https://www.linkedin.com/in/shwetali-shimangaud-516774185/"
  },
  {
    image: Himani,
    name: "Himani Gwalani",
    designation: "TREASURER",
    link: "https://www.linkedin.com/in/himani-gwalani-325066b8/"
  },
  {
    image: Shlok,
    name: "Shlok Dolharkar",
    designation: "PUBLIC RELATIONS OFFICER",
    link: "https://www.linkedin.com/in/shlok-dolharkar-281bb416a/"
  },
  {
    image: Geet,
    name: "Geet Shingi",
    designation: "TECHNICAL HEAD",
    link: "https://www.linkedin.com/in/geet-shingi-337880148/"
  },
  {
    image: Darshan,
    name: "Darshan Bari",
    designation: "TECHNICAL HEAD",
    link: "https://www.linkedin.com/in/darshan-bari-79519314a/"
  },
  {
    image: YashA,
    name: "Yash Agrawal",
    designation: "DOMAIN DIRECTOR (COMPETITIVE CODING)",
    link: "https://www.linkedin.com/in/yash-agarwal-b35ba076/"
  },
  {
    image: YashJ,
    name: "Yash Jeswani",
    designation: "DOMAIN DIRECTOR (WEB)",
    link: "https://www.linkedin.com/in/yash-jeswani-45b42b16a/"
  },
  {
    image: Gaurav,
    name: "Gaurav Deshpande",
    designation: "DOMAIN DIRECTOR (ANDROID)",
    link: "https://www.linkedin.com/in/gaurav-deshpande-255770187/"
  },
  {
    image: Aditi,
    name: "Aditi Badhe",
    designation: "MARKETING HEAD",
    link: "https://www.linkedin.com/in/aditi-badhe-412a7b161/"
  },
  {
    image: Ritik,
    name: "Ritik Manghani",
    designation: "DESIGN HEAD",
    link: "https://www.linkedin.com/in/ritik-manghani-b4692118b/"
  },
  {
    image: Krishna,
    name: "Krishna Malge",
    designation: "DESIGN HEAD",
    link: "https://www.linkedin.com/in/krishna-malge-ab166b183/"
  },
  {
    image: Mihir,
    name: "Mihir Kumar",
    designation: "CONTENT HEAD",
    link: "https://www.linkedin.com/in/mihir-kumar-0142a6189/"
  }
]

const Team = () => {
 return(
   <>
   <div className="team">
        <div className="page-title">Meet our Team</div>
        <div className="row mx-0 justify-content-around">
        {
          data1.map((tm) => {
            return(
              <><TeamCard name={tm.name} designation={tm.designation} image={tm.image} link={tm.link}  /></>
            )
          })
        }
        </div>
        <div className="row mx-0 justify-content-around">
        {
          data2.map((tm) => {
            return(
              <><TeamCard name={tm.name} designation={tm.designation} image={tm.image} link={tm.link}  /></>
            )
          })
        }
        </div> 
        <div className="row mx-0 justify-content-between">
        {
          data3.map((tm) => {
            return(
              <><TeamCard name={tm.name} designation={tm.designation} image={tm.image} link={tm.link}  /></>
            )
          })
        }
        </div>
     </div>
   </>
 ) 
}

export default Team