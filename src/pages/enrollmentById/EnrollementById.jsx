import React, { useState } from "react";
import "./enrollementById.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import { useLocation } from "react-router-dom";

function EnrollementById() {
  const location = useLocation();
  const { course, degree, inst } = location.state;
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(`${file.name} (${(file.size / 1048576).toFixed(3)}mb)`);
    } else {
      setFileName("");
    }
  };
  return (
    <>
      <SubHeader
        title={"Enrollment"}
        path={[{ url: "/enrollment", label: "enrollment" }]}
        current={`${course}`}
      />
      <div className="container enrollment d-flex flex-column">
        <h1 className="mb-4">Enrollment Informations</h1>
        <div className="row mb-5">
          <div className="col">
            <select>
              <option value="option1">{course} </option>
            </select>
          </div>
          <div className="col">
            <select>
              <option value="option1">English </option>
              <option value="option2">Italian </option>
            </select>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <select>
              <option value="option8">{degree} </option>
            </select>
          </div>
          <div className="col">
            <select>
              <option value="option3">{inst} </option>
            </select>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="first-name">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="First Name*"
                type="text"
                name="first-name"
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="lastname">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Last Name*"
                type="text"
                name="last-name"
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="email">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Email*"
                type="email"
                name="email"
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="email-email">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Repeat Email*"
                type="email"
                name="email-email"
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="phone">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Telephone / Mobile*"
                type="number"
                name="phone"
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="date">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Repeat Email*"
                type="date"
                name="date"
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Academic career*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">
                  {fileName || "Choose file"}
                </span>
                <input type="file" onChange={handleFileChange} />
              </label>
            </fieldset>
          </div>
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Degree obtained*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">Choose file</span>
                <input type="file" />
              </label>
            </fieldset>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>CV*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">
                  {fileName || "Choose file"}
                </span>
                <input type="file" onChange={handleFileChange} />
              </label>
            </fieldset>
          </div>
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Copy of a valid identification document*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">Choose file</span>
                <input type="file" />
              </label>
            </fieldset>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6 d-flex justify-content-center">
            <fieldset>
              <legend>Linguistic certification (if obtained)</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">
                  {fileName || "Choose file"}
                </span>
                <input type="file" onChange={handleFileChange} />
              </label>
            </fieldset>
          </div>
        </div>
        <h1 className="mt-5 mb-4">Additional Informations</h1>
        <div className="row mb-5">
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="country">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Country Of Birth*"
                type="text"
                name="country"
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="city">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="City Of birth*"
                type="text"
                name="city"
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <select>
              <option value="option1">Male</option>
              <option value="option2">Female </option>
            </select>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="address">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Address*"
                type="text"
                name="address"
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6">
            <span class="wpcf7-form-control-wrap" data-name="zip">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Zip Code*"
                type="text"
                name="zip"
              />
            </span>
          </div>
        </div>
        <h1 className="mt-5 mb-4">Privacy</h1>
        <div className="row ">
          <div className="col">
            <label className="Check">
              <input type="checkbox" />I hereby authorise the processing of my
              personal data for purposes related to the performance of
              institutional activities (Read more)
            </label>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <label className="Check">
              <input type="checkbox" />
              It is possible to exercise the right of withdrawal and receive a
              refund of the fees paid within 7 days of registration
            </label>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <label className="Check">
              <input type="checkbox" />I hereby authorise the processing of my
              personal data for sending advertising material (Read more)
            </label>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col">
            <button>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnrollementById;
