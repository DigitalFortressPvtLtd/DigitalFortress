//import React, { useEffect, useRef } from "react";
import Loding from "./components/Loding";
import "./home.css";
import heroimg from "./assets/illustration.png";
import heroimg2 from "./assets/auth.png";
import heroimg3 from "./assets/startup.png";
import playstore_button from "./assets/google-play-badge.png";
import applestore_button from "./assets/apple-badge.svg";
import aboutimg from "./assets/[Mockup] iPhone X.png";
import mockup1 from "./assets/Group.png";
import { useHistory } from "react-router-dom";
import Contactus from "./Contactus";
import { useEffect, useState, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import mukham from "./assets/Mask group.png";
import mauthn from "./assets/Mask group (1).png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Alinks = "/about";
const Plinks = "/product";

function Home() {
  const history = useHistory();
  function LinkTO(link) {
    if (link === "") {
      console.log("Link not attached yet !!!!");
    } else {
      history.push({
        pathname: link,
      });
    }
  }

  const [heading, setHeading] = useState("Your Facial Attendance Right Away");
  const [subheading, setSubheading] = useState(
    "New Mobile Application to ensure facial attendance with 100% Social Distancing."
  );
  const [img, setImg] = useState("");

  const headingArr = [
    "Your Facial Attendance Right Away",
    "Passwordless Authentication",
    "Attendance made faster",
  ];
  const subheadingArr = [
    "New Mobile Application to ensure facial attendance with 100% Social Distancing.",
    "Login and mark your attendance using a complete passwordless system",
    "mark your attendance faster than ever before using our facial authentication system",
  ];
  const imgArr = [heroimg, heroimg2, heroimg3];
  const [index, setIndex] = useState(0);
  let app = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.2 });

  useEffect(() => {
    setHeading(headingArr[index]);
    setSubheading(subheadingArr[index]);
    setImg(imgArr[index]);

    const headlineFirst = document.getElementById("headline");
    const contentP = document.getElementById("content-p");
    const contentImg = document.getElementById("content-img");

    tl.from(contentImg, 0.5, {
      opacity: 0,
      ease: Power3.easeOut,
    })
      .from(headlineFirst, 0.5, {
        opacity: 0,
        y: -20,
        ease: Power3.easeOut,
      })
      .from(contentP, 0.5, {
        opacity: 0,
        y: -20,
        ease: Power3.easeOut,
      });

    // end of fade in animation
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      const headlineFirst = document.getElementById("headline");
      const contentP = document.getElementById("content-p");
      const contentImg = document.getElementById("content-img");

      tl.to(contentImg, 0.5, {
        opacity: 0,
        ease: Power3.easeOut,
      });
      tl.to(headlineFirst, 0.5, {
        opacity: 0,
        ease: Power3.easeOut,
      });
      tl.to(contentP, 0.5, {
        opacity: 0,
        ease: Power3.easeOut,
      });

      setIndex((index) => (index + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Loding />

      <div className="homepage" ref={(el) => (app = el)}>
        {/* Hero section */}
        <section className="sec fixtop">
          <div className="hero-content" ref={(el) => (content = el)}>
            <div className="hero-content-left">
              <h3 id="headline">{heading}</h3>
              <p id="content-p">{subheading}</p>
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
            </div>
            <div className="hero-content-right">
              <img src={img} alt="" id="content-img" />
            </div>
          </div>
        </section>

        {/* about section */}

        <section className="sec about">
          <ScrollAnimation animateIn="fadeIn" duration={1.5}>
            <div className="home--we">
              <h3>We Are</h3>
              <div className="underline"></div>
              <p>
                Mukham Inc, is a fully student driven Start-up accelerating from
                VIT-AP emerged with a goal to solve the problem of tedious
                manual attendance marking system.
              </p>
            </div>
          </ScrollAnimation>
        </section>

        {/* product section */}

        <section className="sec product">
          <ScrollAnimation animateIn="fadeIn" duration={1}>
            <h3 className="h3--margin">OUR PRODUCTS</h3>
            <h4 style={{ fontSize: "1.6rem", fontWeight: "500" ,color:"#F28500"}}>
              Best Solutions For You
            </h4>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={1.5}>
            <div className="products">
              <div className="products--mukham">
                <img src={mukham} />
                <h4 style={{color:"#F28500"}}>Mukham</h4>
                <p>
                  Application to simply the overall process of marking attendace
                </p>
              </div>
              <div className="products--mukham">
                <img src={mauthn} />
                <h4 style={{color:"#F28500"}}>MAuthN</h4>
                <p>
                  Passwordless authentication to remove risk of cyber attacks
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* contact form */}
        <section className="sec">
          <ScrollAnimation animateIn="fadeIn" duration={1.5}>
            <Contactus />
          </ScrollAnimation>
        </section>
      </div>
    </div>
  );
}

export default Home;
