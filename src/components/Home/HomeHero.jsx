import React from "react";
import IntroVideo from "../../assets/Home/finalIntro.mp4";

function HomeHero() {
  return (
    <section id="home" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 d-flex align-items-center">
            <div className="d-flex flex-column text-white gap-3">
              <h1>Accelerate your career with an online degree.</h1>
              <h2 className="text-white">
                Learn from anywhere. Advance faster.
              </h2>
              <span className="mx-0">
                Our accredited programs provide in-demand skills to expand your
                opportunities
              </span>

              <button>Explore</button>
            </div>
          </div>

          <div className="col-md-8 col-sm-12">
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
    </section>
  );
}

export default HomeHero;
