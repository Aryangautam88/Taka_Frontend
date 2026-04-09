import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footer from "../assets/footer.png";
import taka_logo from "../assets/taka_logo.png";
import leftImg from "../assets/lefthome.png";
import rightImg from "../assets/righthome.png";
import paperIcon from "../assets/boat.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <>
      {/*------------------------------ contact ----------------------------------*/}

      <section className="contact">

        {/* ===== TOP CONTACT PART ===== */}
        <div className="contact__wrapper">

          {/* LEFT */}
          <div className="contact__left">
            <h2>We Would Love To <br />Hear From You</h2>

            <p>
              Ready to drop the busy work? Whether you are a creator looking to join the exclusive roster, or a brand looking to scale your local reach, drop us a line.
            </p>

            {/* simple paper icon */}
            <div className="paperIcon">
              <img src={paperIcon} alt="paper illustration" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="contact__form">

            <div className="form__row">
              <div className="inputGroup">
                <label>Name</label>
                <input type="text" required />
              </div>

              <div className="inputGroup">
                <label>Email</label>
                <input type="email" required />
              </div>
            </div>

            <div className="inputGroup">
              <label>How we can help you?</label>
              <input type="text" required />
            </div>

            <div className="inputGroup">
              <label>Message</label>
              <textarea rows="3" required></textarea>
            </div>

            <button className="submitBtn">
              SUBMIT ➔
            </button>

          </form>

        </div>


        {/* ===== BOTTOM CTA ===== */}
        <div className="community">

          <div className="community__card image">
            <img src={leftImg} alt="" />
          </div>

          <div className="community__card center">
            <button className="newsletter">SUBSCRIBE TO NEWSLETTER</button>
            <h3>JOIN OUR TAKA<br />COMMUNITY</h3>
          </div>

          <div className="community__card image">
            <img src={rightImg} alt="" />
          </div>

        </div>

      </section>

      <footer className="footer"
        style={{
          backgroundImage: `url(${footer})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain"
        }}>

        {/* TOP SECTION */}
        <div className="footer__container">

          {/* LOGO */}
          <div className="footer__col">
            <div className="footer__logo">
              <img src={taka_logo} alt="logo" />
            </div>
            <p>
              Where brands and creators collaborate smarter to grow faster and reach the right audience.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer__col">
            <h4>Quick Link</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/career">Career</Link></li>
              {/* <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/pages">Pages</Link></li> */}
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION (ALIGNED WITH COLUMNS) */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">

            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="footer__item">
              <FaMapMarkerAlt />
              <span>Indore, Madhya Pradesh</span>
            </a>

            <a href="tel:+917318325128" className="footer__item">
              <FaPhoneAlt />
              <span>(+91) 7318325128</span>
            </a>

            <a href="mailto:mail@Taka.id" className="footer__item">
              <FaEnvelope />
              <span>mail@Taka.id</span>
            </a>

            <div className="footer__socials">
              <a href="https://www.instagram.com/taka.co.in/"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="footer__divider"></div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer__copyright">
          © 2026 Taka - All Rights Reserved
        </div>

      </footer>
    </>
  );
};

export default Footer;