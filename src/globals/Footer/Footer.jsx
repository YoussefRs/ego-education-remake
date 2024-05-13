import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
import { Link } from "react-router-dom";
import logo from "../../assets/Logos/logo-ego-white.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="footer-contents">
          <div className="footer-col footer-col-1">
            <div className="col-title">
              <img src={logo} alt="ego-edication" />
            </div>
            <div className="col-contents">
              <p>
                <strong>eGO Education</strong> was born with the motivation to
                enter the market of online education providers through an
                excellent training offer present in some residential
                universities, with all their limitation, but lacking or
                insufficient in the world of e-learning.
              </p>
            </div>
          </div>

          <div className="footer-col footer-col-2">
            <div className="col-title">
              <h3>Contact</h3>
            </div>
            <div className="col-contents">
              <div className="contact-row">
                <span>Address</span>
                <span>
                  40, Villa Fairholme, Sir Augustus Bartolo Street, Ta’ Xbiex
                  XBX 1095, Malta
                </span>
              </div>
              {/* <div className="contact-row">
                <span>Phone</span>
                <span>+012 987 23456</span>
              </div> */}
              <div className="contact-row">
                <span>Website</span>
                <a>www.ego-education.com</a>
              </div>
              <div className="contact-row">
                <span>Email</span>
                <span>info@ego-education.com</span>
              </div>
            </div>
          </div>

          <div className="footer-col footer-col-3">
            <div className="col-title">
              <h3>Quick Links</h3>
            </div>
            <div className="col-contents">
              <a href="/">Home</a>
              <a href="/courses">Courses</a>
              <a href="/elearn">eLearn</a>
              <a href="/partners">Partners</a>
              <a href="/apply">Apply</a>
              <a href="/about">About Us</a>
              <a href="/policy">Policy & Privacy</a>
            </div>
          </div>

          {/* <div className="footer-col footer-col-4">
            <div className="col-title">
              <h3>Newsletter</h3>
            </div>
            <div className="col-contents">
              <form className="newsletter">
                <input type="email" placeholder="Your Email" />
                <button className="newsletter-btn btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="copy-rights">
          <p>All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
