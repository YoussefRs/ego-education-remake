import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeLecturers() {
  const { t } = useTranslation();
  const { title, subtitle, specialWord } = t("home.homeLecturers");
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  return (
    <>
      <h2 className="container-heading-green" data-aos={"zoom-in"} data-aos-delay={"600"}>{title}</h2>
      <h1 className="container-title text-center fw-bold" data-aos={"zoom-in"} data-aos-delay={"600"}>
        {subtitle} <span style={{ color: "#046635" }}>{specialWord}</span>
      </h1>

      <section id="lecturers">
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0" data-aos={"flip-up"}>
                <div className="card-body">
                  <div className="user-picture">
                    <img
                      src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">
                      Carry Johnshon
                    </h5>
                    <p className=" text-capitalize text-muted small blockquote-footer">
                      Web developer
                    </p>
                    <div className="small">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                      <i className="fas fa-star text-light"></i>
                    </div>
                    <p className="small text-muted mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet nemo harum repellendus aut itaque. Temporibus quaerat
                      dolores ut, cupiditate molestiae commodi! Distinctio
                      praesentium, debitis aut minima doloribus earum quia
                      commodi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0" data-aos={"flip-up"} data-aos-delay={"100"}>
                <div className="card-body">
                  <div className="user-picture">
                    <img
                      src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">Alex Carry</h5>
                    <p className=" text-capitalize text-muted small blockquote-footer">
                      Web developer
                    </p>
                    <div className="small">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                      <i className="fas fa-star text-light"></i>
                      <i className="fas fa-star text-light"></i>
                    </div>
                    <p className="small text-muted mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet nemo harum repellendus aut itaque. Temporibus quaerat
                      dolores ut, cupiditate molestiae commodi! Distinctio
                      praesentium, debitis aut minima doloribus earum quia
                      commodi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0" data-aos={"flip-up"} data-aos-delay={"200"}>
                <div className="card-body">
                  <div className="user-picture">
                    <img
                      src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">John Smith</h5>
                    <p className=" text-capitalize text-muted small blockquote-footer">
                      Web developer
                    </p>
                    <div className="small">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                    </div>
                    <p className="small text-muted mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet nemo harum repellendus aut itaque. Temporibus quaerat
                      dolores ut, cupiditate molestiae commodi! Distinctio
                      praesentium, debitis aut minima doloribus earum quia
                      commodi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0" data-aos={"flip-up"} data-aos-delay={"300"}>
                <div className="card-body">
                  <div className="user-picture">
                    <img
                      src="https://i.picsum.photos/id/836/130/130.jpg?hmac=Sot_REUw5W-XSuE6FmCjT9JenhZfiNqZYs3AQbfrZsc"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">George Alex</h5>
                    <p className=" text-capitalize text-muted small blockquote-footer">
                      Web developer
                    </p>
                    <div className="small">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                      <i className="fas fa-star text-light"></i>
                      <i className="fas fa-star text-light"></i>
                      <i className="fas fa-star text-light"></i>
                    </div>
                    <p className="small text-muted mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet nemo harum repellendus aut itaque. Temporibus quaerat
                      dolores ut, cupiditate molestiae commodi! Distinctio
                      praesentium, debitis aut minima doloribus earum quia
                      commodi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0" data-aos={"flip-up"} data-aos-delay={"400"}>
                <div className="card-body">
                  <div className="user-picture">
                    <img
                      src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">
                      Carry Johnshon
                    </h5>
                    <p className=" text-capitalize text-muted small blockquote-footer">
                      Web developer
                    </p>
                    <div className="small">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                      <i className="fas fa-star text-light"></i>
                    </div>
                    <p className="small text-muted mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet nemo harum repellendus aut itaque. Temporibus quaerat
                      dolores ut, cupiditate molestiae commodi! Distinctio
                      praesentium, debitis aut minima doloribus earum quia
                      commodi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0" data-aos={"flip-up"} data-aos-delay={"500"}>
                <div className="card-body">
                  <div className="user-picture">
                    <img
                      src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">Alex Carry</h5>
                    <p className=" text-capitalize text-muted small blockquote-footer">
                      Web developer
                    </p>
                    <div className="small">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                      <i className="fas fa-star text-light"></i>
                      <i className="fas fa-star text-light"></i>
                    </div>
                    <p className="small text-muted mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet nemo harum repellendus aut itaque. Temporibus quaerat
                      dolores ut, cupiditate molestiae commodi! Distinctio
                      praesentium, debitis aut minima doloribus earum quia
                      commodi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeLecturers;
