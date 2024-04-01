import React from "react";
import "./Widgets.css";

const ApplyWidget = () => {
  return (
    <section className="widget has-divider mb-3">
      <h3 className="title">Why Ego-Education ?</h3>
      <p>
        Advance your career through continuous learning. Expand your skillset,
        gain industry certifications, learn on your schedule, and do it all at a
        lower cost. Online education provides opportunities for career growth
        that will benefit you for years to come.
      </p>
      <div className="d-flex align-items-center justify-content-start">
        <button className="text-white button-green" href="/enrollment" >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default ApplyWidget;
