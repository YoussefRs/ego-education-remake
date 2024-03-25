import React from "react";
import "./cat.css";

export default function Categories() {
  return (
    <div class="container mb-5" style={{ marginTop: "17rem" }}>
      <h2 class="container-heading">Featured Courses</h2>
      <h1 className="container-title">
        Popular Category <span style={{ color: "#046635" }}>Courses</span>
      </h1>
      <p className="container-p">
        Dive into a diverse range of subjects tailored to meet the demands of
        today's competitive job market. Whether you're delving into technology,
        business, or beyond, these courses offer the perfect blend of practical
        knowledge and theoretical insights to help you excel in your chosen
        field.
      </p>
      <div class="course-list mt-5">
        <div class="course">
          <img
            src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/03/New-Icon-IMG-2.webp"
            alt="HTML Course Image"
          />
          <h2 className="m-0 mt-2 mb-2">Business Administration</h2>
          <p className="container-p text-start">
            Learn the fundamentals of HTML including tags, attributes, and
            semantic markup.
          </p>
        </div>
        <div class="course">
          <img
            src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/03/New-Icon-IMG-1.webp"
            alt="programming"
          />
          <h2 className="m-0 mt-2 mb-2">Informatics</h2>
          <p className="container-p text-start">
            Master CSS styling techniques such as selectors, box model, flexbox,
            and grid.
          </p>
        </div>
        <div class="course">
          <img
            src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/03/New-Icon-IMG-4.webp"
            alt="JavaScript Course Image"
          />
          <h2 className="m-0 mt-2 mb-2">Educational Science</h2>
          <p className="container-p text-start">
            Explore the core concepts of JavaScript including variables,
            functions, and loops.
          </p>
        </div>
        <div class="course">
          <img
            src="https://images.squarespace-cdn.com/content/v1/570699cc60b5e97ad6879d4d/1515434847459-UCR95WE9T90EUYN3PVPI/69390937-civil-engineering-wallpapers.jpg?format=2500w"
            alt="React Course Image"
          />
          <h2 className="m-0 mt-2 mb-2">Civil Engeneering</h2>
          <p className="container-p text-start">
            Build dynamic web applications with React.js, including state
            management and component-based architecture.
          </p>
        </div>
      </div>
    </div>
  );
}
