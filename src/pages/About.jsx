import React from "react";
import "./About.css";
import about_hero1 from "../assets/about_hero1.png";
import about_hero2 from "../assets/about_hero2.png";
import diamond1 from "../assets/diamond1.png";
import about3 from "../assets/about3.png";
import about_cta from "../assets/about_cta.png";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about__container">

          {/* LEFT CONTENT */}
          <div className="about__content">

            <h1 className="about__title">
              Lorem Ipsum Is <br /> Simply Dummy
            </h1>

            <p className="about__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>

            <button className="about__cta">
              LET’S <br /> START
            </button>

          </div>


          {/* RIGHT IMAGES */}
          <div className="about__gallery">

            <div className="about__card about__card--left">
              <img
                src={about_hero1}
                alt="Creative team"
                className="about__image"
              />

              <span className="about__stat">85%</span>

              <p className="about__stat-text">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>


            <div className="about__card about__card--right">
              <img
                src={about_hero2}
                alt="Creative workspace"
                className="about__image"
              />

              <span className="about__stat">85%</span>

              <p className="about__stat-text">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FOUNDER SECTION ================= */}

      <section className="founder">

        <div className="founder__container">

          {/* LEFT IMAGE */}
          <div className="founder__image-wrapper">
            <img
              src={about_hero1}
              alt="Founder"
              className="founder__image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="founder__content">

            <span className="founder__bg-text">Our Founder</span>

            <h2 className="founder__title">
              What He Says
            </h2>

            <p className="founder__quote">
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500, Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500.”
            </p>

            <h3 className="founder__name">
              Mr. Abhishek Pandey
            </h3>

            <p className="founder__role">
              Our Founder
            </p>

          </div>

        </div>

      </section>





      {/* ================= TEAM SECTION ================= */}

      <section className="team">

        <div className="team__container">

          {/* HEADER */}

          <div className="team__header">

            <div className="team__left">

              <img src={diamond1} className="team__diamond" alt="diamond" />

              <p className="team__desc">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
              </p>

            </div>


            <div className="team__right">

              <span className="team__outline">TEAM OF</span>

              <div className="team__heading">
                <h3 className="team__subtitle">Meet The <br /> Crew</h3>
                <h2 className="team__title">Experts</h2>
              </div>

            </div>

          </div>



          {/* TEAM MEMBERS */}

          <div className="team__list">

            <div className="team__member">

              <div className="team__info">

                <div className="team__avatar">
                  <img src={about_hero1} alt="team" />
                </div>

                <h4>David Cooper <span>/ App Developer</span></h4>

              </div>

              <p className="team__link">About Him ↗</p>

            </div>


            <div className="team__member">

              <div className="team__info">

                <div className="team__avatar">
                  <img src={about_hero1} alt="team" />
                </div>

                <h4>David Cooper <span>/ App Developer</span></h4>

              </div>

              <p className="team__link">About Him ↗</p>

            </div>


            <div className="team__member">

              <div className="team__info">

                <div className="team__avatar">
                  <img src={about_hero1} alt="team" />
                </div>

                <h4>David Cooper <span>/ App Developer</span></h4>

              </div>

              <p className="team__link">About Him ↗</p>

            </div>


            <div className="team__member">

              <div className="team__info">

                <div className="team__avatar">
                  <img src={about_hero1} alt="team" />
                </div>

                <h4>David Cooper <span>/ App Developer</span></h4>

              </div>

              <p className="team__link">About Him ↗</p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FULL IMAGE SECTION ================= */}

      <section className="full-image">
        <img src={about3} alt="visual" />
      </section>




      {/* ================= ABOUT CTA SECTION ================= */}

      <section className="about_cta">

        <div className="about_cta__container">

          {/* LEFT CONTENT */}

          <div className="about_cta__content">

            <h2 className="about_cta__title">
              Lorem Ipsum Is <span>Simply</span>
            </h2>

            <p className="about_cta__desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>

            <div className="about_cta__input">

              <input type="email" placeholder="Your e-mail" />

              <span className="about_cta__arrow">↗</span>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="about_cta__image">
            <img src={about_cta} alt="design element" />
          </div>

        </div>

      </section>


      {/* ================= FEATURES SECTION ================= */}

      <section className="about_features">

        <div className="about_features__container">

          {/* CARD 1 */}
          <div className="about_features__card">
            <span className="about_features__number">01</span>

            <h3>Lorem Ipsum</h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <a href="#">FIND OUT MORE ↗</a>
          </div>


          {/* CARD 2 */}
          <div className="about_features__card">
            <span className="about_features__number">02</span>

            <h3>Lorem Ipsum</h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <a href="#">FIND OUT MORE ↗</a>
          </div>


          {/* CARD 3 */}
          <div className="about_features__card">
            <span className="about_features__number">03</span>

            <h3>Lorem Ipsum</h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <a href="#">FIND OUT MORE ↗</a>
          </div>

        </div>

      </section>

    </>
  );
};

export default About;