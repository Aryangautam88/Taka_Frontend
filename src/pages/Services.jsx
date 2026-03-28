import React from "react";
import "./Services.css";
import bg from "../assets/service-bg.png"; // apni image laga
import videoImg from "../assets/video.png";

const steps = [
    { id: "01", title: "Creative", sub: "Images", desc: "High-quality creative visuals for your brand." },
    { id: "02", title: "Shooting", sub: "Animation", desc: "Professional video shoots and animations." },
    { id: "03", title: "Branding", sub: "Videos", desc: "Build strong brand identity with strategy.", },
    { id: "04", title: "Creative", sub: "Designing", desc: "Unique and modern design solutions." },
    { id: "05", title: "Shooting", sub: "Marketing", desc: "Marketing campaigns that drive results." },
];

const data = [
    { num: "01", title: "Lorem Ipsum" },
    { num: "02", title: "Lorem Ipsum" },
    { num: "03", title: "Lorem Ipsum" },
    { num: "04", title: "Lorem Ipsum" },
    { num: "05", title: "Lorem Ipsum" },
    { num: "06", title: "Lorem Ipsum" },
];

const Services = () => {
    return (
        <div>

            {/*---------------------------- Top --------------------------------*/}

            <section className="servicesHero">

                {/* Background Image */}
                <img src={bg} alt="service" className="bgImage" />

                {/* Dark Overlay */}
                <div className="overlay1"></div>

                {/* Bottom Steps */}
                <div className="stepsRow">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`stepItem ${step.active ? "active" : ""}`}
                        >

                            {/* Tooltip */}
                            <div className="hoverBox">
                                {step.desc}
                            </div>

                            <div className="circle">
                                {step.active ? "↗" : step.id}
                            </div>

                            <div>
                                <h4>{step.title}</h4>
                                <span>{step.sub}</span>
                            </div>

                        </div>
                    ))}
                </div>

            </section>

            {/* -----------------------Features---------------------------------- */}

            <section className="features">

                <div className="features__grid">
                    {data.map((item, i) => (
                        <div className="featureCard" key={i}>

                            {/* BIG NUMBER */}
                            <span className="bgNumber">{item.num}</span>

                            {/* CONTENT */}
                            <h3>{item.title}</h3>

                            <p>
                                Glaebam ipsam nunc at hic reponat nam dicta lius te est iriure in aut
                                stante inceptos scandalum germaniafioniam vincere risus Glaebam ipsam
                                nunc at hic reponat nam dicta lius te est iriure in aut stante
                                inceptos scandalum germaniafioniam vincere risus
                            </p>

                        </div>
                    ))}
                </div>

            </section>

            {/*=---------------------- videoSection -----------------------------*/}

            <section className="videoSection">

                <div className="videoContainer">
                    <img src={videoImg} alt="video preview" />
                </div>

            </section>

        </div>
    );
};

export default Services;