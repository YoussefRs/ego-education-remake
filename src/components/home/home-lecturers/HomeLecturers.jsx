import React from "react";
import "./HomeLecturers.css";

export default function HomeLecturers() {
  return (
    <>
      <h1 className="section-heading text-highlight mb-4">
        <span className="line fw-bold">Our Lecturers</span>
      </h1>
      <div class="staff-container">
        <div class="single-staff">
          <img src="https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png" />
          <div class="staff-info">
            <span class="fst-name">John</span>
            <span class="lst-name">Doe</span>
          </div>
        </div>

        <div class="single-staff">
          <img src="https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png" />
          <div class="staff-info">
            <span class="fst-name">John</span>
            <span class="lst-name">Doe</span>
          </div>
        </div>

        <div class="single-staff">
          <img src="https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png" />
          <div class="staff-info">
            <span class="fst-name">John</span>
            <span class="lst-name">Doe</span>
          </div>
        </div>
      </div>
    </>
  );
}
