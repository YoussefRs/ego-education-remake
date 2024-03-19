import React, { useEffect, useState } from "react";
import SubHeader from "../../components/global/sub-header/SubHeader";
import FaqAccordion from "../../components/faq/faq-accordion/FaqAccordion";
import DownloadProspectusWidget from "../../components/widgets/download-prospectus-widget/DownloadProspectusWidget";
import "./faq.css";

const Faq = () => {
  useEffect(() => {
    const questionWrappers = document.querySelectorAll(".q-wrapper");

    questionWrappers.forEach((wrapper) => {
      wrapper.addEventListener("click", showAnswer);
      wrapper.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          showAnswer(e);
        }
      });
    });

    return () => {
      questionWrappers.forEach((wrapper) => {
        wrapper.removeEventListener("click", showAnswer);
        wrapper.removeEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            showAnswer(e);
          }
        });
      });
    };
  }, []);
  const showAnswer = (e) => {
    const questionWrappers = document.querySelectorAll(".q-wrapper");

    questionWrappers.forEach((wrapper) => {
      if (wrapper === e.currentTarget) {
        wrapper.firstElementChild.classList.toggle("h3-active");
        wrapper.lastElementChild.classList.toggle("svg-animation");
        wrapper.nextElementSibling.classList.toggle("p-visible");
      } else {
        wrapper.firstElementChild.classList.remove("h3-active");
        wrapper.lastElementChild.classList.remove("svg-animation");
        wrapper.nextElementSibling.classList.remove("p-visible");
      }
    });
  };

  const faqData = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    // <div className="content container">
    //   <div className="page-wrapper">
    //     <SubHeader
    //       title={"Frequently Asked Questions"}
    //       path={[{ url: "/", label: "Home" }]}
    //       current={"Faq"}
    //     />
    //     <div className="page-content">
    //       <div className="row page-row">
    //         <div className="faq-wrapper col-lg-8 col-md-7 col-12">
    //           <div id="accordion" className="accordion">
    //             {faqs.map((fq, i) => (
    //               <FaqAccordion
    //                 question={fq.question}
    //                 answer={fq.answer}
    //                 key={i}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //         <aside className="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
    //           <DownloadProspectusWidget />
    //         </aside>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="faq_container ">
      <article>
        <div className="img-container"></div>
        <div className="accordion-container">
          <div className="accordion-item">
            <button
              className={`accordion-header ${
                activeIndex === 0 ? "active" : ""
              }`}
              onClick={() => toggleAccordion(0)}
            >
              Are the qualifications recognised?{" "}
              <span className="icon">{activeIndex === 0 ? "-" : "+"}</span>
            </button>
            <div
              className="accordion-content"
              style={{ maxHeight: activeIndex === 0 ? "100px" : "0" }}
            >
              <p>
                Our degrees are accredited by the Malta Further &amp; Higher
                Education Authority (MFHEA) and recognised across the 27 EU
                member states as Malta is an EU member itself. Malta has also
                signed international treaties on education like the Treaty of
                Bologna and the Lisbon Convention. Finally, since Malta is also
                a Commonwealth member, our degrees are easily recognised across
                its 56 member nations.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <button
              className={`accordion-header ${
                activeIndex === 1 ? "active" : ""
              }`}
              onClick={() => toggleAccordion(1)}
            >
              Are there any specific technical requirements or equipment
              necessary for participating in online courses?{" "}
              <span className="icon">{activeIndex === 1 ? "-" : "+"}</span>
            </button>
            <div
              className="accordion-content"
              style={{ maxHeight: activeIndex === 1 ? "100px" : "0" }}
            >
              <p>You only need your laptop and an internet connection.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button
              className={`accordion-header ${
                activeIndex === 2 ? "active" : ""
              }`}
              onClick={() => toggleAccordion(2)}
            >
              What kind of support services does the online university offer to
              students?{" "}
              <span className="icon">{activeIndex === 2 ? "-" : "+"}</span>
            </button>
            <div
              className="accordion-content"
              style={{ maxHeight: activeIndex === 2 ? "100px" : "0" }}
            >
              <p>
                24/7 Online Tutoring &amp; Tech Support - Students can contact
                online tutors who can help with coursework, assignments, and
                study skills. This is available at any time of the day.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button
              className={`accordion-header ${
                activeIndex === 3 ? "active" : ""
              }`}
              onClick={() => toggleAccordion(2)}
            >
              Can I transfer credits earned at other institutions to the online
              university?{" "}
              <span className="icon">{activeIndex === 3 ? "-" : "+"}</span>
            </button>
            <div
              className="accordion-content"
              style={{ maxHeight: activeIndex === 3 ? "100px" : "0" }}
            >
              <p>
                Yes, feel free to contact us at evaluation@ego-education.com,
                attaching your academic records.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Faq;
