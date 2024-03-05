import React, { useEffect, useState } from "react";

const CookiesBox = () => {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    if (!document.cookie.includes("EgoEducation")) {
      setShowBox(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBox(false);
    document.cookie = "cookieBy=EgoEducation; max-age=" + 60 * 60 * 24 * 30;
  };

  const handleDecline = () => {
    setShowBox(false);
  };

  return (
    <div className={`cookies-box ${showBox ? "show" : ""}`}>
      <h3 className="cookies__title">This website uses cookies</h3>
      <p className="cookies__text">
        We use cookies to personalise content and ads, to provide social media
        features and to analyse our traffic. We also share information about
        your use of our site with our social media, advertising and analytics
        partners who may combine it with other information that you’ve provided
        to them or that they’ve collected from your use of their services.
        <a className="cookies__link" href="#">
          ReadMore
        </a>
      </p>
      <div className="cookies__buttons">
        <button
          id="acceptBtn"
          className="cookies__btn cookies__btn--accept mb-1"
          onClick={handleAccept}
        >
          Allow
        </button>
        <button
          className="cookies__btn cookies__btn--decline"
          onClick={handleDecline}
        >
          Deny
        </button>
      </div>
    </div>
  );
};

export default CookiesBox;
