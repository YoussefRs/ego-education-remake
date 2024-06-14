import React, { useState } from "react";
import "./Policy.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import acp from "../../assets/privacy/acp.png";
import aimp from "../../assets/privacy/aimp.png";
import chp from "../../assets/privacy/chp.png";
import ap from "../../assets/privacy/ap.png";
import end from "../../assets/privacy/end.png";
import fp from "../../assets/privacy/fp.png";
import prp from "../../assets/privacy/prp.png";
import ssp from "../../assets/privacy/ssp.png";
import tip from "../../assets/privacy/tip.png";
import vsio from "../../assets/privacy/vsio.png";
import iqa from "../../assets/privacy/iqa.png";

function Policy() {
  // State to manage the current image
  const [currentImage, setCurrentImage] = useState(acp);
  // State to manage the active list item
  const [activeItem, setActiveItem] = useState(acp);

  // Function to handle list item click
  const handleListClick = (image) => {
    setCurrentImage(image);
    setActiveItem(image);
  };

  return (
    <>
      <SubHeader
        title={"Policies & Privacy"}
        path={[{ url: "/", label: "home" }]}
        current={"Privacy & Policy"}
      />
      <div className="container privacy-page my-5">
        <div className="row justify-content-between w-100 gap-2">
          <div className="col-12 col-md-3 privacy-list">
            <ul>
              <li
                className={activeItem === acp ? "active" : ""}
                onClick={() => handleListClick(acp)}
              >
                Academic Integrity Pledge
              </li>
              <li
                className={activeItem === aimp ? "active" : ""}
                onClick={() => handleListClick(aimp)}
              >
                Academic Integrity And Misconduct Policy
              </li>
              <li
                className={activeItem === ap ? "active" : ""}
                onClick={() => handleListClick(ap)}
              >
                Assessment Policy
              </li>
              <li
                className={activeItem === chp ? "active" : ""}
                onClick={() => handleListClick(chp)}
              >
                Complaints Handling Policy
              </li>
              <li
                className={activeItem === end ? "active" : ""}
                onClick={() => handleListClick(end)}
              >
                Equality Policy
              </li>
              <li
                className={activeItem === fp ? "active" : ""}
                onClick={() => handleListClick(fp)}
              >
                Feedback Policy
              </li>
              <li
                className={activeItem === iqa ? "active" : ""}
                onClick={() => handleListClick(iqa)}
              >
                Internal Quality Assurance Policy
              </li>
              <li
                className={activeItem === prp ? "active" : ""}
                onClick={() => handleListClick(prp)}
              >
                Periodic Programme Review Policy
              </li>
              <li
                className={activeItem === prp ? "active" : ""}
                onClick={() => handleListClick(prp)}
              >
                Privacy Policy
              </li>
              <li
                className={activeItem === ssp ? "active" : ""}
                onClick={() => handleListClick(ssp)}
              >
                Student Support Policy
              </li>
              <li
                className={activeItem === tip ? "active" : ""}
                onClick={() => handleListClick(tip)}
              >
                Technological Infrastructure Policy
              </li>
              <li
                className={activeItem === vsio ? "active" : ""}
                onClick={() => handleListClick(vsio)}
              >
                Verification of Student Identity in Online
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-8 img-box">
            <img src={currentImage} alt="document" />
            <button>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7557 11.2686C18.5734 11.2686 18.3985 11.341 18.2696 11.4699C18.1407 11.5989 18.0682 11.7737 18.0682 11.9561V14.3039C18.0682 14.8573 17.8484 15.388 17.4571 15.7793C17.0658 16.1706 16.5351 16.3904 15.9817 16.3904H4.01918C3.46579 16.3904 2.93506 16.1706 2.54376 15.7793C2.15245 15.388 1.93262 14.8573 1.93262 14.3039V11.9561C1.93262 11.7737 1.86018 11.5989 1.73125 11.4699C1.60232 11.341 1.42745 11.2686 1.24512 11.2686C1.06278 11.2686 0.887913 11.341 0.758981 11.4699C0.63005 11.5989 0.557617 11.7737 0.557617 11.9561V14.3039C0.558527 15.2217 0.923519 16.1016 1.57249 16.7506C2.22146 17.3995 3.1014 17.7645 4.01918 17.7654H15.9817C16.8995 17.7645 17.7794 17.3995 18.4284 16.7506C19.0773 16.1016 19.4423 15.2217 19.4432 14.3039V11.9561C19.4432 11.7737 19.3708 11.5989 19.2419 11.4699C19.1129 11.341 18.9381 11.2686 18.7557 11.2686Z"
                  fill="white"
                />
                <path
                  d="M9.51234 13.2762C9.57625 13.3407 9.65229 13.3918 9.73606 13.4267C9.81984 13.4616 9.9097 13.4796 10.0005 13.4796C10.0912 13.4796 10.1811 13.4616 10.2649 13.4267C10.3486 13.3918 10.4247 13.3407 10.4886 13.2762L14.4005 9.36438C14.5096 9.23304 14.566 9.06578 14.5586 8.89517C14.5512 8.72456 14.4805 8.56281 14.3604 8.44142C14.2403 8.32003 14.0793 8.24768 13.9088 8.23846C13.7383 8.22924 13.5705 8.28382 13.438 8.39156L10.688 11.1416V0.921875C10.688 0.739539 10.6155 0.56467 10.4866 0.435739C10.3577 0.306808 10.1828 0.234375 10.0005 0.234375C9.81812 0.234375 9.64326 0.306808 9.51433 0.435739C9.38539 0.56467 9.31296 0.739539 9.31296 0.921875V11.1313L6.56296 8.38125C6.43396 8.25225 6.25899 8.17977 6.07655 8.17977C5.89412 8.17977 5.71915 8.25225 5.59015 8.38125C5.46115 8.51025 5.38867 8.68522 5.38867 8.86766C5.38867 9.05009 5.46115 9.22506 5.59015 9.35406L9.51234 13.2762Z"
                  fill="white"
                />
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;
