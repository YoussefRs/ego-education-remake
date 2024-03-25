import React, { useEffect, useRef } from "react";
import "./Slider.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeCourseSlider() {
  // useEffect(() => {
  //   const activate = (e) => {
  //     const slider = document.querySelector(".slider");
  //     const items = document.querySelectorAll(".item");

  //     if (e.target.matches(".next")) {
  //       slider.appendChild(items[0]);
  //     } else if (e.target.matches(".prev")) {
  //       slider.prepend(items[items.length - 1]);
  //     }
  //   };

  //   document.addEventListener("click", activate, false);

  //   return () => {
  //     document.removeEventListener("click", activate, false);
  //   };
  // }, []);

  // const params = {
  //   loop: true,
  //   effect: "fade",
  //   speed: 600,
  //   fadeEffect: {
  //     crossFade: true,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "progressbar",
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   on: {
  //     init: function (swiper) {
  //       var dotElements = document.querySelector(
  //         ".swiper-pagination-progressbar"
  //       );
  //       var slidesCount = swiper.slides.length - swiper.loopedSlides * 2;
  //       for (let i = 0; i < slidesCount; i++) {
  //         var tag = document.createElement("span");
  //         tag.classList.add("bullet-circle");
  //         dotElements.appendChild(tag);
  //       }
  //     },
  //   },
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    className: "sample",
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <>
    //   {" "}
    //   <h1 className="section-heading text-highlight content container mb-4">
    //     <span className="line fw-bold">Courses</span>
    //   </h1>
    //   <main className="home_course_Slider container p-0">
    //     <ul className="slider" id="_slider_course">
    //       <li
    //         className="item"
    //         style={{
    //           backgroundImage:
    //             'url("https://images7.alphacoders.com/133/1337527.png")',
    //         }}
    //       >
    //         <div className="_content">
    //           <h2 className="title">"Lossless Youths"</h2>
    //           <p className="description">
    //             {" "}
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Tempore fuga voluptatum, iure corporis inventore praesentium
    //             nisi. Id laboriosam ipsam enim.{" "}
    //           </p>
    //           <button>Read More</button>
    //         </div>
    //       </li>
    //       <li
    //         className="item"
    //         style={{
    //           backgroundImage:
    //             'url("https://mrwallpaper.com/images/hd/business-growth-r82mri4n6cbnyt5t.jpg")',
    //         }}
    //       >
    //         <div className="_content">
    //           <h2 className="title">"Estrange Bond"</h2>
    //           <p className="description">
    //             {" "}
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Tempore fuga voluptatum, iure corporis inventore praesentium
    //             nisi. Id laboriosam ipsam enim.{" "}
    //           </p>
    //           <button>Read More</button>
    //         </div>
    //       </li>
    //       <li
    //         className="item"
    //         style={{
    //           backgroundImage:
    //             'url("https://www.arrow.com/ais/wp-content/uploads/2019/07/The-Digital-Human-Body_Image-resized.jpg")',
    //         }}
    //       >
    //         <div className="_content">
    //           <h2 className="title">"The Gate Keeper"</h2>
    //           <p className="description">
    //             {" "}
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Tempore fuga voluptatum, iure corporis inventore praesentium
    //             nisi. Id laboriosam ipsam enim.{" "}
    //           </p>
    //           <button>Read More</button>
    //         </div>
    //       </li>
    //       <li
    //         className="item"
    //         style={{
    //           backgroundImage:
    //             'url("https://images7.alphacoders.com/878/878663.jpg")',
    //         }}
    //       >
    //         <div className="_content">
    //           <h2 className="title">"Last Trace Of Us"</h2>
    //           <p className="description">
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Tempore fuga voluptatum, iure corporis inventore praesentium
    //             nisi. Id laboriosam ipsam enim.
    //           </p>
    //           <button>Read More</button>
    //         </div>
    //       </li>
    //       <li
    //         className="item"
    //         style={{
    //           backgroundImage:
    //             'url("https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg")',
    //         }}
    //       >
    //         <div className="_content">
    //           <h2 className="title">"Urban Decay"</h2>
    //           <p className="description">
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Tempore fuga voluptatum, iure corporis inventore praesentium
    //             nisi. Id laboriosam ipsam enim.
    //           </p>
    //           <button>Read More</button>
    //         </div>
    //       </li>
    //     </ul>
    //     <div className="_nav_">
    //       <FontAwesomeIcon icon={faArrowLeft} class="btn prev"/>
    //       <FontAwesomeIcon icon={faArrowRight} class="btn next"/>
    //     </div>
    //   </main>
    // </>

    <div className="swiper-container">
      <div className="container">
        <h2 class="container-heading">EXPLORE ALL COURSES</h2>
        <h1 className="container-title">
          browse Our <span style={{ color: "#046635" }}>Course</span> catalog
        </h1>
        <p className="container-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolor
          laudantium illo aliquam ducimus possimus rerum iure provident. Eaque
          odit est sit aliquid quisquam dolor vitae laborum accusamus sapiente
          debitis.
        </p>
      </div>
      <Slider {...settings} className="container mt-5">
        <div className="swiper-slide">
          <img
            src="https://images7.alphacoders.com/133/1337527.png"
            className="slide-image"
            alt=""
          />
          <div className="container">
            <div className="slide-content">
              <div className="slide-content-inner">
                <h2>Automotive</h2>
                <h3>Innovation</h3>
                <p>
                  lorem ipsum
                  <br />
                  dolore sit
                  <br />
                  amet lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <img
            src="https://images7.alphacoders.com/133/1337527.png"
            className="slide-image"
            alt=""
          />
          <div className="container">
            <div className="slide-content">
              <div className="slide-content-inner">
                <h2>Automotive</h2>
                <h3>Innovation</h3>
                <p>
                  lorem ipsum
                  <br />
                  dolore sit
                  <br />
                  amet lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
