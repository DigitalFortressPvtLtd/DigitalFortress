import React from "react";
import "./contactus.css";
// import Button from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CustomButton from "./components/CustomButton";
import { blue } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Input, InputAdornment, OutlinedInput } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextareaAutosize from "@mui/base/TextareaAutosize";

function Contactus() {
  return (
    <div className="contact_sec">
      <div className="contact_box">
        <div className="contact_left">
          <div className="l1">
            <h3>Get a quote</h3>
            <p style={{ marginLeft: "0px",color:"white" }}>
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
          </div>
          <div className="l2">
            <CustomButton
              link="tel:+919585583918"
              value="+91-9585583918"
              icon={<LocalPhoneIcon sx={{  color: "#EC9706"  }} />}
            />
            <CustomButton
              link="mailto:contact.mukham@gmail.com"
              value="contact.mukham@gmail.com"
              icon={<EmailIcon sx={{ color: "#EC9706" }} />}
            />
            <CustomButton
              link="https://goo.gl/maps/tRw3oUjmgLyh6kvF6"
              value="Incubation Center VitAp ,G-30"
              icon={<LocationOnIcon sx={{ color: "#EC9706" }} />}
            />
          </div>
          <ul className="l3">
            <a href="https://www.linkedin.com/company/mukham/">
              <li className="social_icon">
                <LinkedInIcon />
              </li>
            </a>
            <li className="social_icon">
              <TwitterIcon />
            </li>
            <li className="social_icon">
              <InstagramIcon />
            </li>
          </ul>
        </div>
        <div style={{ maxWidth: "450px" }} className="formdiv">
          <form
            action="https://formsubmit.co/contact.mukham@gmail.com"
            method="post"
            style={{ width: "100%" }}
          >
            <div className="contact_right">
              <div style={{ width: "100%" }}>
                <span>Your Name</span>
                <OutlinedInput
                  name="name"
                  style={{ width: "100%", marginBottom: "15px" }}
                  startAdornment={
                    <InputAdornment position="start">
                      <PermIdentityIcon />
                    </InputAdornment>
                  }
                />
              </div>
              <div style={{ width: "100%" }}>
                <span>Mail</span>
                <OutlinedInput
                  style={{ width: "100%", marginBottom: "15px" }}
                  name="email"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  }
                />
              </div>
              <div style={{ width: "100%", marginBottom: "15px" }}>
                <span>Message</span> <br />
                <textarea
                  rows="14"
                  width="100%"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="button">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
