import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import toolsImg from "../assets/toolsImg.png";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/service2.avif";
import s3 from "../assets/service3.avif";
import s4 from "../assets/service4.avif";
// import stepIcon from "../assets/stepIcon.png";
// import diamond from "../assets/dimond.png";
// import infinity from "../assets/infinity.png";
import influencer1 from "../assets/influencer1.jpeg";
import influencer2 from "../assets/influencer2.jpeg";
import influencer3 from "../assets/influencer3.jpeg";
import influencer4 from "../assets/influencer4.png";
import influencer5 from "../assets/influencer5.png";
// import leftImg from "../assets/lefthome.png";
// import rightImg from "../assets/righthome.png";
// import paperIcon from "../assets/boat.png";
import center from "../assets/center.png";
import frame from "../assets/Influencer_Card.png";
import mobileCenter from "../assets/homeimage.png";
import { FaBullseye } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { HiOutlineSparkles } from "react-icons/hi";




const offersData = [
    { title: "Inbound Collabs", icon: <FaBullseye /> },
    { title: "The Escrow Vault", icon: <RiSecurePaymentLine /> },
    { title: "Zero Admin Work", icon: <MdOutlineAdminPanelSettings /> },
    { title: "Verified Lead Reach", icon: <AiOutlineCheckCircle /> },
    { title: "Risk Free Execution", icon: <BiRocket /> },
    { title: "Effortless Matchmaking", icon: <HiOutlineSparkles /> },
];

const clients = [
    { img: influencer1, name: "Aishwary Agrawal", followers: "6.3k", type: "Fashion Influencer" },
    { img: influencer2, name: "Tanisha Sharma", followers: "171k", type: "Lifestyle Creator" },
    { img: influencer3, name: "Shree Thakur", followers: "62.2k", type: "Fitness Influencer" },
    { img: influencer4, name: "Neha Jain", followers: "150K", type: "Beauty Influencer" },
    { img: influencer5, name: "Simran Kaur", followers: "95K", type: "Travel Blogger" },
];


const servicesData = [
    {
        id: "001",
        title: "Verified Creator Matchmaking",
        desc: "We hand-pick local talent whose audience aligns perfectly with your target market, eliminating the guesswork from influencer marketing.",
        img: s1,
    },
    {
        id: "002",
        title: "Premium Collabs",
        desc: "No more cold dms or spamming managers. We get you direct access to premium paid and barter collabs.",
        img: s2,
    },
    {
        id: "003",
        title: "Real Foot Traffic",
        desc: "We drive actual, measurable customers to your stores through our perfect campaigns.",
        img: s3,
    },
    {
        id: "004",
        title: "100% Free Roster",
        desc: "We don't charge you to join, it's 100% free to join as an influencer, no investment just return.",
        img: s4,
    },
];




// const testimonials = [
//     {
//         name: "Alena Levin",
//         role: "CEO & Co-Founder of ABC Company",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
//         img: "https://randomuser.me/api/portraits/women/68.jpg",
//     },
//     {
//         name: "Alena Levin",
//         role: "CEO & Co-Founder of ABC Company",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//         img: "https://randomuser.me/api/portraits/women/69.jpg",
//     },
//     {
//         name: "Alena Levin",
//         role: "CEO & Co-Founder of ABC Company",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//         img: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//     {
//         name: "Alena Levin",
//         role: "CEO & Co-Founder of ABC Company",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//         img: "https://randomuser.me/api/portraits/women/66.jpg",
//     },
//     {
//         name: "Alena Levin",
//         role: "CEO & Co-Founder of ABC Company",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//         img: "https://randomuser.me/api/portraits/women/67.jpg",
//     },
// ];

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

// const clients = [influencer1, influencer2, influencer3, influencer4, influencer5, influencer4];


const Home = () => {



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

            {/*------------------------------- Top -----------------------------*/}

            <section className="trusted-section">

                {/* Upper Text */}
                <div className="trusted-header">
                    <h1>
                        The First Verified Creator Network <br />
                        Influence. Commerce. Connected.
                    </h1>
                    <p>
                        Where top creators meet premium brands.
                        No noise. No fake engagement.
                        Only seamless, impactful collaborations.
                    </p>
                </div>

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
                            TAKA is an exclusive, data-driven platform built for Indore's creator economy.
                            We realized the old way of local marketing is broken—creators hate sending cold DMs,
                            and brands are tired of paying for empty metrics. We built TAKA to solve both,
                            creating a seamless pipeline between authentic storytelling and real commerce.
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

                            <div className="offerIcon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <Link to="/services">
                                <button className="offerBtn">
                                    <span>FIND OUT MORE ➔</span>
                                </button>
                            </Link>

                        </div>
                    ))}

                </div>

            </section>

            {/*------------------------------- Stats ----------------------------*/}

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

            {/*-------------------------------services --------------------------*/}

            <section className="services">

                {/* header */}
                <div className="services__top">
                    <div>
                        <span className="smallTitle">HOW WE CAN HELP YOU</span>
                        <h2>Our Services</h2>
                    </div>

                    <p className="services__desc">
                        We replace traditional, high-friction marketing with a seamless,
                        verified creator network designed to drive actual foot traffic and measurable ROI.
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

            {/*--------------------------------CLIENTS ---------------------------*/}

            <div className="clients">

                <div className="clients__header">
                    <h2 className="clients__title">
                        OUR CLIENTS <span className="clients__highlight"></span>
                    </h2>

                    <p className="clients__desc">
                        We collaborate with influencers and businesses worldwide,
                        creating successful brand partnerships and campaigns
                        creating successful brand partnerships and campaigns.
                    </p>
                </div>

                <div className="clients__slider">
                    <div className="clients__track">

                        {[...clients, ...clients].map((client, i) => (
                            <div className="clientCard" key={i}>

                                <div className="clientFrame">

                                    {/* frame */}
                                    <img
                                        src={frame}
                                        className="frameBg"
                                        alt="frame"
                                    />

                                    {/* client image */}
                                    <img
                                        src={client.img}
                                        className="clientImg"
                                        alt={client.name}
                                    />

                                    {/* 🔥 OVERLAY TEXT */}
                                    <div className="clientOverlay">
                                        <h4>{client.name}</h4>

                                        {/* 🔥 NEW TYPE */}
                                        {/* <span className="clientType">{client.type}</span> */}

                                        <p>{client.followers} Followers</p>
                                        <span className="clientType">{client.type}</span>
                                    </div>


                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>

            {/*-------------------------------testimonial--------------------------------*/}

            {/* <section className="testimonial-section">

                <div className="title-row">
                    <h2 className="title">
                        WORDS OF PRAISE FROM OTHERS ABOUT OUR PRESENCE
                    </h2>

                    <div className="title-loader">
                        <div className="loader-fill" id="loaderFill"></div>
                    </div>
                </div>

                
                <div className="marquee">
                    <div className="track">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <Card key={i} data={t} />
                        ))}
                    </div>
                </div>

               
                <div className="marquee reverse">
                    <div className="track">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <Card key={i} data={t} />
                        ))}
                    </div>
                </div>

            </section> */}


        </section>
    );
};

export default Home;