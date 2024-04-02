import React from "react";
import {
  faFlask,
  faUsers,
  faComments,
  faPersonChalkboard,
  faBookOpenReader,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function HomeFeatures() {
  const { t } = useTranslation();
  const {b1, b2, b3} = t("home.homeFeatures.bulls")
  return (
    <div id="about" className="section">
      <div className="container" id="about_ctr">
        <div className="row gap-5">
          <div className="col-xl-5 col-lg-5 d-flex align-items-center">
            <div
              className="drem-job d-none d-sm-block wow fadeInRight"
              data-wow-delay=".7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInRight",
              }}
            >
              <img
                src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/new-Blog-6-JPG.webp"
                alt=""
                style={{ height: 400 }}
              />
              <div className="dr-sm-img">
                <img
                  src="https://corporate.bestbuy.com/wp-content/uploads/2022/07/computing-blog-bts-e1659126841179.png"
                  alt=""
                />
              </div>
              <div className="job-ct-1 job-item">
                <div className="job-ct-icon">
                  <FontAwesomeIcon icon={faPersonChalkboard} color="black" />
                </div>
                <div className="job-ct-text">
                  <h6>{b1} </h6>
                </div>
              </div>
              <div className="job-ct-2 job-item">
                <div className="job-ct-icon">
                  <FontAwesomeIcon icon={faBookOpenReader} color="black" />
                </div>
                <div className="job-ct-text">
                  <h6>{b2}</h6>
                </div>
              </div>
              <div className="job-ct-3 job-item">
                <div className="job-ct-icon">
                  <FontAwesomeIcon icon={faUserGraduate} color="black" />
                </div>
                <div className="job-ct-text">
                  <h6>{b3}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center flex-column justify-content-center gap-4">
            <div className="section-header">
              <h2 className="container-heading text-start">
                {t("home.homeFeatures.sectionHeader.title")}
              </h2>
              <h1 className="container-title text-start text-white">
                {t("home.homeFeatures.sectionHeader.subtitle")}{" "}
                <span style={{ color: "#046635" }}>life</span>
              </h1>
              <p className="container-p text-start text-white">
                {t("home.homeFeatures.sectionHeader.description")}
              </p>
            </div>

            <div className="feature d-flex justify-content-between w-100">
              <FontAwesomeIcon icon={faFlask} className="feature-icon" />

              <div className="feature-content">
                <h4>{t("home.homeFeatures.features.0.title")}</h4>
                <p>{t("home.homeFeatures.features.0.description")}</p>
              </div>
            </div>

            <div className="feature">
              <FontAwesomeIcon icon={faUsers} className="feature-icon" />
              <div className="feature-content">
                <h4>{t("home.homeFeatures.features.1.title")}</h4>
                <p>{t("home.homeFeatures.features.1.description")}</p>
              </div>
            </div>

            <div className="feature">
              <FontAwesomeIcon icon={faComments} className="feature-icon" />
              <div className="feature-content">
                <h4>{t("home.homeFeatures.features.2.title")}</h4>
                <p>{t("home.homeFeatures.features.2.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
