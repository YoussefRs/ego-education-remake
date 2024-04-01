import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPersonChalkboard,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

function HomeFeatures_2() {
  return (
    <div
      className="features-video pt-110 pb-110"
      style={{
        backgroundImage:
          "url(https://wallpaperboat.com/wp-content/uploads/2020/10/30/58688/graduation-04.jpg)",
      }}
    >
      <div className="video-overlay"></div>
      <div className="container">
        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-md-2"></div>
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="section-title mb-4">
              <div className="section-title mb-4 ">
                <h2 className="container-heading text-start text-white">
                  OPPORTUNITIES
                </h2>
                <h1 className="container-title text-white fw-bold mb-4">
                  Start Transforming your <span>Future</span> today
                </h1>
                <p
                  className="container-p text-white mb-4"
                  style={{ maxWidth: 650 }}
                >
                  Embark on a journey of transformation today and unlock
                  boundless opportunities for your future. With our
                  internationally acclaimed degree programs, you'll equip
                  yourself with the qualifications essential for thriving in
                  today's global landscape. Our degrees hold recognition across
                  the EU and are easily validated in Commonwealth nations,
                  offering you a passport to diverse career prospects worldwide.
                </p>
              </div>
            </div>
            <div className="single-video-box">
              <i>
                <FontAwesomeIcon icon={faPersonChalkboard} />
              </i>
              <h5>International Qualification</h5>
              <p>
                Upon graduation, you&#39;ll gain an internationally recognized
                degree that helps you qualify for career opportunities both
                locally and abroad.
              </p>
            </div>
            <div className="single-video-box">
              <i>
                <FontAwesomeIcon icon={faLaptopCode} />
              </i>
              <h5>A World of Opportunities </h5>
              <p>
                Our degrees are recognized throughout the EU and easily
                validable in Commonwealth countries.
              </p>
            </div>
            <div className="single-video-box">
              <i>
                <FontAwesomeIcon icon={faUserGraduate} />
              </i>
              <h5>Gain The Qualifications You Need To Advance</h5>
              <p>
                Apply now to kickstart an online master&#39;s degree that will
                accelerate your career and transform your life for the better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures_2;
