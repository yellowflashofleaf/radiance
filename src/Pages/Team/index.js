import React from "react";
import "./team.css";
import TeamCard from "./Card";
import KaleMaam from "./img/Kalemaam.jpg";
import Soumya from "./img/Soumya.jpeg";
// import Jinesh from "./img/Jinesh.jpg";
// import Rohit from "./img/Rohit.jpg";
// import Pratik from "./img/pratik.png";
// import Siddhesh from "./img/Siddhesh.jpeg";
// import Aditya from "./img/Aditya.jpg";
// import Pranav from "./img/Pranav.jpeg";
// import Prathamesh from "./img/Prathamesh.png";
// import Kunal from "./img/Kunal.jpeg";
// import Atharv from "./img/Atharv.jpeg";
// import Aniruddha from "./img/Aniruddha.jpeg";
// import Abhishek from "./img/Abhishek.png";
import Apeksha from "./img/Apeksha_Bhosale.jpg";
import Falguni from "./img/Falguni_Jawalkar.jpeg";
import Isha from "./img/Isha_Bhalerao.jpg";
import Kalyani from "./img/Kalyani_Dhawade_2.jpg";
import Krutika_Patil from "./img/Krutika_Patil.jpg";
import Krutika_Shahane from "./img/Krutika_Shahane.jpg";
import Manasi from "./img/Manasi_Hatekar.jpeg";
import Medha from "./img/Medha_Badamikar.jpeg";
import Meghna from "./img/Meghna_Chincholkar.jpg";
import Mitali from "./img/Mitali_Sonawane.jpg";
import Neha from "./img/Neha_Nemade.jpg";
import Pranjali from "./img/Pranjali_Desai.jpg";
import Rutuja from "./img/Rutuja_Labhshetwar.jpeg";
import Sakshi from "./img/Sakshi_harode.jpg";
import Sejal from "./img/Sejal_Pekam.jpg";
import Sharayu from "./img/Sharayu_Hiwarkhedkar.jpg";
import vaishnavi from "./img/vaishnavi_dhakare.jpg";
import Siddhi from "./img/Siddhi_Wakchaure.jpg";
import Footer from "../../Footer";

const data1 = [
  {
    image: KaleMaam,
    name: "Dr. Geetanjali Kale",
    designation: "TEACHER GUARDIAN",
    link: "https://www.linkedin.com/in/dr-geetanjali-kale-17148922/",
  },
];

const data2 = [
  {
    image: Soumya,
    name: "Soumya Malgonde",
    designation: "RADIANCE HEAD",
    link: "https://www.linkedin.com/in/soumya-malgonde-460480150/",
  },
];

const data3 = [
  {
    image: Siddhi,
    name: "Siddhi Wakchaure",
    designation: "PLANNING LEAD",
    link: "https://www.linkedin.com/in/siddhi-wakchaure-98b147198/",
  },
  {
    image: Neha,
    name: "Neha Nemade",
    designation: "PLANNING LEAD",
    link: "https://www.linkedin.com/in/neha-nemade-3a81071b1/",
  },
  {
    image: Falguni,
    name: "Falguni Jawalkar",
    designation: "CONTENT LEAD",
    link: "https://www.linkedin.com/in/falguni-jawalkar-b6243b1b1/",
  },
  {
    image: Isha,
    name: "Isha Bhalerao",
    designation: "CONTENT LEAD",
    link: "http://www.linkedin.com/in/isha-bhalerao/",
  },
  {
    image: Sharayu,
    name: "Sharayu Hiwarkhedkar",
    designation: "DESIGN LEAD",
    link: "https://www.linkedin.com/in/sharayu-hiwarkhedkar-996a8b1b0/",
  },
  {
    image: Sakshi,
    name: "Sakshi Harode",
    designation: "DESIGN LEAD",
    link: "https://www.linkedin.com/mwlite/in/sakshi-harode-38b791197/",
  },
  {
    image: Manasi,
    name: "Manasi Hatekar",
    designation: "MARKETING LEAD",
    link: "https://www.linkedin.com/in/manasi-hatekar-94456a21a/",
  },
  {
    image: Kalyani,
    name: "Kalyani Dhawade",
    designation: "MARKETING LEAD",
    link: "https://www.linkedin.com/in/kalyani-dhawade-2b35b71a4/",
  },
  {
    image: vaishnavi,
    name: "Vaishnavi Dhakare",
    designation: "PUBLICITY LEAD",
    link: "https://www.linkedin.com/in/vaishnavi-dhakare-2nd-6956ab203/",
  },
  {
    image: Rutuja,
    name: "Rutuja Labhshetwar",
    designation: "PUBLICITY LEAD",
    link: "https://www.linkedin.com/in/rutuja-labhshetwar-51b05a203/",
  },
];

