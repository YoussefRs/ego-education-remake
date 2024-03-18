import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../../../assets/images/logo-ego-white.png";
import { Link } from "react-router-dom";

export default function Navbar({ show }) {
  const navRef = useRef(null);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        navRef.current &&
        (document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80)
      ) {
        navRef.current.classList.add("fixed_nav");
      } else if (navRef.current) {
        navRef.current.classList.remove("fixed_nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <section className="flex_content">
        <figure className="logo fixed_flex" >
          <Link to={"/"} className="p-0">
            <img src={logoWhite} alt="white logo" id="nav_logo"/>
          </Link>
        </figure>
      </section>
      {/* <nav className="flex_content nav_content" id="nav_content">
        <a href="#" className="active">Home</a>
        <a href="#gallery">All Departments</a>
        <a href="#blogs">E-Portal</a>
        <a href="javascript:void(0)" className="contact_btn">Contact us</a>
        <a href="#about">About us</a>
        
        
    </nav> */}
      <section className="flex_content nav_content" id="nav_content">
        <a
          href="/"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleLinkClick("home")}
          style={{ color: "#fff" }}
        >
          Home
        </a>
        <Link
          to="/courses"
          className={activeLink === "Courses" ? "active" : ""}
          onClick={() => handleLinkClick("Courses")}
          style={{ color: "#fff" }}
        >
          Courses
        </Link>
        <Link
          to="/elearning"
          className={activeLink === "eLearning" ? "active" : ""}
          onClick={() => handleLinkClick("eLearning")}
          style={{ color: "#fff" }}
        >
          eLearning
        </Link>
        <a
          href="#"
          className={`contact_btn ${ activeLink} === "partners" ? "active" : ""`}
          onClick={() => handleLinkClick("partners")}
          style={{ color: "#fff" }}
        >
          Our Partners
        </a>
        <Link
          to="/research"
          className={activeLink === "research" ? "active" : ""}
          onClick={() => handleLinkClick("research")}
          style={{ color: "#fff" }}
        >
          Ego Research
        </Link>
        <Link
          to="/enrollment"
          className={activeLink === "apply" ? "active" : ""}
          onClick={() => handleLinkClick("apply")}
          style={{ color: "#fff" }}
        >
          Apply
        </Link>
        <Link
          to="/about"
          className={activeLink === "about" ? "active" : ""}
          onClick={() => handleLinkClick("about")}
          style={{ color: "#fff" }}
        >
          About us
        </Link>
      </section>
      <section className="flex_content">
        <a
          className="ham"
          onClick={() => {
            show((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </a>
      </section>
    </nav>
  );
}
