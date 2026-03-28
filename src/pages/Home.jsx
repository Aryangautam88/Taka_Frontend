import React, { useEffect, useState } from "react";
import "./Home.css";

import toolsImg from "../assets/toolsImg.png";
import target from "../assets/target.png";
import s1 from "../assets/service1.png";
import s2 from "../assets/service2.png";
import s3 from "../assets/service3.jpg";
import s4 from "../assets/service4.jpg";
// import stepIcon from "../assets/stepIcon.png";
// import diamond from "../assets/dimond.png";
// import infinity from "../assets/infinity.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
// import leftImg from "../assets/lefthome.png";
// import rightImg from "../assets/righthome.png";
// import paperIcon from "../assets/boat.png";
import center from "../assets/center.png";
import frame from "../assets/Influencer_Card.png";
import mobileCenter from "../assets/mobileCenter.png";

const offersData = [
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum" },
];
const servicesData = [
    {
        id: "001",
        title: "Lorem Ipsum Lorem Ipsum",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: s1,
    },
    {
        id: "002",
        title: "Lorem Ipsum Lorem Ipsum",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: s2,
    },
    {
        id: "003",
        title: "Lorem Ipsum Lorem Ipsum",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: s3,
    },
    {
        id: "004",
        title: "Lorem Ipsum Lorem Ipsum",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: s4,
    },
];

// const steps = [
//     { number: "01", title: "Lorem Ipsum" },
//     { number: "02", title: "Lorem Ipsum" },
//     { number: "03", title: "Lorem Ipsum" },
//     { number: "04", title: "Lorem Ipsum" },
// ];

const testimonials = [
    {
        name: "Alena Levin",
        role: "CEO & Co-Founder of ABC Company",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Alena Levin",
        role: "CEO & Co-Founder of ABC Company",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://randomuser.me/api/portraits/women/69.jpg",
    },
    {
        name: "Alena Levin",
        role: "CEO & Co-Founder of ABC Company",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Alena Levin",
        role: "CEO & Co-Founder of ABC Company",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://randomuser.me/api/portraits/women/66.jpg",
    },
    {
        name: "Alena Levin",
        role: "CEO & Co-Founder of ABC Company",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://randomuser.me/api/portraits/women/67.jpg",
    },
];

const Card = ({ data }) => (
    <div className="testimonial-card">
        <div className="quote">❝</div>

        <p className="testimonial-text">{data.text}</p>

        <div className="user">
            <img src={data.img} alt={data.name} />
            <div>
                <h4>{data.name}</h4>
                <span>{data.role}</span>
            </div>
        </div>
    </div>
);
const clients = [client1, client2, client1, client2];


