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
    { num: "01", title: "Verified Matching", desc: "Stop guessing with your marketing budget. We connect you with vetted, local creators whose audience perfectly matches your target demographic." },
    { num: "02", title: "Zero-Friction Setup", desc: "You set the budget and the vibe. We handle the creator negotiations, content briefs, and scheduling so you can focus on your business." },
    { num: "03", title: "Real Foot Traffic", desc: "Move beyond empty vanity metrics. Our highly-targeted campaigns are designed to drive actual, measurable customers right to your doorstep." },
    { num: "04", title: "Premium Collabs", desc: "No more sending cold DMs or begging for free coffee. Get direct access to exclusive paid and barter collaborations with Indore's top brands." },
    { num: "05", title: "Zero Admin Work", desc: "We pitch the brands, secure the budgets, and negotiate the terms on your behalf. You just show up, experience the brand, and create." },
    { num: "06", title: "100% Free Roster", desc: "Unlike traditional agencies, we don't take hidden cuts from your barter deals. Joining the exclusive TAKA network is completely free for verified talent." },
];

const Services = () => {
    return (
        <div>

            {/*---------------------------- Top --------------------------------*/}

            <section className="servicesHero">

                {/* CENTER TEXT */}
                <div className="heroCenter-L">

                    <span className="heroTopText-L">
                        India’s Premium Influencer Marketing Platform
                    </span>

                    <h1 className="heroTitle-L">
                        <span className="small-L">INFLUENCE</span>
                        <br />
                        <span className="medium-L">COMMERCE</span>
                        <br />
                        <span className="large-L">CONNECTED</span>
                        <br />
                    </h1>

                    {/* <p className="heroSubText-L">
                        Authentic Brand Collaborations & Real Engagement
                    </p> */}

                </div>

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

                            <p>{item.desc}</p>

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