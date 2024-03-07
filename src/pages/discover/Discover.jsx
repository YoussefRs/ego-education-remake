import React from "react";
import "./Discover.css";

export default function Discover() {
  return (
    <header class="header__main">
      <div class="_slider_">
        <svg
          class="slider__mask"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 1080"
          width="0"
          height="0"
        >
          <defs>
            <pattern
              id="bg1"
              patternUnits="userSpaceOnUse"
              width="1920"
              height="1080"
              viewBox="0 0 1920 1080"
            >
              <image
                xlink:href="https://images.unsplash.com/photo-1454328911520-ccf83f1ef41d?dpr=1&auto=format&fit=crop&w=2000&h=2000&q=80&cs=tinysrgb&crop=&bg="
                width="100%"
                height="100%"
              />
            </pattern>
            <pattern
              id="pattern1l"
              patternUnits="userSpaceOnUse"
              width="562"
              height="366"
              viewBox="0 0 562 366"
            >
              <image
                xlink:href="https://images.unsplash.com/photo-1454328911520-ccf83f1ef41d?dpr=1&auto=format&fit=crop&w=600&h=600&q=80&cs=tinysrgb&crop=&bg="
                width="600px"
                height="600px"
              />
            </pattern>
            <pattern
              id="pattern1r"
              patternUnits="userSpaceOnUse"
              x="365px"
              width="562"
              height="366"
              viewBox="0 0 562 366"
            >
              <image
                xlink:href="https://images.unsplash.com/photo-1497215842964-222b430dc094?dpr=1&auto=format&fit=crop&w=600&h=600&q=80&cs=tinysrgb&crop=&bg="
                width="600px"
                height="600px"
              />
            </pattern>

            <pattern
              id="bg2"
              patternUnits="userSpaceOnUse"
              width="1920"
              height="1080"
              viewBox="0 0 1920 1080"
            >
              <image
                xlink:href="https://images.unsplash.com/photo-1497377825569-02ad2f9edb81?dpr=1&auto=format&fit=crop&w=2000&h=2000&q=80&cs=tinysrgb&crop=&bg="
                width="100%"
                height="100%"
              />
            </pattern>
            <pattern
              id="pattern2l"
              patternUnits="userSpaceOnUse"
              width="562"
              height="366"
              viewBox="0 0 562 366"
            >
              <image
                xlink:href="https://images.unsplash.com/photo-1497377825569-02ad2f9edb81?dpr=1&auto=format&fit=crop&w=600&h=600&q=80&cs=tinysrgb&crop=&bg="
                width="600px"
                height="600px"
              />
            </pattern>
            <pattern
              id="pattern2r"
              patternUnits="userSpaceOnUse"
              x="365"
              width="562"
              height="366"
              viewBox="0 0 562 366"
            >
              <image
                xlink:href="https://images.unsplash.com/photo-1496060169243-453fde45943b?dpr=1&auto=format&fit=crop&w=600&h=600&q=80&cs=tinysrgb&crop=&bg="
                width="600px"
                height="600px"
              />
            </pattern>
          </defs>
        </svg>
      </div>
      <div class="slide" id="slide-1">
        <svg
          class="slide__bg"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="1920"
          height="1080"
        >
          <rect x="0" y="0" width="1920" height="1080" fill="url(#bg1)" />
        </svg>
        <div class="slide__images">
          <div class="slide__image slide__image--left">
            <svg
              viewBox="0 0 900 365"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              x="0px"
              y="0px"
            >
              <path
                d="M 0 0 L 0 365 L 351.2382 365 L 562 0 L 0 0 Z"
                fill="url(#pattern1l)"
              />
            </svg>
          </div>

          <div class="slide__image slide__image--right">
            <svg
              viewBox="0 0 900 365"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              x="0px"
              y="0px"
            >
              <path
                d="M 900 365 L 900 0 L 548.7618 0 L 338 365 L 900 365 Z"
                fill="url(#pattern1r)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="slide" id="slide-2">
        <svg
          class="slide__bg"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="1920"
          height="1080"
        >
          <rect x="0" y="0" width="1920" height="1080" fill="url(#bg2)" />
        </svg>
        <div class="slide__images">
          <div class="slide__image slide__image--left">
            <svg
              viewBox="0 0 900 365"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              x="0px"
              y="0px"
            >
              <path
                d="M 0 0 L 0 365 L 351.2382 365 L 562 0 L 0 0 Z"
                fill="url(#pattern2l)"
              />
            </svg>
          </div>

          <div class="slide__image slide__image--right">
            <svg
              viewBox="0 0 900 365"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              x="0px"
              y="0px"
            >
              <path
                d="M 900 365 L 900 0 L 548.7618 0 L 338 365 L 900 365 Z"
                fill="url(#pattern2r)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="slider__pagination">
        <a href="#slide-1" class="button">
          Slide 1
        </a>
        <a href="#slide-2" class="button">
          Slide 2
        </a>
      </div>
    </header>
  );
}
