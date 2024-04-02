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
      {/* <div className="contact-us section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  align-self-center">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <h2>Feel free to contact us anytime</h2>
                <p>
                  Thank you for choosing our templates. We provide you best CSS
                  templates at absolutely 100% free of charge. You may support
                  us by sharing our website to your friends.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-content">
                <form id="contact-form" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Your Name..."
                          autoComplete="on"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your E-mail..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <a
                        className="_btn btn-cta d-flex justify-content-center"
                        href="/enrollment"
                      >
                        Send
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>Copyright © 2024 Ego Eduation. All rights reserved.</p>
          </div>
        </div>
      </footer> */}

      <section class="footer mt-5" id="footer">
        <div class="footer-contents">
          <div class="footer-col footer-col-1">
            <div class="col-title">
              <img src={logo} alt="ego-edication" />
            </div>
            <div class="col-contents">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>

          <div class="footer-col footer-col-2">
            <div class="col-title">
              <h3>Contact</h3>
            </div>
            <div class="col-contents">
              <div class="contact-row">
                <span>Address</span>
                <span>1234 Street, Colifornia, USA</span>
              </div>
              <div class="contact-row">
                <span>Phone</span>
                <span>+012 987 23456</span>
              </div>
              <div class="contact-row">
                <span>Website</span>
                <span>ego-education.com</span>
              </div>
              <div class="contact-row">
                <span>Email</span>
                <span>info@ego-education.com</span>
              </div>
            </div>
          </div>

          <div class="footer-col footer-col-3">
            <div class="col-title">
              <h3>Quick Links</h3>
            </div>
            <div class="col-contents">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Courses</a>
              <a href="#">Categories</a>
              <a href="#">Testimonials</a>
            </div>
          </div>

          {/* <div class="footer-col footer-col-4">
            <div class="col-title">
              <h3>Newsletter</h3>
            </div>
            <div class="col-contents">
              <form class="newsletter">
                <input type="email" placeholder="Your Email" />
                <button class="newsletter-btn btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div> */}
        </div>
        <div class="copy-rights">
          <p>All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
