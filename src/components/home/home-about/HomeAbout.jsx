import React from "react";
import "./about.css";
import about from "../../../assets/about.png";
import {
  faFlask,
  faUsers,
  faComments,
  faPersonChalkboard,
  faBookOpenReader,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeAbout() {
  return (
    <div id="about" className="section">
      <div className="container" id="about_ctr">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center flex-column justify-content-center gap-4">
            <div className="section-header">
              <h1>Study flexibly around your life.</h1>
              <p className="lead">
                Our online courses on our platform are always available, so you
                can fit your studies into your busy schedule.
              </p>
            </div>

            <div className="feature d-flex justify-content-between w-100">
              <FontAwesomeIcon icon={faFlask} className="feature-icon" />

              <div className="feature-content">
                <h4>Online Courses </h4>
                <p>
                  Access lessons, materials and interact with peers and faculty
                  anytime.
                </p>
              </div>
            </div>

            <div className="feature">
              <FontAwesomeIcon icon={faUsers} className="feature-icon" />
              <div className="feature-content">
                <h4>Expert Teachers</h4>
                <p>
                  Our world-class faculty members have extensive professional
                  experience, ensuring you receive a high-quality education and
                  practical skills.
                </p>
              </div>
            </div>

            <div className="feature">
              <FontAwesomeIcon icon={faComments} className="feature-icon" />
              <div className="feature-content">
                <h4>Community</h4>
                <p>
                  Our platform enables students to communicate with each other.
                  Thanks to study groups you will be part of an international
                  community.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="col-md-6">
            <div className="about-img">
              <img src={about} alt="" />
            </div>
          </div> */}
          <div className="col-xl-6 col-lg-6">
            <div
              className="drem-job d-none d-sm-block wow fadeInRight"
              data-wow-delay=".7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInRight",
              }}
            >
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/62cf74fbc1c0f60b774c2945/E-learning-online-education-or-internet--encyclopedia-concept--Open-laptop-and-book/960x0.jpg?format=jpg&width=960"
                alt=""
                style={{ height: 400 }}
              />
              <div className="dr-sm-img">
                <img
                  src="https://corporate.bestbuy.com/wp-content/uploads/2022/07/computing-blog-bts-e1659126841179.png"
                  alt=""
                />
              </div>
              <div className="job-ct-1 job-item">
                <div className="job-ct-icon">
                  <FontAwesomeIcon icon={faPersonChalkboard} />
                </div>
                <div className="job-ct-text">
                  <h6>24/7 Access</h6>
                </div>
              </div>
              <div className="job-ct-2 job-item">
                <div className="job-ct-icon">
                  <FontAwesomeIcon icon={faBookOpenReader} />
                </div>
                <div className="job-ct-text">
                  <h6>Personalised and Flexible</h6>
                </div>
              </div>
              <div className="job-ct-3 job-item">
                <div className="job-ct-icon">
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
                <div className="job-ct-text">
                  <h6>Global opportunities</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
