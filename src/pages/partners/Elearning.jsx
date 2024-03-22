import React from "react";
import "./elearning.css";
import guys from "../../assets/about-video.jpg";

export default function Elearning() {
  return (
    <div id="why-us" className="section">
      <div className="container">
        <h1 className="section-heading text-center text-highlight m-5">
          <span className="line fw-bold" style={{color: "#046635"}}>
            Our Platform Is Shaped Around Your Life
          </span>
        </h1>
        <hr className="section-hr" />
        <div className="row justify-content-between">
          <div className="col-md-6" id="content_">
            <div id="content-text_">
              <h1>
                <u>Make</u> every lecture
                <span> count</span>
              </h1>
              <h2>
                Watch videolectures come to life with interactive elements like
                quiz questions, polls and discussion forums to keep you engaged
                and testing your knowledge as you go. Turning passive into
                active learning.
              </h2>
            </div>
          </div>

          <div className="col-md-5 col-md-offset-1">
            <a className="about-video" href="#">
              <img
                class="header-image"
                src="https://news.umanitoba.ca/wp-content/uploads/2020/04/LearningForLife_UMToday-1200x800-1200x800.jpg"
                alt="a business man standing and smiling"
              />
              <i className="play-icon fa fa-play"></i>
            </a>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-md-5 col-md-offset-1">
            <a className="about-video" href="#" id="content_">
              <img
                class="header-image"
                src="https://raw.githubusercontent.com/malunaridev/Landing-Pages-Are-Fun-01-to-10/master/1-business-agency-concept/assets/image.png"
                alt="a business man standing and smiling"
              />
              <i className="play-icon fa fa-play"></i>
            </a>
          </div>

          <div className="col-md-6">
            <div id="content-text_">
              <h1>
                <u>Collaborate </u>and Grow
                <span> Together</span>
              </h1>
              <h2>
                Study in groups and teams with our in-built social learning
                tools. Compete on leaderboards and earn badges to stay
                motivated! Turn the process of acquiring knowledge into an
                enjoyable competition that spurs you on.
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-md-6" id="content_">
            <div id="content-text_">
              <h1>
                <u>Join </u>a global community of like-minded
                <span> learners</span>
              </h1>
              <h2>
                Students can connect with each other all over the world in
                discussion forums to share insights, get help and form lifelong
                learning relationships. The journey of learning is better
                shared.
              </h2>
            </div>
          </div>

          <div className="col-md-5 col-md-offset-1">
            <a className="about-video" href="#">
              <img
                class="header-image"
                src="https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg"
                alt="a business man standing and smiling"
              />
              <i className="play-icon fa fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
