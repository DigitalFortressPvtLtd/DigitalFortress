import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router';
import '../styles/navbar.css'
import heroimg from '../assets/Logo.png'

function Navbar() {
  const [isOpen, setOpen] = useState(true);

  const toggleClass = () => {
    setOpen(!isOpen);
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="navbar_fix" >
      <nav className="navbar_main">
        <div className="logo">
          <NavLink to="/"><img src={heroimg} alt="logo" /></NavLink>
        </div>
        <ul className="nav_links">
          <li>
            <NavLink  exact activeClassName="active_link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active_link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active_link" to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active_link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div
          className={isOpen ? "ham_but" : "ham_but active"}
          onClick={toggleClass}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <aside className="nav_aside" style={isOpen ? { transform: "translateX(100%)" } : { transform: "translateX(0)" }} >
        <nav className="aside_nav">
          <ul className="nav_ul">
            <li style={isOpen ? { transform: "translate(0, 10vh)", opacity:0 } : { transform: "translate(0, 0)", opacity:1 }}>
              <NavLink  onClick={toggleClass} to="/">Home</NavLink>
            </li>
            <li style={isOpen ? { transform: "translate(0, 10vh)", opacity:0 } : { transform: "translate(0, 0)", opacity:1 }}>
              <NavLink onClick={toggleClass} to="/about"> About</NavLink>
            </li>
            <li style={isOpen ? { transform: "translate(0, 10vh)", opacity:0 } : { transform: "translate(0, 0)", opacity:1 }}>
              <NavLink onClick={toggleClass} to="/product"> Product</NavLink>
            </li>
            <li style={isOpen ? { transform: "translate(0, 10vh)", opacity:0 } : { transform: "translate(0, 0)", opacity:1 }}>
              <NavLink onClick={toggleClass} to="/contact"> Contact</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default withRouter(Navbar);
