import React from "react";
import "./about.css";
import about from "../../../assets/about.png";
import {
  faFlask,
  faUsers,
  faComments,
  faPersonChalkboard,
  faBookOpenReader,
  faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeAbout() {
  return (
    <div id="about" class="section mb-5">
      <div class="container" id="about_ctr">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center flex-column justify-content-center">
            <div class="section-header">
              <h1>With educational technology, everything is personal.</h1>
              <p class="lead">
                opening up a world of possibilities for collaboration and
                feedback. Many teachers use educational technology through
                mobile devices, like iPads or tablets to play games and present
                content. Some schools use handheld devices as a part of an
                evaluation process
              </p>
            </div>

            <div class="feature">
              <FontAwesomeIcon icon={faFlask} class="feature-icon" />

              <div class="feature-content">
                <h4>Online Courses </h4>
                <p>
                  Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et
                  his suas veniam nominati.
                </p>
              </div>
            </div>

            <div class="feature">
              <FontAwesomeIcon icon={faUsers} class="feature-icon" />
              <div class="feature-content">
                <h4>Expert Teachers</h4>
                <p>
                  Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et
                  his suas veniam nominati.
                </p>
              </div>
            </div>

            <div class="feature">
              <FontAwesomeIcon icon={faComments} class="feature-icon" />
              <div class="feature-content">
                <h4>Community</h4>
                <p>
                  Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et
                  his suas veniam nominati.
                </p>
              </div>
            </div>
          </div>

          {/* <div class="col-md-6">
            <div class="about-img">
              <img src={about} alt="" />
            </div>
          </div> */}
          <div class="col-xl-6 col-lg-6">
            <div
              class="drem-job d-none d-sm-block wow fadeInRight"
              data-wow-delay=".7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInRight",
              }}
            >
              <img src="https://www.itnewsafrica.com/wp-content/uploads/2020/05/Connected-IoT-Devices-1.png" alt="" style={{height: 400}}/>
              <div class="dr-sm-img">
                <img src="https://corporate.bestbuy.com/wp-content/uploads/2022/07/computing-blog-bts-e1659126841179.png" alt="" />
              </div>
              <div class="job-ct-1 job-item">
                <div class="job-ct-icon">
                <FontAwesomeIcon icon={faPersonChalkboard}/>
                </div>
                <div class="job-ct-text">
                  <h4>10K+</h4>
                  <p>Focus on making </p>
                </div>
              </div>
              <div class="job-ct-2 job-item">
                <div class="job-ct-icon">
                <FontAwesomeIcon icon={faBookOpenReader}/>
                </div>
                <div class="job-ct-text">
                  <h4>20K+</h4>
                  <p>Active Candidate</p>
                </div>
              </div>
              <div class="job-ct-3 job-item">
                <div class="job-ct-icon">
                <FontAwesomeIcon icon={faUserGraduate}/>
                </div>
                <div class="job-ct-text">
                  <h4>40K+</h4>
                  <p>Remote Candidate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
