import React from "react";
import heroimg from "../assets/Mukham Logo.png";
import { NavLink } from "react-router-dom";
import playstore_button from "../assets/google-play-badge.png";
import appstore_button from "../assets/apple-badge.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="copyright">
        <p>© Copyright MUKHAM. All Rights Reserved</p>
        <div>
          <a href="/t&c.html">Terms and Conditions</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="http://mukham.in/privacypolicy.html">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
