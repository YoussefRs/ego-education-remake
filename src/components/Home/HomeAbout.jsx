import React from "react";
import girl from "../../assets/Home/ego-girl.jpg";
import { useTranslation } from "react-i18next";

function HomeAbout() {
  const { t } = useTranslation();
  const {line1, line2, line3, line4, button} = t("home.banner")
  return (
    <div className="container">
      <section className="special_section content container px-0">
        <div className="about-us" id="#about">
          <h2>{line1}</h2>
          <p>
            {line2}
            <br /> <br /> {line3}
            <br /> <br />
            {line4}
          </p>
          <a href="/enrollment">{button} </a>
          {/* <CustomBtn content={"Apply Now"} /> */}
        </div>
        <div className="image-wrapper">
          <img src={girl} />
        </div>
      </section>
    </div>
  );
}

export default HomeAbout;
