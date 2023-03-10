import React from "react";
import Page1 from "./assets/Page1.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import bot1 from "./assets/bot 1.png";
import UI from "./assets/UI.png";
import map from "./assets/map 3.png";
import avalability from "./assets/avalability.png";
import mauthnImg from "./assets/mauthnImg.png";
import "./styles/product.css";
import playstore_button from "./assets/google-play-badge.png";
import applestore_button from "./assets/apple-badge.svg";
import { fontSize, fontWeight } from "@mui/system";
import ScrollAnimation from "react-animate-on-scroll";

function Product() {
  return (
    <div>
      <div className="page1">
        <div className="section2">
          <ScrollAnimation animateIn="fadeIn" duration={1}>
            <h3>Mukham App</h3>
            <p className="page1--p">
              Application integrated to remind and process the flow of marking
              attendance with simplified UI which takes less than 10 seconds to
              mark attendance
            </p>
            <img src={Page1} className="image" />
          </ScrollAnimation>
        </div>

        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <h3>MUKHAM FEATURES</h3>
          <h4 style={{ fontSize: "1.6rem", fontWeight: "500" }}>
            Everything you need
          </h4>
        </ScrollAnimation>
        {/* <div className="box">
          <img src={img1} className="side" />
          <div className="box--text">
            <h4>Passwordless Authentication</h4>
            <p>
              You dont need to remember tones of passwords anymore. Mukham is
              built to make authentication seamless through FACIAL RECOGNITION
            </p>
          </div>
        </div>
        <div className="box-2 box">
          <div className="box--text">
            <h4>Geo Fencing </h4>
            <p>
              A virtual perimeter for real-world location to eliminate the
              possibility of location spoofing and help to enhance tracking
            </p>
          </div>
          <img src={img2} className="side-2" />
        </div>
        <div className="box">
          <img src={img3} className="side" />
          <div className="box--text">
            <h4>Data Management</h4>
            <p>
              Handles whole organization employees data and to compute statics
              in a large scale
            </p>
          </div>
        </div>

        <h4 className="additional--h4">Additional Features</h4>

        <div className="additional--features">
          <div className="additional--box">
            <img src={bot1} />
            <h6>Mukham Bot Support</h6>
            <p>Instant support to solve your issues and clarity doubts</p>
          </div>
          <div className="additional--box">
            <img src={map} />
            <h6>3D Maps</h6>
            <p>Organization based 3D maps to track the employees </p>
          </div>
          <div className="additional--box">
            <img src={UI} />
            <h6>Interactive UI</h6>
            <p>Comfortable user interface for better visual experience </p>
          </div>
        </div>

        <div className="availability">
          <h3>Available for both android and iOS users</h3>
          <div className="buttons">
            <a
              href="https://mukham.in/app.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={playstore_button} alt="playstore" />
            </a>
            <a
              className="app-button"
              href="https://mukham.in/app.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={applestore_button} alt="applestore" />
            </a>
          </div>
        </div> */}

        <div className="section fdc">
          <ScrollAnimation animateIn="fadeIn" duration={1}>
            <div className="about_page_content">
              <div className="about_page_left">
                <h4>Passwordless Authentication</h4>
                <p style={{ marginLeft: "0" }}>
                  You dont need to remember tones of passwords anymore. Mukham
                  is built to make authentication seamless through FACIAL
                  RECOGNITION
                </p>
              </div>
              <div className="about_page_right">
                <img src={img1} alt="startup llustration" />
              </div>
            </div>
          </ScrollAnimation>

          <br />
          <br />
          <ScrollAnimation animateIn="fadeIn" duration={1}>
            <div className="about_page_content fdcm700">
              <div className="about_page_right">
                <img src={img2} alt="startup llustration" />
              </div>
              <div className="about_page_left">
                <h4>Geo Fencing</h4>
                <p style={{ marginLeft: "0" }}>
                  A virtual perimeter for real-world location to eliminate the
                  possibility of location spoofing and help to enhance tracking
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <br />
          <br />
          <ScrollAnimation animateIn="fadeIn" duration={1}>
            <div className="about_page_content">
              <div className="about_page_left">
                <h4>Data Management</h4>
                <p style={{ marginLeft: "0" }}>
                  Handles whole organization employees data and to compute
                  statics in a large scale
                </p>
              </div>
              <div className="about_page_right">
                <img src={img3} alt="startup llustration" />
              </div>
            </div>
          </ScrollAnimation>
          <br />
          <br />
        </div>

        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <h3 className="additional--h4">Additional Features</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <div className="additional--features">
            <div className="additional--box">
              <img src={bot1} />
              <h5>Mukham Bot Support</h5>
              <p>Instant support to solve your issues and clarity doubts</p>
            </div>
            <div className="additional--box">
              <img src={map} />
              <h5>3D Maps</h5>
              <p>Organization based 3D maps to track the employees </p>
            </div>
            <div className="additional--box">
              <img src={UI} />
              <h5>Interactive UI</h5>
              <p>Comfortable user interface for better visual experience </p>
            </div>
          </div>
        </ScrollAnimation>

        <div className="availability">
          <ScrollAnimation animateIn="fadeIn" duration={1}>
            <h3>Available for both android and iOS users</h3>
            <div className="buttons">
              <a
                href="https://mukham.in/app.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playstore_button} alt="playstore" />
              </a>
              <a
                className="app-button"
                href="https://mukham.in/app.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={applestore_button} alt="applestore" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <h3>MAuthN</h3>
          <div className="mauthn">
            <img src={mauthnImg} />
            <div className="mauthn--text">
              <p>
                Remote authentication to provide flexibility of using any device
                for authentication with the security of multimodal and
                multifactor authn.{" "}
              </p>
              <p>
                Allowing user to use one or the combination of various
                passwordless authentication factors like biometrics, facial
                recognition, device attestation, smart cards to keyfobs.{" "}
              </p>
              <p className="text--blue">COMING SOON</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Product;
