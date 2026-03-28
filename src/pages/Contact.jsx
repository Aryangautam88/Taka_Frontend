import React from "react";
import "./Contact.css";
import cafe from "../assets/cafe.png"; // apni image ka path yaha daal

const Contact = () => {
  return (
    <div className="contactSection">

      {/* TOP TEXT */}
      <h1 className="outlineText">WE ARE NEXT GEN</h1>
      <h2 className="mainText">INFLUENCER MARKETING AGENCY</h2>

      {/* INFO ROW */}
      <div className="infoRow">
        <span>SINCE 2026</span>
        <span>A+ Rating</span>
      </div>

      {/* IMAGE BOX */}
      <div className="videoBox">
        <img src={cafe} alt="cafe" />

        
      </div>

    </div>
  );
};

export default Contact;