import React from "react";
import CourseSlider from "../../globals/Sliders/CourseSlider";

function HomeCourseSlider() {
  
  return (
    <div className="swiper-container">
      <div className="container">
        <h2 className="container-heading-green" style={{ color: "#046635" }}>
          EXPLORE ALL COURSES
        </h2>
        <h1 className="container-title text-black fw-bold text-center mb-5">
          browse Our <span style={{ color: "#046635" }}>Course</span>
        </h1>
      </div>
      <CourseSlider />
    </div>
  );
}

export default HomeCourseSlider;
