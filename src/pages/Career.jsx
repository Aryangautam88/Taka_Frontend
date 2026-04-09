import React from "react";
import "./Career.css";
import heroImg from "../assets/hero-pattern.png";

const jobs = [
    {
        id: 1,
        title: "Influencer Outreach Specialist",
        category: "PR & Outreach",
        location: "Indore, M.P",
        type: "Full Time",
        link: "https://forms.gle/ehBSZDHh86WY922h8",
        desc: "Identify and connect with influencers across platforms like Instagram and YouTube. Build strong relationships, manage outreach campaigns, and onboard creators for brand collaborations while ensuring effective communication and long-term partnerships."
    },
    {
        id: 2,
        title: "Content & Production Designer",
        category: "Production",
        location: "Indore, M.P",
        type: "Full Time",
        link: "https://forms.gle/3NKW7Ed2cPTQ1RSC7",
        desc: "Design engaging visuals for influencer campaigns, advertisements, and social media content. Collaborate with marketing teams to maintain brand consistency while creating impactful creatives using tools like Figma, Photoshop, and Illustrator."
    },
    {
        id: 3,
        title: "Sales & Brand Partnerships Executive",
        category: "Sales & Marketing",
        location: "Indore, M.P",
        type: "Full Time",
        link: "https://forms.gle/zHLcno8MLTqVU32J9",
        desc: "Drive business growth by acquiring new brand clients and managing partnerships. Present influencer marketing solutions, close deals, and maintain relationships while ensuring consistent revenue growth and strong client satisfaction & and spelicest."
    }
];

const Career = () => {
    return (
        <div>
            <div className="career">

                {/* 🔥 TOP HEADING */}
                <div className="career-header">
                    <h1 className="career-title">WORK WITH US</h1>

                    <div className="career-nav">
                        <span>Career</span>
                        <span>Open Positions</span>
                        <span> Join Us</span>
                    </div>
                </div>

                {/* 🔥 MAIN IMAGE (Banner) */}
                <div className="career-banner">
                    {/* Image background CSS se aa rha hai */}
                </div>

                {/* 🔥 BOTTOM IMAGE SPACE (placeholder) */}


            </div>

            {/*------------------------------- job cards ------------------------*/}

            <div className="card-career">

                {/* 🔥 HEADING */}
                <h1 className="card-hiring-title">WE ARE HIRING </h1>

                {/* 🔥 CARDS */}
                <div className="card-jobs-container">
                    {jobs.map((job) => (
                        <div className="card-job-card" key={job.id}>

                            {/* 🔥 TOP */}
                            <div className="card-job-top">

                                <span className="card-job-number">Job {job.id}</span>

                                {/* ✅ Dynamic Category */}
                                <h3 className="card-job-category">{job.category}</h3>

                                {/* ✅ Title add kar (important) */}
                                <h2 className="card-job-title">{job.title}</h2>

                                {/* ✅ Dynamic Description */}
                                <p className="card-job-desc">
                                    {job.desc}
                                </p>

                                {/* ✅ Meta Info */}
                                <div className="card-job-meta">
                                    <span className="card-location">📍 {job.location}</span>
                                    <span className="card-type">{job.type}</span>
                                </div>

                            </div>

                            {/* 🔥 BOTTOM */}
                            <div
                                className="card-job-bottom"
                                onClick={() => window.open(job.link, "_blank")}
                            >
                                <h2 className="card-apply-text">Apply Now</h2>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            {/*-------------------------------- Last section------------------------  */}

            <section className="hero-L">
                <div className="hero__container-L">

                    {/* LEFT CONTENT */}
                    <div className="hero__content-L">
                        <h1 className="hero__title-L">
                            Build the Future <span> <br />With Us</span>
                        </h1>

                        <p className="hero__desc-L">
                            At TAKA, we’re redefining influencer marketing by connecting creators
                            with brands in the most seamless way possible. Join a fast-growing team,
                            work on real-world projects, and build something that truly matters.
                        </p>

                        <button className="hero__btn-L">
                            Join Our Team →
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="hero__image-L">
                        <img src={heroImg} alt="career at taka" />
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Career;