import React, { useEffect, useState } from "react";
import SubHeader from "../../components/global/sub-header/SubHeader";
import FaqAccordion from "../../components/faq/faq-accordion/FaqAccordion";
import DownloadProspectusWidget from "../../components/widgets/download-prospectus-widget/DownloadProspectusWidget";
import "./faq.css";

const Faq = () => {
  const faqs = [
    {
      question: "Are the qualifications recognised?",
      answer:
        "Our degrees are accredited by the Malta Further & Higher Education Authority (MFHEA) and recognised across the 27 EU member states as Malta is an EU member itself. Malta has also signed international treaties on education like the Treaty of Bologna and the Lisbon Convention. Finally, since Malta is also a Commonwealth member, our degrees are easily recognised across its 56 member nations.",
    },
    {
      question:
        "Are there any specific technical requirements or equipment necessary for participating in online courses?",
      answer: "You only need your laptop and an internet connection.",
    },
    {
      question:
        "What kind of support services does the online university offer to students?",
      answer:
        "24/7 Online Tutoring & Tech Support - Students can contact online tutors who can help with coursework, assignments, and study skills. This is available at any time of the day.",
    },
    {
      question:
        "Can I transfer credits earned at other institutions to the online university?",
      answer:
        "Yes, feel free to contact us at evaluation@ego-education.com, attaching your academic records.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  console.log(expandedIndex);

  return (
    <>
      {/* <h1 className="section-heading text-highlight content container mt-5 mb-5">
        <span className="line fw-bold">FAQ</span>
      </h1>
      <main className="faq-container">
        <div className="container" style={{ backgroundColor: "#d8e9df" }}>
          {faqs.map((faq, index) => (
            <div
              className={`topic ${expandedIndex === index ? "expanded" : ""}`}
              key={index}
            >
              <div className="open" onClick={() => toggleAnswer(index)}>
                <h2 className="question">{`${index + 1}. ${faq.question}`}</h2>
                <span
                  className={`faq-t ${expandedIndex === index ? "faq-o" : ""}`}
                ></span>
              </div>
              <p
                className={`answer ${
                  expandedIndex === index ? "open" : "hide"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </main> */}

      <div id="about" className="section mt-5">
        <div className="container" id="about_ctr">
          <div className="row">
            <div className="col-md-7">
              <h2 class="container-heading text-start">team</h2>
              <h1 className="container-title text-start">
                Answer You Need To{" "}
                <span style={{ color: "#046635" }}>Know</span>
              </h1>
              <p className="container-p text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                dolor laudantium illo aliquam ducimus possimus rerum iure
                provident. Eaque odit est sit aliquid quisquam dolor vitae
                laborum accusamus sapiente debitis.
              </p>
              <main className="faq-container">
                <div
                  className="container"
                  style={{ backgroundColor: "#d8e9df" }}
                >
                  {faqs.map((faq, index) => (
                    <div
                      className={`topic ${
                        expandedIndex === index ? "expanded" : ""
                      }`}
                      key={index}
                    >
                      <div className="open" onClick={() => toggleAnswer(index)}>
                        <h2 className="question">{`${index + 1}. ${
                          faq.question
                        }`}</h2>
                        <span
                          className={`faq-t ${
                            expandedIndex === index ? "faq-o" : ""
                          }`}
                        ></span>
                      </div>
                      <p
                        className={`answer ${
                          expandedIndex === index ? "open" : "hide"
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </main>
            </div>

            {/* <div className="col-md-6">
            <div className="about-img">
              <img src={about} alt="" />
            </div>
          </div> */}
            <div className="col-xl-5 col-lg-5">
              <div
                className="drem-job d-none d-sm-block wow fadeInRight"
                data-wow-delay=".7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeInRight",
                }}
              >
                <img
                  src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/03/New-Icon-IMG-8.webp"
                  alt=""
                  style={{ height: 400 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
