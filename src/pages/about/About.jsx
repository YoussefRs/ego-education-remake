import React, { useEffect } from "react";
import "./About.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import PartnersSlider from "../../globals/Sliders/PartnersSlider";
import CourseSlider from "../../globals/Sliders/CourseSlider";
import { useTranslation } from "react-i18next";
import girl from "../../assets/Home/Online-Education.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faFlask,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const { t } = useTranslation();
  const { lecturers } = t("home.homeLecturers");
  const { title, subtitle, specialWord, s1, s2, s3, s4, highlight, egoWord } =
    t("about");
  return (
    <>
      <SubHeader
        title={"About"}
        path={[{ url: "/about", label: "Home" }]}
        current={"About"}
      />
      <div className="it-about-area p-relative mt-5">
        <div class="container it-about-ctr" data-aos={"zoom-in"}>
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6">
              <div class="it-about-thumb-box p-relative">
                <div class="it-about-thumb-1 d-none d-xl-block">
                  <img
                    src="https://ordainit.com/educate/assets/img/about/xthumb-1.jpg.pagespeed.ic.lMYKGt0Rh-.webp"
                    alt=""
                  />
                </div>
                <div class="it-about-thumb-2 d-none d-xl-block">
                  <img
                    src="https://ordainit.com/educate/assets/img/about/xthumb-2.jpg.pagespeed.ic.vXEBNNCjSj.webp"
                    alt=""
                  />
                </div>
                <div class="it-about-main-thumb text-xl-end text-center">
                  <img
                    src="https://ordainit.com/educate/assets/img/about/xthumb-3.jpg.pagespeed.ic.LWub8q9OcZ.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="it-about-right-box">
                <div class="it-about-title-box mb-4">
                  <span class="it-section-subtitle wdt-heading-subtitle ">
                    {title}{" "}
                  </span>
                  <h4 class="it-section-title mt-2">
                    {subtitle}{" "}
                    <strong style={{ color: "#046635" }}>{specialWord}</strong>
                  </h4>
                </div>
                <div class="it-about-text pb-10">
                  <p>
                    <span style={{ color: "#046635" }}>{egoWord}</span> {s1}
                  </p>
                  <p>
                    <span style={{ color: "#046635" }}>{egoWord}</span> {s2}
                  </p>
                  <p>{s3}</p>
                  <p>
                    <span style={{ color: "#046635" }}>{egoWord}</span> {s4}{" "}
                    <span style={{ color: "#046635" }}>{highlight}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PartnersSlider />
      <div className="it-about-area p-relative our-mission py-5">
        <div class="container it-about-ctr">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6" data-aos={"slide-right"}>
              <div class="it-about-right-box">
                <span class="wdt-heading-subtitle mb-4">OUR MISSION</span>
                <p>
                  Our mission is to train the world to come: several
                  institutions have underlined the necessity of continuous
                  learning in order to reduce the skills shortage we are
                  starting to face. The staffing firm Manpower reported that{" "}
                  <strong style={{ color: "#046635" }}>
                    54% of companies have troubles finding the right employees
                    with the right skills
                  </strong>
                  , the advisory firm Gartner shows that global talent shortage
                  is now the top emerging risk facing organizations, with 63% of
                  respondents indicating that a talent shortage was a key
                  concern for their organization. Furthermore, the firm HDI
                  values the effects of the issue in $8 trillion in unrealised
                  revenue by 2030.
                  <br />
                  <br />
                  <strong style={{ color: "#046635" }}>eGO Education</strong>’s
                  goal is to become an{" "}
                  <strong style={{ color: "#046635" }}>
                    international Higher Education Institute
                  </strong>{" "}
                  that delivers highly specialised courses using the most
                  important and innovative existing technological tools. This
                  training offer, rarely present in current online universities,
                  will be implemented through knowledge of local work dynamics,
                  the needs of competitiveness and internationalisation of the
                  global market and through partnerships with the structures
                  present therein.
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6" data-aos={"slide-left"}>
              <div class="it-about-thumb-box  p-relative">
                <div class="it-about-main-thumb text-xl-end text-center">
                  <img
                    src="https://images.pexels.com/photos/3747519/pexels-photo-3747519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    id="mission-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-section-about mb-5 mt-5" data-aos={"zoom-out"}>
        <h2 className="container-heading-green" style={{ color: "#046635" }}>
          LINKING UP EDUCATION
        </h2>
        <h1 className="container-title text-black fw-bold text-center mb-5">
          Explore Our
          <span style={{ color: "#046635" }}> Innovative Courses</span>
        </h1>
        <CourseSlider />
      </div>
      <div className="lecturers-section-about d-flex flex-column py-5">
        <h2
          className="container-heading-green"
          style={{ color: "#046635" }}
          data-aos={"zoom-in"}
        >
          Our Lecturers
        </h2>
        <h1
          className="container-title text-black fw-bold text-center mb-5"
          data-aos={"zoom-in"}
        >
          Our Experienced
          <span style={{ color: "#046635" }}> Lecturers</span>
        </h1>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="row">
            {lecturers?.map((lecturer, i) => (
              <div class="col-lg-4 col-md-6 col-sm-12 " data-aos={"flip-up"}>
                <div class="card mb-3" style={{ width: "20rem" }}>
                  <img
                    class="card-img-top"
                    src={lecturer.img}
                    height="380"
                    alt="Card image cap"
                  />
                  <div class="lecturer-detail">
                    <h5 class="card-title heading text-center">
                      {lecturer.name}{" "}
                    </h5>
                    <span class="subheading">{lecturer.title}</span>
                    <blockquote>
                      <p>{lecturer.description} </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-section-about py-5">
        <div class="container d-flex justify-content-center align-items-center">
          <div class="form w-100">
            <div
              data-aos={"flip-left"}
              class="it-about-title-box  p-5 d-flex justify-content-center align-items-center flex-column"
            >
              <span
                class="it-section-subtitle wdt-heading-subtitle"
                style={{ placeSelf: "flex-start" }}
              >
                CONTACT US FOR
              </span>
              <h4 class="it-section-title mt-2 mb-5">
                Seamless Collaboration & Personilized Learning.
              </h4>
              <img
                src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/newsletter-img-1536x1303.webp"
                alt="contact"
              />
            </div>

            <div class="contact-form" data-aos={"flip-right"}>
              <form action="index.html" autocomplete="off">
                <h3 class="title">Contact us</h3>
                <div class="input-container">
                  <input type="text" name="name" class="input" />
                  <label for="">Full Name</label>
                  <span>Full Name</span>
                </div>
                <div class="input-container">
                  <input type="email" name="email" class="input" />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div class="input-container">
                  <input type="tel" name="phone" class="input" />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>
                <div class="input-container textarea">
                  <textarea name="message" class="input"></textarea>
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" class="btnn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
