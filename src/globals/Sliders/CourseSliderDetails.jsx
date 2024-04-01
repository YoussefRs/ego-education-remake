import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coursepic from "../../assets/Courses/New-blue-modern-website-programming-online-tutorials-youtube-thumbnail-1.jpg";

function CourseSliderDetails() {
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
    <Slider {...settings} className="container">
      <div className="swiper-slide-nocontent">
        <img src={coursepic} className="slide-image" alt="" />
      </div>
      <div className="swiper-slide-nocontent">
        <img
          src="https://www.ipsr.org/uploads/2024/01/cybersecurity-thumb-copy-1.jpg"
          className="slide-image"
          alt=""
        />
      </div>
      <div className="swiper-slide-nocontent">
        <img
          src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2022/11/New-Green-Modern-Business-YouTube-Thumbnail-1.webp"
          className="slide-image"
          alt=""
        />
      </div>
    </Slider>
  );
}

export default CourseSliderDetails;
