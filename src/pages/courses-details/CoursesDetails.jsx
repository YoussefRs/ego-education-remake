import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faBriefcase,
  faArrowDown,
  faListCheck,
  faQuestionCircle,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt,
  faCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./CoursesDetails.css";
import useCourse from "../../hooks/useCourses";
import SubHeader from "../../globals/SubHeader/SubHeader";
import InfoWidget from "../../globals/Widgets/InfoWidget";
import HomeCourseSlider from "../../components/Home/HomeCourseSlider";
import CourseSlider from "../../globals/Sliders/CourseSlider";
import ContactWidget from "../../globals/Widgets/ContactWidget";
import CourseSliderDetails from "../../globals/Sliders/CourseSliderDetails";

function CoursesDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState();
  const [activePane, setActivePane] = useState("Overview");

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  useEffect(() => {
    if (courseId) {
      const res = useCourse({ type: "byId", param: courseId });
      setCourse(res);
    }
  }, [courseId]);

  if (!course) {
    return null;
  }
  console.log(course);

  return (
    <>
      <SubHeader
        title={course.name}
        path={[
          { url: "/", label: "Home" },
          { url: "/courses", label: "Courses" },
        ]}
        current={course.name}
      />

      <div className="content container">
        <div className="page-content mt-5">
          <div className="row page-row gap-4">
            <section className="ban_sec">
              <div className="container p-0">
                <div className="ban_img">
                  <img src={course?.media?.source} alt="banner" border="0" />
                  <div className="ban_text">
                    <strong>
                      <span>{course?.name} </span>
                      <br />
                    </strong>
                    <p>{course?.slogan}</p>
                    <Link to={`/course/${course?.id}/enrollment`}>Apply</Link>
                  </div>
                </div>
              </div>
            </section>
            <div className="row page-row">
              <div className="courses-wrapper col-lg-8 col-md-8 col-12">
                <div className="featured-courses tabbed-info page-row">
                  <ul className="nav nav-tabss">
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Overview");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Overview" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-view-stacked"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                        </svg>
                        Overview
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Entry");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Entry" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-file-earmark-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                        Entry Requirements
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Modules");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Modules" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-card-checklist"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                        </svg>
                        Modules
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Admission");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Admission" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-award"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                        </svg>
                        Admission
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Lecturer");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Lecturer" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-person-video"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z" />
                        </svg>
                        Lecturer
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className={`tab-pane ${
                        activePane === "Overview" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <h2 className="mb-4 fw-bold">Overview</h2>
                      <div className="tab row">
                        <div className="col">
                          <div className="mb-4 w-100">
                            <ul className="list-unstyled no-margin-bottom">
                              <li>
                                <strong>
                                  <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                    color="#046635"
                                  />{" "}
                                  Start Date:
                                </strong>{" "}
                                <em>{course?.startDate}</em>
                              </li>
                              <li>
                                <strong>
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    color="#046635"
                                  />{" "}
                                  Duration:
                                </strong>{" "}
                                <em>{course?.duration}</em>
                              </li>
                            </ul>
                          </div>
                          <article className="welcome col-lg-8 col-md-7 col-12">
                            <p className="mb-4">{course?.description}</p>
                            <h2 className="mb-4 fw-bold">Career</h2>
                            <ul className="custom-list-style mb-3">
                              {course?.career?.map((carr, i) => (
                                <li key={i}>
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    color="#046635"
                                    size={20}
                                    style={{ paddingRight: 10, marginTop: 3 }}
                                  />
                                  {carr}
                                </li>
                              ))}
                            </ul>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activePane === "Entry" ? "active" : ""
                      }`}
                      id="tab1"
                    >
                      <h2 className="mb-4 fw-bold">Entry Requirements</h2>
                      <div className="tab row">
                        <div className="col">
                          <article className="welcome col-lg-8 col-md-7 col-12">
                            <h6 className="mb-3 fw-bold">
                              <FontAwesomeIcon
                                icon={faListCheck}
                                color="#046635"
                              />{" "}
                              Entry Requirements
                            </h6>
                            <ul className="custom-list-style">
                              <li className="d-flex mb-2">
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  color="#046635"
                                  size={20}
                                  style={{ paddingRight: 10, marginTop: 3 }}
                                />
                                <span>
                                  Minimum Level 6 qualification or equivalent in
                                  either Computer Science, Electrical or
                                  Electronic Engineering, Mathematics, Physics,
                                  related disciplines with demonstrable exposure
                                  to programming and mathematics or other
                                  alternative subjects related to data analysis,
                                  data science or informatics, or a recognized
                                  equivalent international
                                </span>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  color="#046635"
                                  size={20}
                                  style={{ paddingRight: 10 }}
                                />
                                <span>
                                  qualification. IELTS 6.0 or equivalent
                                </span>
                              </li>
                            </ul>
                            <h6 className="mb-3 fw-bold">
                              <FontAwesomeIcon
                                icon={faBriefcase}
                                color="#046635"
                              />{" "}
                              Methodology
                            </h6>
                            <ul className="custom-list-style">
                              <li className="d-flex mb-2">
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  color="#046635"
                                  size={20}
                                  style={{ paddingRight: 10, marginTop: 3 }}
                                />
                                <span>{course?.method}</span>
                              </li>
                            </ul>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activePane === "Modules" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <h2 className="mb-4 fw-bold">Modules</h2>
                      <div className="tab">
                        <main className="modules-container">
                          {/* <div className="container">
                            {course?.modules?.map((faq, index) => (
                              <div
                                className={`topic ${
                                  expandedIndex === index ? "expanded" : ""
                                }`}
                                key={index}
                              >
                                <div
                                  className="open"
                                  onClick={() => toggleAnswer(index)}
                                >
                                  <h2 className="question">{`${index + 1}. ${
                                    faq?.title
                                  }`}</h2>
                                  <span
                                    className={`faq-t ${
                                      expandedIndex === index ? "faq-o" : ""
                                    }`}
                                  ></span>
                                </div>
                                <p
                                  className={`answer ${
                                    expandedIndex === index ? "open" : "hide"
                                  }`}
                                >
                                  {faq?.description}
                                </p>
                              </div>
                            ))}
                          </div> */}
                          <section id="faq" class="faq">
                            <div class="container">
                              <div class="faq-list">
                                <ul>
                                  {course?.modules?.map((module, i) => (
                                    <li key={i}>
                                      <a
                                        data-bs-toggle="collapse"
                                        className="collapse"
                                        data-bs-target={`#faq-list-${i + 1}`}
                                      >
                                        <div className="row">
                                          <div className="col-8">
                                            {module?.title}{" "}
                                          </div>
                                          <div className="col-4 text-end">
                                            ECT : {module?.ects}
                                          </div>
                                        </div>

                                        {/* <FontAwesomeIcon icon={faAngleDown} className="icon-show" />
              <FontAwesomeIcon icon={faAngleUp} className="icon-close" /> */}
                                      </a>
                                      <div
                                        id={`faq-list-${i + 1}`}
                                        className="collapse close"
                                        data-bs-parent=".faq-list"
                                      >
                                        <p>{module?.description}</p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </section>
                        </main>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activePane === "Admission" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <h2 className="mb-4 fw-bold">Admission</h2>
                      <div className="tab">
                        <main className="modules-container"></main>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activePane === "Lecturer" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <h2 className="mb-4 fw-bold">Lecturer</h2>
                      <div className="tab">
                        <main className="modules-container"></main>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="fw-bold mb-4 mt-5">
                    You may also be interested in
                  </h2>
                  <CourseSliderDetails />
                </div>
              </div>

              <aside className="page-sidebar col-lg-4 col-md-4">
                <h2 className="fw-bold">Course Info</h2>
                <div className="right_box mb-5">
                  <div className="p-4">
                    <InfoWidget course={course} />
                  </div>
                </div>
                <div>
                  <ContactWidget />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesDetails;
