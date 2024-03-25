import React from "react";
import "./team.css";
import logo from "../../../assets/images/logo-ego-white-2.png";

const TeamMember = ({ image, name, title, description }) => {
  const foundersMembers = [
    {
      name: "A. Daniele Pallotta",
      role: "Director of Sales & IT",
      image: logo,
    },
    {
      name: "Ernesto Pallota",
      role: "founder",
      image: logo,
    },
    {
      name: "MDamien Xuereb",
      role: "Director",
      image: logo,
    },
    // Add more team members as needed
  ];

  const teamMembers = [
    {
      name: "Jose Knutson",
      role: "Co-founder",
      image: logo,
    },
    {
      name: "Bernard Ramos",
      role: "Co-founder",
      image: logo,
    },
    {
      name: "Michael Alexander",
      role: "Co-founder",
      image: logo,
    },
    {
      name: "Michael Alexander",
      role: "Co-founder",
      image: logo,
    },
    {
      name: "Michael Alexander",
      role: "Co-founder",
      image: logo,
    },
    {
      name: "Michael Alexander",
      role: "Co-founder",
      image: logo,
    },
    // Add more team members as needed
  ];

  return (
    <section id="team" class="text-center section mt-5">
      <div class="container">
        <h2 class="container-heading">team</h2>
        <h1 className="container-title">
          meet our <span style={{ color: "#046635" }}>team</span>
        </h1>
        <p className="container-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolor
          laudantium illo aliquam ducimus possimus rerum iure provident. Eaque
          odit est sit aliquid quisquam dolor vitae laborum accusamus sapiente
          debitis.
        </p>

        <div class="hr big_size_hr invisible_hr">
          <i class="fa fa-"></i>
        </div>

        <div class="row mb-5">
          {foundersMembers.map((member, index) => (
            <div className="col-md-4 col-sm-12" key={index}>
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      src={member.image}
                      className="img-circle img-responsive"
                      alt={member.name}
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content mt-3">
                  <div className="team-name">
                    <a href="#">
                      <h5>{member.name}</h5>
                    </a>
                  </div>
                  <div className="team-role">{member.role}</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class="row">
          {teamMembers.map((member, index) => (
            <div class="col-md-2 col-sm-4 col-xs-6" key={index}>
              <div class="team">
                <div class="team-image">
                  <a href="#">
                    <img
                      src={member.image}
                      class="img-circle img-responsive"
                      alt={member.name}
                    />
                  </a>
                  <div class="team-links">
                    <div class="team-links-list">
                      <a href="#" target="_blank">
                        <i class="fa fa-envelope"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i class="fa fa-linked"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <div class="team-name mt-3">
                    <h5>{member.name}</h5>
                  </div>
                  <div class="team-role">{member.role}</div>
                  <div class="team-description"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
