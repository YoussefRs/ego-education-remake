import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../../assets/images/testimonials/profile-1.jpg";
import img2 from "../../../assets/images/testimonials/profile-2.jpg";
import img3 from "../../../assets/images/testimonials/profile-3.jpg";
import img4 from "../../../assets/images/testimonials/profile-4.jpg";
import university from "../../../assets/Pegaso-header.jpg";
import Swiper from "react-id-swiper";
import pegasso from "../../../assets/Pegaso-header.jpg";
import logo from "../../../assets/pegalogo.jpg"

const HomeInstitutes = () => {
  const params = {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <section className="testimonials rounded mb-4">
      <h1 className="section-heading text-highlight">
        <span className="line fw-bold">Our Others Parteners</span>
      </h1>
      {/* <div className="carousel-controls">
        <a
          className="prev rounded-pill me-1"
          data-bs-target="#campus-carousel"
          data-bs-slide="prev"
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </a>
        <a
          className="next rounded-pill"
          data-bs-target="#campus-carousel"
          data-bs-slide="next"
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </a>
      </div>
      <div className="section-content">
        <div
          id="campus-carousel"
          className="testimonials-carousel carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item item active">
              <div className="source">
                <p className="people">
                  <span className="name">Università Telematica Pegaso</span>
                  <br />
                  <span className="title">Italy</span>
                </p>
                <img className="img-fluid rounded" src={university} alt="" />
              </div>
              <blockquote className="quote mt-3">
                <p>
                  Pegaso Online University deals with the internationalisation
                  of Università Telematica Pegaso, the first Italian player in
                  the field of distance education, and thus aims at providing
                  its educational offer in the English language in every country
                  of the world. Pegaso Online University is innovative and
                  accessible for everyone. It is strongly focused on a worldwide
                  development, counting on its remarkable technological
                  flexibility, that meets educational needs even from the
                  farthest area of the World, About us with lifelong learning at
                  the heart of its work.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div> */}

      <div class="feedback">
        <div class="container mt-3">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="swiper position-relative">
                <div class="swiper-wrapper">
                  <div class="swiper-slide position-relative">
                    <div class="swiper-img">
                      <img src={pegasso} alt="" />
                    </div>
                    <div class="card">
                      <h3 class="mb-3 mb-md-2">Pegaso Online University</h3>
                      <p class="mb-0">
                        Pegaso Online University is innovative and accessible
                        for everyone. It is strongly focused on a worldwide
                        development, counting on its remarkable technological
                        flexibility, that meets educational needs even from the
                        farthest area of the World, About us with lifelong
                        learning at the heart of its work.
                      </p>
                      <img src={logo} alt="" class="card-img" />
                    </div>
                  </div>
                </div>
                {/* <div class="d-flex align-items-center justify-content-center swiper-buttons">
                  <span class="material-icons swiper-button-prev fs-md link-primary me-4">
                    west
                  </span>
                  <div class="swiper-pagination d-flex"></div>
                  <span class="material-icons swiper-button-next fs-md link-primary ms-4">
                    east
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInstitutes;
