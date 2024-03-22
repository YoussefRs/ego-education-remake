import React from "react";
import "./graduate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPersonChalkboard,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeGraduate() {
  return (
    <div
      className="features-video pt-110 pb-110 mb-4"
      style={{
        backgroundImage:
          "url(https://wallpaperboat.com/wp-content/uploads/2020/10/30/58688/graduation-04.jpg)",
      }}
    >
      <div className="video-overlay"></div>
      <div className="container">
        <div className="row ">
          <div className="col-xl-7 col-lg-7 col-md-10">
            <div className="section-title mb-40 text-left">
              <h1 className=" text-white mb-5">
                Start Transforming Your Future Today
              </h1>
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
