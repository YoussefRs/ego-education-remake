import React from "react";
import { useTranslation } from "react-i18next";

function ContactWidget() {
  const { t } = useTranslation();
  const { line1, line2, line3 } = t("widget.contact");
  return (
    <div className="contact-widget">
      <h2 className="fw-bold">{line1} </h2>
      <p>{line2}</p>
      <div className="contact-img">
        <img
          src="https://lizza.wpengine.com/billaa/wp-content/uploads/sites/5/2023/09/contact-page-img-01.jpg"
          alt="contact"
        />
      </div>
      <div className="contact-details">
        <div className="icon-wrapper m-0">
          <div className="icon-content">
            <span>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <path d="M98,44.4V71.15a4.94,4.94,0,0,1-4.94,4.95H90.77a1.29,1.29,0,0,0-1.29,1.29v8a1.07,1.07,0,0,1-1.58.94L69.6,76.26A1.25,1.25,0,0,0,69,76.1H51.85a5,5,0,0,1-5-4.95V61.78a1.42,1.42,0,0,1,1.42-1.42H66.39a9.68,9.68,0,0,0,9.67-9.68V40.87a1.43,1.43,0,0,1,1.42-1.42H93.06A5,5,0,0,1,98,44.4Z"></path>
                  <path d="M74.14,18.83a7.53,7.53,0,0,0-7.41-6.21H9.53A7.52,7.52,0,0,0,2,20.14V51a7.53,7.53,0,0,0,6.21,7.4,7.2,7.2,0,0,0,1.32.12h2.76a1.06,1.06,0,0,1,1.06,1.07v9.2a3.37,3.37,0,0,0,1.57,2.9,3.21,3.21,0,0,0,1.63.45,3.16,3.16,0,0,0,1.57-.42L38.38,60.36,40.72,59a3.84,3.84,0,0,1,1.87-.49H66.73A7.53,7.53,0,0,0,74.26,51V20.14A7,7,0,0,0,74.14,18.83ZM71.68,51a5,5,0,0,1-5,4.94H41.92a3.88,3.88,0,0,0-1.88.49l-3.25,1.83-.46.26-3.21,1.81L16.85,69.5a.61.61,0,0,1-.61,0,.6.6,0,0,1-.3-.53V57A1.07,1.07,0,0,0,14.87,56H9.53a4.44,4.44,0,0,1-1.11-.13A4.94,4.94,0,0,1,4.58,51V20.14A4.94,4.94,0,0,1,9.53,15.2h57.2A5,5,0,0,1,71.55,19a4.56,4.56,0,0,1,.13,1.11Z"></path>
                  <circle cx="22.65" cy="36.36" r="3.61"></circle>
                  <circle cx="38.13" cy="36.36" r="3.61"></circle>
                  <circle cx="53.61" cy="36.36" r="3.61"></circle>
                </svg>
              </i>
            </span>
          </div>
        </div>
        <div className="details-wrapper">
          <div className="details-subtitle">{line3} </div>
          <div className="details-title">
            <h5>
              <a
                href="mailto:info@ego-education.com"
                target="_blank"
                rel="nofollow"
              >
                info@ego-education.com
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWidget;
