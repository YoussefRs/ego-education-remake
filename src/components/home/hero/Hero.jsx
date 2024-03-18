import React, { useRef } from "react";
import IntroVideo from "../../../assets/video/finalIntro.mp4";

export default function Hero() {
  return (
    <section id="home" data-stellar-background-ratio="0.5" className="mb-4">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-4 col-sm-12 d-flex align-items-center"
            id="hero_title_ctr"
          >
            <div className="home-info">
              <h1>Accelerate your career with an online degree.</h1>
              <h2 className="text-white">Learn from anywhere. Advance faster.</h2>
              <span className="mx-0">
                Our accredited programs provide in-demand skills to expand your
                opportunities.
              </span>
            </div>
          </div>

          <div className="col-md-8 col-sm-12">
            <div className="home-video">
              <div className="embed-responsive embed-responsive-16by9">
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
