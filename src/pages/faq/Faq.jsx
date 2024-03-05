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
        <div className="faq">
          <h2>FAQ</h2>
          <div className="q-a">
            <div className="q-wrapper">
              <h3 tabIndex="0">How many team members can I invite?</h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 .799l4 4 4-4"
                  stroke="#F47B56"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <p hidden>
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </div>

          <div className="q-a">
            <div className="q-wrapper">
              <h3 tabIndex="0">What is the maximum file upload size?</h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 .799l4 4 4-4"
                  stroke="#F47B56"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <p hidden>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </div>

          <div className="q-a">
            <div className="q-wrapper">
              <h3 tabIndex="0">How do I reset my password?</h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 .799l4 4 4-4"
                  stroke="#F47B56"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <p hidden>
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </p>
          </div>

          <div className="q-a">
            <div className="q-wrapper">
              <h3 tabIndex="0">Can I cancel my subscription?</h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 .799l4 4 4-4"
                  stroke="#F47B56"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <p hidden>
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </p>
          </div>

          <div className="q-a">
            <div className="q-wrapper">
              <h3 tabIndex="0">Do you provide additional support?</h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 .799l4 4 4-4"
                  stroke="#F47B56"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <p hidden>
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Faq;
