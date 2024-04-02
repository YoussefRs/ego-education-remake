import React from "react";
import CourseSlider from "../../globals/Sliders/CourseSlider";
import { useTranslation } from "react-i18next";

function HomeCourseSlider() {
  const {t} = useTranslation();
  const {title, subtitle, specialWord} = t("home.courseSlider")
  
  return (
    <div className="swiper-container">
      <div className="container">
        <h2 className="container-heading-green" style={{ color: "#046635" }}>
{title}        </h2>
        <h1 className="container-title text-black fw-bold text-center mb-5">
           {subtitle} <span style={{ color: "#046635" }}>{specialWord}</span>
        </h1>
      </div>
      <CourseSlider />
    </div>
  );
}

export default HomeCourseSlider;
