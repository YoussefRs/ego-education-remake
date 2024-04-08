import React from "react";
import "./enrollementById.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import { useLocation } from "react-router-dom";

function EnrollementById() {
  const location = useLocation();
  const { course } = location.state;
  console.log(course);
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
      </div>
    </>
  );
}

export default EnrollementById;
