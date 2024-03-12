import React from "react";
import "./graduate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPersonChalkboard, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

export default function HomeGraduate() {
  return (
    <div
      class="features-video pt-110 pb-110 mb-4"
      style={{backgroundImage:"url(https://thememaker.net/ecuda/assets/images/video/video-1.jpg)"}}
    >
      <div class="video-overlay"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-7 col-lg-7 col-md-10">
            <div class="section-title mb-40 text-left">
              <h2 class=" text-white">Place To Find Your Dream</h2>
              <p class="text-white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            <div class="single-video-box">
            <i><FontAwesomeIcon icon={faPersonChalkboard}/></i>
              <h3>Graduate Certificate Program.</h3>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the
              </p>
            </div>
            <div class="single-video-box">
            <i><FontAwesomeIcon icon={faLaptopCode}/></i>
              <h3>while earning one </h3>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the
              </p>
            </div>
            <div class="single-video-box">
            <i><FontAwesomeIcon icon={faUserGraduate}/></i>
              <h3>Certificate is a way</h3>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
