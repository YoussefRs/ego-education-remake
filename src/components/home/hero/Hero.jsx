import React, { useRef, useState } from "react";
import IntroVideo from "../../../assets/video/finalIntro.mp4";
import "./Hero.css";
import CustomBtn from "../../global/btn/CustomBtn";
import { Modal } from "react-bootstrap";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <section id="home" data-stellar-background-ratio="0.5">
      {/* <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-4 col-sm-12 d-flex align-items-center"
            id="hero_title_ctr"
          >
            <div className="home-info">
              <h1>Accelerate your career with an online degree.</h1>
              <h2 className="text-white">Learn from anywhere. Advance faster.</h2>
              <span className="mx-0">
                Our accredited programs provide in-demand skills to expand your
                opportunities
              </span>
            </div>
          </div>

          <div className="col-md-8 col-sm-12">
            <div className="home-video">
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  muted
                  autoPlay
                  loop
                  id="video-background"
                  className="videoo"
                >
                  // <source src={IntroVideo} type="video/mp4" />
                  //{" "}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="hero-ctr mb-5 row">
        <div className="home-ctr-img col-4">
          <img
            src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/AdobeStock_545875468@2x-1.webp"
            alt=""
          />
          <img
            src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/Vector-1.2.webp"
            id="floating_home2"
          />
        </div>
        <div className="title-ctr d-flex align-items-center jutidy-content-center flex-column col-4">
          <h2 class="container-heading w-100">INDEPENDENT INSTITUTION WITH</h2>
          <h1 className="container-title">Ego Education</h1>
          <p className="container-p">
            Embark on a journey to propel your career forward with the
            convenience of online education. With the flexibility to learn from
            anywhere, at any time, you can advance at your own pace.
          </p>
          <CustomBtn content="Play Video" setShowModal={setShowModal} />
          <Modal
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModal}
            onHide={closeModal}
          >
            <Modal.Body className="p-0">
              <video
                muted
                autoPlay
                loop
                id="video-background"
                className="videoo"
              >
                 <source src={IntroVideo} type="video/mp4" />
              </video>
            </Modal.Body>
          </Modal>
        </div>
        <div className="home-ctr-img col-4">
          <img
            src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/AdobeStock_587433154-1.webp"
            alt=""
          />
          <img
            src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/Vector-1.3.webp"
            id="floating_home"
          />
        </div>
      </div>
    </section>
    // <div className="video-container">
    //   <video autoPlay muted loop id="video-background" className="videoo">
    //     <source src={IntroVideo} type="video/mp4" />
    //   </video>
    // </div>
  );
}
