import React from "react";
import "./Widgets.css";
import { useTranslation } from "react-i18next";

const ApplyWidget = () => {
  const { t } = useTranslation();
  const { line1, line2, button } = t("widget.apply");
  return (
    <section className="widget has-divider mb-3">
      <h3 className="title">{line1}</h3>
      <p>{line2}</p>
      <div className="d-flex align-items-center justify-content-start">
        <button className="text-white button-green" href="/enrollment">
          {button}
        </button>
      </div>
    </section>
  );
};

export default ApplyWidget;
