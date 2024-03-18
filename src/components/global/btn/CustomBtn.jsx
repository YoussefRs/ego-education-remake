import React from "react";
import "./btn.css";

export default function CustomBtn({content}) {
  return (
    <div className="hero-video-play">
      <div
        // style="--animation-speed:2s"
        className="glowing-box glowing-box-active"
      >
        <div className="glowing-box-animations">
          <div className="glowing-box-glow"></div>
          <div className="glowing-box-stars-masker">
            <div className="glowing-box-stars"></div>
          </div>
        </div>
        <div className="glowing-box-borders-masker">
          <div className="glowing-box-borders"></div>
        </div>
        <button className="glowing-box-button">
          <span>
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z"
                fill="white"
              ></path>
            </svg>
            <div className="hero-video-play-text">
              <div className="hero-video-play-title">{content}</div>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}
