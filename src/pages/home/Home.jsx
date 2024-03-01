import React from "react";
import Hero from "../../components/home/hero/Hero";
import HomeHeading from "../../components/home/home-heading/HomeHeading";
import NewsSection from "../../components/home/home-news/NewsSection";
import HomeEvents from "../../components/home/home-events/HomeEvents";
import HomeCourseFinder from "../../components/home/home-course-finder/HomeCourseFinder";
import HomeDocumentary from "../../components/home/home-documentary/HomeDocumentary";
import HomeQuickLinks from "../../components/home/home-quick-links/HomeQuickLinks";
import HomeTestimonials from "../../components/home/home-testimonials/HomeTestimonials";
import HomeInstitutes from "../../components/home/home-institutes/HomeInstitutes";
import ego from "../../assets/images/ego.png";
import Dec2 from "../team/deck2";
import HomeLecturers from "../../components/home/home-lecturers/HomeLecturers";

export default function Home() {
  return (
    <main className="home-page">
      <div className="content container">
        <Hero />
        <div class="divisions division_2 flex slider">
          <section class="flex-content slide-track">
            <figure class="slide">
              <img src={ego} height="100" alt="" />
            </figure>
            <figure class="slide">
              <img src={ego} height="100" alt="" />
            </figure>
            <figure class="slide">
              <img src={ego} height="100" alt="" />
            </figure>
            <figure class="slide">
              <img src={ego} height="100" alt="" />
            </figure>
            <figure class="slide">
              <img src={ego} height="100" alt="" />
            </figure>
            <figure class="slide">
              <img src={ego} height="100" alt="" />
            </figure>
            <figure class="slide">
              <img src={ego} height="100" alt="" />
            </figure>
            <figure class="slide">
              <img src={ego} height="100" alt="" />
            </figure>
          </section>
        </div>
        <HomeHeading />
        <NewsSection />
        <div className="row cols-wrapper">
          {/* <HomeEvents /> */}
          <div className="col-lg-9 col-12">
            {/* <HomeCourseFinder /> */}
            {/* <HomeDocumentary /> */}
          </div>
          <div className="col-lg-3 col-12">
            {/* <HomeQuickLinks /> */}
            {/* <HomeTestimonials /> */}
          </div>
        </div>
        <HomeInstitutes />
        <HomeLecturers />
        <Dec2 />
      </div>
    </main>
  );
}
