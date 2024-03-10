import React, { useEffect, useRef } from "react";
import "./Slider.css";

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
    <main className="home_course_Slider">
      <ul class="slider" id="_slider_course">
        <li
          className="item"
          style={{
            backgroundImage:
              'url("https://images7.alphacoders.com/133/1337527.png")',
          }}
        >
          <div class="_content">
            <h2 class="title">"Lossless Youths"</h2>
            <p class="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          class="item"
          style={{
            backgroundImage: 'url("https://mrwallpaper.com/images/hd/business-growth-r82mri4n6cbnyt5t.jpg")',
          }}
        >
          <div class="_content">
            <h2 class="title">"Estrange Bond"</h2>
            <p class="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          class="item"
          style={{
            backgroundImage:
              'url("https://www.arrow.com/ais/wp-content/uploads/2019/07/The-Digital-Human-Body_Image-resized.jpg")',
          }}
        >
          <div class="_content">
            <h2 class="title">"The Gate Keeper"</h2>
            <p class="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          class="item"
          style={{
            backgroundImage:
              'url("https://images7.alphacoders.com/878/878663.jpg")',
          }}
        >
          <div class="_content">
            <h2 class="title">"Last Trace Of Us"</h2>
            <p class="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          class="item"
          style={{
            backgroundImage:
              'url("https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg")',
          }}
        >
          <div class="_content">
            <h2 class="title">"Urban Decay"</h2>
            <p class="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
      </ul>
      <div class="_nav_">
        <ion-icon class="btn prev" name="arrow-back-outline"></ion-icon>
        <ion-icon class="btn next" name="arrow-forward-outline"></ion-icon>
      </div>
    </main>
  );
}