const data4 = [
  {
    image: Meghna,
    name: "Meghna Chincholkar",
    designation: "ALGO-RACERS LEAD",
    link: "https://www.linkedin.com/in/meghna-chincholkar-b1b56621a/",
  },
  {
    image: Krutika_Patil,
    name: "Krutika Patil",
    designation: "RESTORE IT LEAD",
    link: "https://www.linkedin.com/in/krutika-patil-671710203/",
  },
  {
    image: Mitali,
    name: "Mitali Sonawane ",
    designation: "WEB & APP DEV LEAD",
    link: "https://www.linkedin.com/in/mitali-sonawane-011754199/",
  },
  {
    image: Sejal,
    name: "Sejal Pekam",
    designation: "DATA PRIX LEAD",
    link: "https://www.linkedin.com/in/sejal-pekam/",
  },
  {
    image: Apeksha,
    name: "Apeksha Bhosale",
    designation: "SPORTIFY LEAD",
    link: "https://www.linkedin.com/in/apeksha-bhosale-9676b8203/",
  },
  {
    image: Medha,
    name: "Medha Badamikar",
    designation: "SAROJINI LEAD",
    link: "https://www.linkedin.com/in/medha-badamikar-2265741b4/",
  },
  {
    image: Krutika_Shahane,
    name: "Krutika Shahane",
    designation: "PIXEL PERFECT LEAD",
    link: "https://www.linkedin.com/in/krutikashahane/",
  },
  {
    image: Pranjali,
    name: "Pranjali Desai",
    designation: "TRACE THE PLACE LEAD",
    link: "https://www.linkedin.com/in/pranjali-desai-0090a2218",
  },
  // {
  //   image: Krishna,
  //   name: "Krishna Malge",
  //   designation: "DESIGN HEAD",
  //   link: "https://www.linkedin.com/in/krishna-malge-ab166b183/"
  // },
  // {
  //   image: Mihir,
  //   name: "Mihir Kumar",
  //   designation: "CONTENT HEAD",
  //   link: "https://www.linkedin.com/in/mihir-kumar-0142a6189/"
  // }
];

const Team = () => {
  return (
    <>
      <div className="team">
        <div className="page-title">MEET OUR TEAM</div>
        <div className="row mx-0 justify-content-around">
          {data1.map((tm) => {
            return (
              <TeamCard
                name={tm.name}
                designation={tm.designation}
                image={tm.image}
                link={tm.link}
                key={tm.name}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-around">
          {data2.map((tm) => {
            return (
              <TeamCard
                name={tm.name}
                designation={tm.designation}
                image={tm.image}
                link={tm.link}
                key={tm.name}
              />
            );
          })}
        </div>
        <div className="page-title my-5" style={{ fontSize: "3rem" }}>
          RADIANCE COUNCIL
        </div>
        <div className="row mx-0 justify-content-around">
          {data3.map((tm) => {
            return (
              <TeamCard
                name={tm.name}
                designation={tm.designation}
                image={tm.image}
                link={tm.link}
                key={tm.name}
              />
            );
          })}
        </div>
        <div className="page-title my-5">EVENT LEADS</div>
        <div className="row mx-0 justify-content-around">
          {data4.map((tm) => {
            return (
              <TeamCard
                name={tm.name}
                designation={tm.designation}
                image={tm.image}
                link={tm.link}
                key={tm.name}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
