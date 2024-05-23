import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubHeader from "../../globals/SubHeader/SubHeader";
import ContactWidget from "../../globals/Widgets/ContactWidget";

function ConfirmPolicy() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <SubHeader
        title={"Entry Requirement"}
        path={[{ url: "/", label: "home" }]}
        current={"Entry Requirement"}
      />
      <div className="p-5 row">
        <div className="col-lg-8 mb-5">
          To access the Bachelor’s, at least a{" "}
          <span className="fw-bold">B2</span> level of knowledge of the English
          or Italian language is required, while for the Master’s, at least a{" "}
          <span className="fw-bold">C1 </span>
          level is <span className="fw-bold">required</span>.
          <br />
          <br />
          In the absence of a linguistic certification, at the time of enrolment
          there will be an entrance test to ascertain linguistic knowledge and
          general culture. In case of deficiency there will be foundation
          courses.
          <br />
          <br />
          To properly enrol, all educational qualifications (such as high school
          diploma, bachelor’s, master’s) should be apostilled through a{" "}
          <span className="fw-bold">
            certification of value at the Maltese or Italian embassies abroad
          </span>
          .
          <br />
          <br />
          In any case, while waiting for the apostille or to simply understand
          if one is eligible, a normal copy of the aforementioned qualifications
          is enough.
          <br />
          <br />
          Once registration is complete, our team will review your documents and
          information within 72 hours. We&#39;ll email you an update.
          <br />
          <br />
          Upon <span className="fw-bold">payment confirmation</span>
          , you&#39;ll get your username and password via email to start your
          online learning journey.
          <br />
          <br />
          <span className="fw-bold">Welcome to eGO Education.</span>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              style={{marginRight: 10, marginBottom: 10}}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I confirm that I have thoroughly reviewed and understood all the
            entry requirements.
          </label> <br/>
          <Link
            className={`apply-btn ${isChecked ? "" : "entry_inactive"}`}
            to={"/apply-enrollement"}
            // onClick={openModal}
            // state={{
            //   course: course.name,
            //   degree: course.degree,
            //   inst: course.institute,
            // }}
          >
            Apply
          </Link>
        </div>
        <div className="col-lg-4 ">
          <ContactWidget />
        </div>
      </div>
    </div>
  );
}

export default ConfirmPolicy;
