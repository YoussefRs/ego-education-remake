import React from "react";
import Hero from "../../components/home/hero/Hero";
import HomeHeading from "../../components/home/home-heading/HomeHeading";
import NewsSection from "../../components/home/home-news/NewsSection";
import HomeEvents from "../../components/home/home-events/HomeEvents";
import HomeCourseFinder from "../../components/home/home-course-finder/HomeCourseFinder";
import HomeQuickLinks from "../../components/home/home-quick-links/HomeQuickLinks";
import HomeTestimonials from "../../components/home/home-testimonials/HomeTestimonials";
import HomeInstitutes from "../../components/home/home-institutes/HomeInstitutes";
import ego from "../../assets/images/ego.png";
import Dec2 from "../team/deck2";
import HomeLecturers from "../../components/home/home-lecturers/HomeLecturers";
import Faq from "../faq/Faq";
import HomeCourseSlider from "../../components/home/Home-course-slider/HomeCourseSlider";

export default function Home() {
  return (
    <main className="home-page">
      <div className="">
        <Hero />
        <HomeHeading />
        <NewsSection />
        <HomeCourseSlider />
        <div className="row cols-wrapper">
          {/* <HomeEvents /> */}
          <div className="col-lg-9 col-12">
            {/* <HomeCourseFinder /> */}
          </div>
          <div className="col-lg-3 col-12">
            {/* <HomeQuickLinks /> */}
            {/* <HomeTestimonials /> */}
          </div>
        </div>
        <HomeInstitutes />
        <HomeLecturers />
        <Dec2 />
        <Faq />
      </div>
    </main>
  );
}
