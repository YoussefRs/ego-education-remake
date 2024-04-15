import React from "react";
import "./About.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import PartnersSlider from "../../globals/Sliders/PartnersSlider";
import CourseSlider from "../../globals/Sliders/CourseSlider";
import { useTranslation } from "react-i18next";
import girl from "../../assets/Home/Online-Education.png";

function About() {
  const { t } = useTranslation();
  const { lecturers } = t("home.homeLecturers");
  return (
    <>
      <SubHeader
        title={"About"}
        path={[{ url: "/about", label: "Home" }]}
        current={"About"}
      />
      <div className="container mt-5 mb-5">
        <div className="about-us mb-5">
          <h2 className="container-heading-green" style={{ color: "#046635" }}>
            Abouts Us
          </h2>
          <h1 className="container-title text-black fw-bold text-center mb-5">
            Remarkable Research & Outstanding Teaching{" "}
            <span style={{ color: "#046635" }}>Expertise</span>
          </h1>
          <p>
            <strong style={{ color: "#046635" }}>eGO Education</strong> was born
            with the motivation to enter the market of online education
            providers through an excellent training offer present in some
            residential universities, with all their limitation, but lacking or
            insufficient in the world of e-learning. <br />
            <br />
            <strong style={{ color: "#046635" }}>eGO Education</strong> is a
            project brand of the International E-Learning Institute (IELI) Ltd,
            an educational centre affiliated with Pegaso University the largest
            online university in Italy in terms of the number of students and
            turnover.
            <br />
            <br /> Since 2017, with more than 5,000 students enrolled overall
            through our network, IELI has guaranteed constant support to
            students during their training: from orientation to enrolment
            procedures, from technical support to study assistance.
            <br />
            <br /> <strong style={{ color: "#046635" }}>
              eGO Education
            </strong>{" "}
            is a new project that will extend the concept through a new Higher
            Education Institute based in Malta, focused on the provision
            <strong style={{ color: "#046635" }}>
              of highly professionalising education provided entirely online at
              an international level
            </strong>{" "}
            .
          </p>
        </div>
      </div>
      <PartnersSlider />
      <div className="our-mission">
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center">
              <img style={{ borderRadius: 10 }} src={girl} alt="" />
            </div>
            <div className="col col d-flex align-items-start justify-content-center gap-5 text-left flex-column">
              <span class="wdt-heading-subtitle">OUR MISSION</span>
              <p>
                Our mission is to train the world to come: several institutions
                have underlined the necessity of continuous learning in order to
                reduce the skills shortage we are starting to face. The staffing
                firm Manpower reported that{" "}
                <strong style={{ color: "#046635" }}>
                  54% of companies have troubles finding the right employees
                  with the right skills
                </strong>
                , the advisory firm Gartner shows that global talent shortage is
                now the top emerging risk facing organizations, with 63% of
                respondents indicating that a talent shortage was a key concern
                for their organization. Furthermore, the firm HDI values the
                effects of the issue in $8 trillion in unrealised revenue by
                2030.
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
        </div>
      </div>
      <div className="course-section-about mb-5 mt-5">
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
        <h2 className="container-heading-green" style={{ color: "#046635" }}>
          Our Lecturers
        </h2>
        <h1 className="container-title text-black fw-bold text-center mb-5">
          Our Experienced
          <span style={{ color: "#046635" }}> Lecturers</span>
        </h1>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="row">
            {lecturers?.map((lecturer, i) => (
              <div class="col-lg-4 col-md-6 col-sm-12 ">
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
    </>
  );
}

export default About;
