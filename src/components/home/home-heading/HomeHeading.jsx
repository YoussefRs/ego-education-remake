import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import ego from "../../../assets/images/1709110968814.jpg";
import CustomBtn from "../../global/btn/CustomBtn";

export default function HomeHeading() {
  return (
    // <section className="promo box box-dark">
    //   <div className="row">
    //     <div className="col-lg-9 col-12">
    //       <h1 className="section-heading">Why Ego Education?</h1>
    //       <p>
    //         The International E-Learning Institute Ltd (IELI) is a company
    //         established since October 23rd, 2017 in Malta, by deed C83113,
    //         created by a decennial experience of its founders in the field of
    //         university education. <br />
    //         With the new eGO brand, Ieli intends to initiate this
    //         internationalization process through highly specialized, innovative
    //         and professionalizing courses for active employment research.
    //       </p>
    //     </div>
    //     <div className="col-lg-3 col-12 d-flex align-items-center justify-content-center">
    //       <a className="_btn btn-cta" href="/enrollment">
    //         <FontAwesomeIcon icon={faPlayCircle} />
    //         Apply Now
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section className="special_section content container mb-4 px-0">
      <div className="about-us">
        <h2>Why Ego Education?</h2>
        <p>
          eGO Education is a brand by the International E-Learning Institute Ltd
          (IELI), a Higher Education Institute based in Malta, created thanks to
          the decennial experience of its founders in the field of online
          University education.<br/> <br/> With our 100% online learning experience, you
          gain an internationally recognized degree without putting your life on
          hold. Study on evenings and weekends, at your own pace.
        </p>
        <a className="_btn btn-cta" href="/enrollment">
          
          Apply Now
        </a>
        {/* <CustomBtn content={"Apply Now"} /> */}
      </div>
      <div className="image-wrapper">
        <img src={ego} />
      </div>
    </section>
  );
}
