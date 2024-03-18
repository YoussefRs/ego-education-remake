import React, { useEffect, useRef } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HomeCourseSlider() {
  useEffect(() => {
    const activate = (e) => {
      const slider = document.querySelector(".slider");
      const items = document.querySelectorAll(".item");

      if (e.target.matches(".next")) {
        slider.appendChild(items[0]);
      } else if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    };

    document.addEventListener("click", activate, false);

    return () => {
      document.removeEventListener("click", activate, false);
    };
  }, []);

  return (
    <>
      {" "}
      <h1 className="section-heading text-highlight content container mb-4">
        <span className="line fw-bold">Courses</span>
      </h1>
      <main className="home_course_Slider container p-0">
        <ul className="slider" id="_slider_course">
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://images7.alphacoders.com/133/1337527.png")',
            }}
          >
            <div className="_content">
              <h2 className="title">"Lossless Youths"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.{" "}
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://mrwallpaper.com/images/hd/business-growth-r82mri4n6cbnyt5t.jpg")',
            }}
          >
            <div className="_content">
              <h2 className="title">"Estrange Bond"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.{" "}
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://www.arrow.com/ais/wp-content/uploads/2019/07/The-Digital-Human-Body_Image-resized.jpg")',
            }}
          >
            <div className="_content">
              <h2 className="title">"The Gate Keeper"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.{" "}
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://images7.alphacoders.com/878/878663.jpg")',
            }}
          >
            <div className="_content">
              <h2 className="title">"Last Trace Of Us"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg")',
            }}
          >
            <div className="_content">
              <h2 className="title">"Urban Decay"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
        </ul>
        <div className="_nav_">
          <FontAwesomeIcon icon={faArrowLeft} class="btn prev"/>
          <FontAwesomeIcon icon={faArrowRight} class="btn next"/>
        </div>
      </main>
    </>
  );
}
