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
import ego from "../../../assets/images/ego.png";

const HomeInstitutes = () => {
  return (
    <section className="testimonials rounded mt-5 mb-4">
      {/* <div className="container">
        <table>
          <tr>
            <td>
              <img
                src="https://i.ibb.co/w4dySWD/01.webp"
                className="inline-photo show-on-scroll"
                alt="About Us"
                style={{
                  height: 350,
                }}
              />
            </td>
            <td>
              <h6 className="sub-title">Discover Our Company</h6>
              <h1 className="title">Creative software development company</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#moreaboutus" className="btn2">
                Discover More
              </a>
            </td>
          </tr>
        </table>
      </div> */}

      {/* <div className="divisions division_2 flex slider">
        <section className="flex-content slide-track">
          <figure className="slide">
            <img src={ego} height="70" alt="" />
          </figure>
          <figure className="slide">
            <img src={ego} height="70" alt="" />
          </figure>
          <figure className="slide">
            <img src={ego} height="70" alt="" />
          </figure>
          <figure className="slide">
            <img src={ego} height="70" alt="" />
          </figure>
          <figure className="slide">
            <img src={ego} height="70" alt="" />
          </figure>
          <figure className="slide">
            <img src={ego} height="70" alt="" />
          </figure>
          <figure className="slide">
            <img src={ego} height="70" alt="" />
          </figure>
          <figure className="slide">
            <img src={ego} height="70" alt="" />
          </figure>
        </section>
      </div> */}
    </section>
  );
};

export default HomeInstitutes;
