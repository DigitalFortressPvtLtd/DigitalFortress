import React from "react";
import "./styles/about.css";
import mission from "./assets/mission.png";
import aboutimg from "./assets/aboutimg.png";
import TeamCards from "./components/TeamCards";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <div>
      <div className="section about-bg">
        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <div className="aboutcontent">
            <h3>About Us</h3>
            <p>
              Mukham Inc, is a fully student driven Start-up accelerating from
              VIT-AP emerged with a goal to solve the problem of tedious manual
              attendance marking system.
            </p>
          </div>
        </ScrollAnimation>
      </div>
      <br />
      <br />
      <ScrollAnimation animateIn="fadeIn" duration={1}>
        <div className="mission">
          <h3>Our Mission</h3>
          <div className="about_page_content fdcm700 mission">
            <div className="about_page_right">
              <img src={mission} alt="mission llustration" />
            </div>
            <div className="about_page_left" style={{ maxWidth: "500px" }}>
              <p>
                The main objective of Mukham is to have a solution other than
                the traditional fingerprint recognition for TnA (Time and
                Attendance) such as facial attendance application that utilizes
                100% social distancing which, at a times like pandemics, is
                extremely useful so as not to spread the virus.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="section fdc">
        <h3>Meet Our Team</h3>
        <br />
        <br />

        <TeamCards />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;