const Home = () => {

    const [active, setActive] = useState(null);

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex(prev => (prev + 1) % servicesData.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const track = document.querySelector(".marquee .track");
        const loader = document.getElementById("loaderFill");

        if (!track || !loader) return;

        const updateProgress = () => {
            const style = window.getComputedStyle(track);
            const matrix = new DOMMatrixReadOnly(style.transform);

            const translateX = Math.abs(matrix.m41); // current movement

            const totalWidth = track.scrollWidth / 2;
            // /2 because content duplicated for infinite loop

            let progress = (translateX / totalWidth) * 100;

            if (progress > 100) progress = 0;

            loader.style.width = progress + "%";

            requestAnimationFrame(updateProgress);
        };

        requestAnimationFrame(updateProgress);
    }, []);

    return (
        <section className="home">

            {/*-------------------------------- Top -----------------------------*/}

            <section className="trusted-section">

                {/* Upper Text */}
                <div className="trusted-header">
                    <h1>
                        Indore’s First Verified Creator <br />
                        Influence. Commerce. Connected.
                    </h1>
                    <p>
                        Bridging the gap between top-tier local creators and premium brands. No more cold DMs. No more fake engagement. Just seamless collaborations and measurable foot traffic.
                    </p>
                </div>x

                {/* Image Container */}
                <div className="trusted-image-wrapper">
                    <img src={center} alt="Showcase" className="desktop-img" />
                    <img src={mobileCenter} alt="Showcase Mobile" className="mobile-img" />
                </div>

            </section>

            {/*------------------------------- tools----------------------------- */}

            <section className="tools">

                <div className="tools__container">

                    {/* BIG BACKGROUND NUMBER */}
                    <div className="tools__bgNumber">10+</div>

                    {/* LEFT CONTENT */}
                    <div className="tools__left">

                        <h2 className="tools__title">
                            WHO WE ARE ! <br />

                            We are redefining local marketing.
                        </h2>

                        <p className="tools__desc">
                            TAKA is an exclusive, data-driven platform built for Indore's creator economy. We realized the old way of local marketing is broken—creators hate sending cold DMs, and brands are tired of paying for empty metrics. We built TAKA to solve both, creating a seamless pipeline between authentic storytelling and real commerce.
                        </p>

                        <button className="tools__btn">
                            <span>Find Out More ➔</span>
                            <i></i>
                        </button>

                    </div>

                    {/* RIGHT IMAGE (single image containing 4 people) */}
                    <div className="tools__right">
                        <img src={toolsImg} alt="trusted tools users" />
                    </div>

                </div>

            </section>

            {/*------------------------------- card ----------------------------*/}

            <section className="offers">

                {/* header */}
                <div className="offers__header">
                    <h2>WHAT WE<br />OFFER</h2>

                    <div className="headerLines">
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* cards */}
                <div className="offers__grid">

                    {offersData.map((item, i) => (
                        <div className="offerCard" key={i}>

                            <img src={target} alt="" className="offerIcon" />

                            <h3>{item.title}</h3>

                            {/* animated button */}
                            <button
                                className={`offerBtn ${active === i ? "active" : ""}`}
                                onClick={() => setActive(i)}
                            >
                                <span>FIND OUT MORE  ➔</span>

                            </button>

                        </div>
                    ))}

                </div>

            </section>

            {/*-------------------------------services --------------------------*/}

            <section className="services">

                {/* header */}
                <div className="services__top">
                    <div>
                        <span className="smallTitle">HOW WE CAN HELP YOU</span>
                        <h2>Our Services</h2>
                    </div>

                    <p className="services__desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                {/* slider */}
                <div className="services__slider">

                    <div
                        className="services__track"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {servicesData.map((service, i) => (
                            <div className="serviceCard" key={i}>
                                <img src={service.img} alt="" />

                                <div className="overlay">
                                    <span className="serviceId">[{service.id}]</span>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* arrow */}
                    <button className="nextBtn" onClick={nextSlide}>
                        →
                    </button>

                </div>
            </section>


            {/* -------------------------------process-------------------------- */}

            {/* <section className="process">

                
                <div className="process__header">
                    <div className="process__title">
                        <h2>
                            <span className="outline">STEPS</span>
                            <br />
                            WE DO
                        </h2>

                        <div className="workProcessText">
                            WORK<br />PROCESS
                        </div>
                    </div>

                    
                    <img src={diamond} alt="" className="diamondShape" />
                </div>


                
                <div className="process__grid">

                    {steps.map((step, i) => (
                        <div className={`processCard card${i + 1}`} key={i}>

                            <div className="stepNumber">{step.number}</div>

                            <div className="iconBox">
                                <img src={stepIcon} alt="" />
                            </div>

                            <p>{step.title}</p>

                        </div>
                    ))}

                    
                    <div className="startCircle">
                        LET’S<br />START
                    </div>

                </div>
            </section> */}

            {/*--------------------------------CLIENTS ---------------------------*/}


            <div className="clients">
                <div className="clients__header">
                    <h2 className="clients__title">
                        INFLUENSO <br /> ORIGINALS <span>  OUR CLIENTS</span>
                    </h2>

                    <p className="clients__desc">
                        We collaborate with influencers and businesses worldwide,
                        creating successful brand partnerships and campaigns
                        creating successful brand partnerships and campaigns.
                    </p>
                </div>

                {/* const clients = [client1, client2, client1, client2]; */}

                <div className="clients__slider">

                    <div className="clients__track">
                        {[...clients, ...clients].map((img, i) => (
                            <div className="clientCard" key={i}>

                                <div className="clientFrame">
                                    <img src={frame} className="frameBg" alt="" />
                                    <img src={img} className="clientImg" alt="client" />
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>


            {/*---------------------------------STATS-------------------------------*/}


            <div className="stats">
                <div className="stats__left">
                    <h2 className="stats__title">OUR COMPANY STATS</h2>
                    <p className="stats__desc">
                        Numbers that reflect our growth, performance and commitment to brands that trust us.
                    </p>
                </div>

                <div className="stats__right">
                    <div className="statCard">
                        <h3 className="statCard__number">50+</h3>
                        <p className="statCard__label">VERIFIED <br /> CREATORS</p>
                        <span className="statCard__small">
                            A highly curated, invite-only roster of Indore's most engaging digital talent.
                        </span>
                    </div>

                    <div className="statCard">
                        <h3 className="statCard__number">20+</h3>
                        <p className="statCard__label"> PREMIUM<br /> BRANDS</p>
                        <span className="statCard__small">
                            Partnering with the city's top cafes, event organizers, and lifestyle brands.
                        </span>
                    </div>

                    <div className="statCard">
                        <h3 className="statCard__number">100%</h3>
                        <p className="statCard__label">SEAMLESS <br /> COLLABS</p>
                        <span className="statCard__small">
                            Zero friction from the initial brand pitch to the final published post.                        </span>
                    </div>
                </div>
            </div>


            {/*-----------------------------testimonial--------------------------------*/}

            <section className="testimonial-section">

                <div className="title-row">
                    <h2 className="title">
                        WORDS OF PRAISE FROM OTHERS <br /> ABOUT OUR PRESENCE
                    </h2>

                    <div className="title-loader">
                        <div className="loader-fill" id="loaderFill"></div>
                    </div>
                </div>

                {/* ROW 1 */}
                <div className="marquee">
                    <div className="track">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <Card key={i} data={t} />
                        ))}
                    </div>
                </div>

                {/* ROW 2 (reverse direction) */}
                <div className="marquee reverse">
                    <div className="track">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <Card key={i} data={t} />
                        ))}
                    </div>
                </div>

            </section>


        </section>
    );
};

export default Home;