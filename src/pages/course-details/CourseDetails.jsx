import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../../components/modal/Modal";

import SubHeader from "../../components/global/sub-header/SubHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCheck,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import useCourse from "../../hooks/useCourse";
import ApplyWidget from "../../components/widgets/apply-widget/ApplyWidget";
import EnquireWidget from "../../components/widgets/enquire-widget/EnquireWidget";
import PromoWidget from "../../components/widgets/promo-widget/PromoWidget";
import AboutWelcome from "../../components/about/about-welcome/AboutWelcome";
import { useModal } from "../../hooks/useModal";

const CourseDetails = () => {
  const [course, setCourse] = useState();
  const [courseId, setCourseId] = useState(null);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("tabone");
  const [selectedVideo, setSelectedVideo] = useState(course?.videos[0]);

  const { showModal, openModal, closeModal } = useModal();
  const [selectedTitle, setSelectedTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handleShowModal = (title, content) => {
    setSelectedTitle(title);
    setModalContent(content);
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const path = location.pathname;
    const parts = path.split("/");
    setCourseId(parts[2]);
  }, [location]);

  useEffect(() => {
    if (courseId) {
      const res = useCourse({ type: "byId", param: courseId });
      setCourse(res);
    }
  }, [courseId]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  if (!course) {
    return null; // or a loading indicator
  }

  return (
    <div className="content container">
      <div className="page-wrapper">
        <SubHeader
          title={course.name}
          path={[
            { url: "/", label: "Home" },
            { url: "/courses", label: "Courses" },
          ]}
          current={course.name.split(" ")[0]}
        />
      </div>
      <div className="page-content">
        <div className="row page-row gap-4">
          <section className="ban_sec">
            <div className="container p-0">
              <div className="ban_img">
                <img src={course.media.source} alt="banner" border="0" />
                <div className="ban_text">
                  <strong>
                    <span>{course.name} </span>
                    <br />
                  </strong>
                  <p>{course.slogan}</p>
                  <Link to={`/course/${course.id}/enrollment`}>Apply</Link>
                </div>
              </div>
            </div>
          </section>
          <div className="d-flex">
            <div className="tabs col">
              <input
                type="radio"
                name="tabs"
                id="tabone"
                checked={activeTab === "tabone"}
                onChange={() => handleTabChange("tabone")}
              />
              <label for="tabone">overview</label>
              <div className="tab">
                <div className="page-row box box-border rounded">
                  <ul className="list-unstyled no-margin-bottom">
                    <li>
                      <strong>
                        <FontAwesomeIcon icon={faCalendarAlt} /> Start Date:
                      </strong>{" "}
                      <em>{course.startDate}</em>
                    </li>
                    <li>
                      <strong>
                        <FontAwesomeIcon icon={faClock} /> Duration:
                      </strong>{" "}
                      <em>{course.duration}</em>
                    </li>
                    <li>
                      <strong>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:
                      </strong>{" "}
                      <em>{course.location}</em>
                    </li>
                  </ul>
                </div>
                <article className="welcome col-lg-8 col-md-7 col-12">
                  <p>{course.description}</p>
                  <ul className="custom-list-style">
                    {course?.career?.map((carr, i) => (
                      <li key={i}>
                        <FontAwesomeIcon icon={faCheck} />
                        {carr}
                      </li>
                    ))}
                  </ul>

                  <ul>
                    <p>Entry Requirements:</p>

                    <li>
                      Minimum Level 6 qualification or equivalent in either
                      Computer Science, Electrical or Electronic Engineering,
                      Mathematics, Physics, related disciplines with
                      demonstrable exposure to programming and mathematics or
                      other alternative subjects related to data analysis, data
                      science or informatics, or a recognized equivalent
                      international
                    </li>
                    <li>qualification. IELTS 6.0 or equivalent</li>
                  </ul>
                </article>
              </div>

              <input
                type="radio"
                name="tabs"
                id="tabtwo"
                checked={activeTab === "tabtwo"}
                onChange={() => handleTabChange("tabtwo")}
              />
              <label for="tabtwo">Modules</label>
              <div className="tab">
                <span>Modules</span>
                <ul>
                  {course?.modules?.map((mod, i) => (
                    <li>
                      <button
                        onClick={() =>
                          handleShowModal(mod.title, mod.description)
                        }
                      >
                        {mod.title}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="container">
                  <div className="main-video-container">
                    <video
                      className="main-video"
                      src={selectedVideo?.src || course.videos[0].src}
                      loop
                      controls
                    ></video>
                    <h3 className="main-video__title">
                      {selectedVideo?.src || course.videos[0].src}
                    </h3>
                  </div>
                  <div className="video-list-container">
                    {course?.videos?.map((video, index) => (
                      <div
                        className={`list ${
                          selectedVideo == video ? "active" : ""
                        }`}
                        key={index}
                        onClick={() => handleVideoClick(video)}
                      >
                        <h3 className="list__title">{video.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <input
                type="radio"
                name="tabs"
                id="tabthree"
                checked={activeTab === "tabthree"}
                onChange={() => handleTabChange("tabthree")}
              />
              <label for="tabthree">Instructor</label>
              <div className="tab">
                <h1>Tab Three Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-3 home_content_right">
              {/* <div className="mb-3">
                <ApplyWidget />
              </div>
              <EnquireWidget /> */}
              <div className="right_box">
                <div className="mb-3 p-4">
                  <ApplyWidget />
                  <EnquireWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal title="My Modal" show={showModal} onHide={closeModal} size="lg">
        {modalContent}
      </Modal>
    </div>
  );
};

export default CourseDetails;
