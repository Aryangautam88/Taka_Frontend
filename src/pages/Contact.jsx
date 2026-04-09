import React from "react";
import "./Contact.css";
import boatImg from "../assets/boat1.png";

const Contact = () => {
  return (
    <div className="contact-container-c">
      <div className="contact-card-c">

        {/* LEFT */}
        <div className="contact-left-c">
          <h1>
            We Would Love To <br /> Hear From You
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>

          <img src={boatImg} alt="icon" className="contact-img-c" />
        </div>

        {/* RIGHT */}
        <div className="contact-right-c">
          <div className="input-row-c">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <input
            type="text"
            placeholder="How we can help you?"
            className="full-c"
          />

          <textarea placeholder="Message"></textarea>

          <button className="submit-btn-c">
            SUBMIT ↗
          </button>
        </div>

      </div>
    </div>
  );
};

export default Contact;