import React from "react";
import "./About.css";
import SubHeader from "../../globals/SubHeader/SubHeader";

function About() {
  return (
    <>
      <SubHeader
        title={"About"}
        path={[{ url: "/about", label: "Home" }]}
        current={"About"}
      />
    </>
  );
}

export default About;
