import React from "react";
import "./elearning.css";
import guys from "../../assets/about-video.jpg";

export default function Elearning() {
  return (
    <div id="why-us" class="section">
      <div class="container">
        <hr class="section-hr" />
        <div class="row">
          <div class="col-md-6">
            <h3>Persius imperdiet incorrupte et qui, munere nusquam et nec.</h3>
            <p class="lead">
              Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
            </p>
            <p>
              No vel facete sententiae, quodsi dolores no quo, pri ex tamquam
              interesset necessitatibus. Te denique cotidieque delicatissimi
              sed. Eu doming epicurei duo. Sit ea perfecto deseruisse
              theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit
              ei facilisi mediocrem.
            </p>
          </div>

          <div class="col-md-5 col-md-offset-1">
            <a class="about-video" href="#">
              <img src={guys} alt="" />
              <i class="play-icon fa fa-play"></i>
            </a>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6 col-md-offset-1">
            <a class="about-video" href="#">
              <img src={guys} alt="" />
              <i class="play-icon fa fa-play"></i>
            </a>
          </div>

          <div class="col-md-6">
            <h3>Persius imperdiet incorrupte et qui, munere nusquam et nec.</h3>
            <p class="lead">
              Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
            </p>
            <p>
              No vel facete sententiae, quodsi dolores no quo, pri ex tamquam
              interesset necessitatibus. Te denique cotidieque delicatissimi
              sed. Eu doming epicurei duo. Sit ea perfecto deseruisse
              theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit
              ei facilisi mediocrem.
            </p>
          </div>
        </div>
		<div class="row mt-3">
          <div class="col-md-6">
            <h3>Persius imperdiet incorrupte et qui, munere nusquam et nec.</h3>
            <p class="lead">
              Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
            </p>
            <p>
              No vel facete sententiae, quodsi dolores no quo, pri ex tamquam
              interesset necessitatibus. Te denique cotidieque delicatissimi
              sed. Eu doming epicurei duo. Sit ea perfecto deseruisse
              theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit
              ei facilisi mediocrem.
            </p>
          </div>
		  <div class="col-md-6 col-md-offset-1">
            <a class="about-video" href="#">
              <img src={guys} alt="" />
              <i class="play-icon fa fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
