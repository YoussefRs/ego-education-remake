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
import EnquireWidget from "../../components/widgets/enquire-widget/EnquireWidget";
import { useModal } from "../../hooks/useModal";

const CourseDetails = () => {
  const [course, setCourse] = useState();
  const [courseId, setCourseId] = useState(null);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("tabone");
  const [selectedVideo, setSelectedVideo] = useState(course?.videos[0]);

  

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
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
                <div className="page-row box box-border rounded mb-4">
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
                {/* <ul>
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
                </ul> */}

                {/* <ol class="style_1">
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
                </ol> */}

                <div class="container p-4 bg-light">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item rounded-3 border-0 shadow mb-2">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button border-bottom collapsed fw-semibold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Basic Java
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body d-flex gap-4">
                          <div className="accordion-body d-flex gap-4">
                            <ul className="cursor-pointer">
                              <li
                                onClick={() => handleItemClick("Description")}
                              >
                                Description
                              </li>
                              <li onClick={() => handleItemClick("ETC")}>
                                ETC
                              </li>
                              <li onClick={() => handleItemClick("Lecturer")}>
                                Lecturer
                              </li>
                            </ul>
                            {selectedItem && (
                              <div>
                                {selectedItem === "Description" && (
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Doloremque cumque fugiat
                                    aliquid ipsum, maxime animi, recusandae
                                    aliquam reprehenderit expedita facere omnis
                                    amet obcaecati ex incidunt? Nesciunt
                                    corrupti accusamus voluptatem vitae. Lorem,
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Quidem, porro non enim facere
                                    voluptatem ipsam veniam adipisci. Id
                                    repudiandae saepe ipsum, obcaecati debitis,
                                    fugiat adipisci veniam rerum non eligendi
                                    qui. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Numquam, porro nisi! Quis,
                                    eligendi eius! Architecto nobis ipsa vero
                                    temporibus fugiat rerum voluptatum nostrum,
                                    odio voluptates vitae amet sequi laudantium
                                    eveniet!
                                  </p>
                                )}
                                {selectedItem === "ETC" && (
                                  <p>Content for ETC</p>
                                )}
                                {selectedItem === "Lecturer" && (
                                  <p>Content for Lecturer</p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item rounded-3 border-0 shadow mb-2">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button border-bottom collapsed fw-semibold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Other Example
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          {/* <p>
                            Please check our more latest Design @
                            <a href="https://codepen.io/Gaurav-Rana-the-reactor">
                              Codepen
                            </a>
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item rounded-3 border-0 mb-2 shadow">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button border-bottom collapsed fw-semibold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Other Example
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          {/* <p>
                            Please check our more latest Design @{" "}
                            <a href="https://codepen.io/Gaurav-Rana-the-reactor">
                              Codepen
                            </a>
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
              <label for="tabthree">Lecturer</label>
              <div className="tab">
                <h1>Tab Three Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>

              <input
                type="radio"
                name="tabs"
                id="tabfour"
                checked={activeTab === "tabfour"}
                onChange={() => handleTabChange("tabfour")}
              />
              <label for="tabfour" id="special_label">Admission</label>
              <div className="tab">
                <h1>Tab Four Content</h1>
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
                  {/* <ApplyWidget /> */}
                  <EnquireWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
