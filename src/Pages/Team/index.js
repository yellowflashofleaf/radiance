import React from "react";
import './team.css'
import TeamCard from "./Card";
import KaleMaam from './img/Kalemaam.jpg'
import Jinesh from './img/Jinesh.jpg'
import Rohit from './img/Rohit.jpg'
import Pratik from './img/pratik.png'
import Soumya from './img/Soumya.jpeg'
import Siddhesh from './img/Siddhesh.jpeg'
import Aditya from './img/Aditya.jpg'
import Pranav from './img/Pranav.jpeg'
import Prathamesh from './img/Prathamesh.png'
import Kunal from './img/Kunal.jpeg'
import Atharv from './img/Atharv.jpeg'
import Aniruddha from './img/Aniruddha.jpeg'
import Abhishek from './img/Abhishek.png'

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
        image: Jinesh,
        name: "Jinesh Parakh",
        designation: "PASC CHAIRMAN",
        link: "https://www.linkedin.com/in/jinesh-parakh"
    },
    {
        image: Rohit,
        name: "Rohit Pardeshi",
        designation: "PASC VICE CHAIRMAN",
        link: "https://www.linkedin.com/in/rohit-pardeshi-785921176"
    }
]

const data3 = [
    {
        image: Atharv,
        name: "Atharv Chavan",
        designation: "SECRETARY",
        link: "https://www.linkedin.com/in/AVC0706/"
    },
    {
        image: Siddhesh,
        name: "Siddhesh Dhanavde",
        designation: "TREASURER",
        link: " https://www.linkedin.com/in/siddhesh-dhanavde-3079b3185"
    },
    {
        image: Aditya,
        name: "Aditya Avhad",
        designation: "PUBLIC RELATIONS OFFICER",
        link: "https://www.linkedin.com/in/aditya-avhad-078797187/"
    },
    {
        image: Pratik,
        name: "Pratik Daigavne ",
        designation: "TECHNICAL HEAD",
        link: "https://www.linkedin.com/in/pratikdaigavane"
    },
    {
        image: Soumya,
        name: "Soumya Malgonde",
        designation: "TECHNICAL HEAD",
        link: "https://www.linkedin.com/in/soumya-malgonde-460480150/"
    },
    {
        image: Kunal,
        name: "Kunal Raut",
        designation: "DOMAIN DIRECTOR (COMPETITIVE CODING)",
        link: "https://www.linkedin.com/in/zukonit14"
    },
    {
        image: Prathamesh,
        name: "Prathamesh Shiralkar",
        designation: "DOMAIN DIRECTOR (WEB)",
        link: "https://linkedin.com/in/pnshiralkar"
    },
    {
        image: Aniruddha,
        name: "Aniruddha Deshmukh",
        designation: "DOMAIN DIRECTOR (ANDROID)",
        link: "https://www.linkedin.com/in/aniruddha-deshmukh"
    },
    {
        image: Pranav,
        name: "Pranav Kadam",
        designation: "MARKETING HEAD",
        link: "https://www.linkedin.com/in/pranav-kadam-1317a2187/"
    },
    {
        image: Abhishek,
        name: "Abhishek Kushwaha",
        designation: "DESIGN HEAD",
        link: "https://www.linkedin.com/in/abhishek-kushwaha-670797187"
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
]

const Team = () => {
    return (
        <>
            <div className="team">
                <div className="page-title">Meet our Team</div>
                <div className="row mx-0 justify-content-around">
                    {
                        data1.map((tm) => {
                            return (
                                <><TeamCard name={tm.name} designation={tm.designation} image={tm.image}
                                            link={tm.link}/></>
                            )
                        })
                    }
                </div>
                <div className="row mx-0 justify-content-around">
                    {
                        data2.map((tm) => {
                            return (
                                <><TeamCard name={tm.name} designation={tm.designation} image={tm.image}
                                            link={tm.link}/></>
                            )
                        })
                    }
                </div>
                <div className="row mx-0 justify-content-around">
                    {
                        data3.map((tm) => {
                            return (
                                <><TeamCard name={tm.name} designation={tm.designation} image={tm.image}
                                            link={tm.link}/></>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Team