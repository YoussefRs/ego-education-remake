import React from "react";
import girl from "../../assets/Home/ego-girl.jpg";

function HomeAbout() {
  return (
    <div className="container">
      <section className="special_section content container px-0">
        <div className="about-us" id="#about">
          <h2>Why Ego Education?</h2>
          <p>
            eGO Education is a brand by the International E-Learning Institute
            Ltd (IELI), a Higher Education Institute based in Malta, created
            thanks to the decennial experience of its founders in the field of
            online University education.
            <br /> <br /> With our 100% online learning experience, you gain an
            internationally recognized degree without putting your life on hold.
            <br /> <br />
            Study on evenings and weekends, at your own pace.
          </p>
          <a href="/enrollment">Apply Now</a>
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
