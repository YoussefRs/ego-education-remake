import React, { useRef } from "react";
import IntroVideo from "../../../assets/video/finalIntro.mp4";

export default function Hero() {
 
  return (
    <section id="home" data-stellar-background-ratio="0.5" className="mb-4">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 col-sm-12 d-flex align-items-center"
            id="hero_title_ctr"
          >
            <div class="home-info">
              <h1>Website Introduction description</h1>
              <a href="#about" class="btn section-btn smoothScroll">
                Start a project
              </a>
              <span>
                CALL US (+66) 010-020-0340
                <small>For any inquiry</small>
              </span>
            </div>
          </div>

          <div class="col-md-8 col-sm-12">
            <div class="home-video">
              <div class="embed-responsive embed-responsive-16by9">
                <video
                  muted
                  autoPlay
                  loop
                  id="video-background"
                  className="videoo"
                >
                  // <source src={IntroVideo} type="video/mp4" />
                  //{" "}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="video-container">
    //   <video autoPlay muted loop id="video-background" className="videoo">
    //     <source src={IntroVideo} type="video/mp4" />
    //   </video>
    // </div>
  );
}
