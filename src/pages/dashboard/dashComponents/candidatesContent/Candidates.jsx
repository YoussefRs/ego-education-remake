import React, { useState, useEffect } from "react";
import "./candidates.css";
import axios from "axios";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3001/candidates");
        setCandidates(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(candidates);
  return (
    <>
      <div className="container-fluid py-4">
        <h1 className="h3 mb-0 text-start">Candidates</h1>
      </div>
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="row">
            <div className="col-lg-8 booking_inputs" id="search">
              <span className="fa-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#fff"
                  class="bi fa-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
              <input placeholder="Search term" />
            </div>
            {/* <div className="col-lg-4  booking_inputs enchilada">
              <input type="date" className="date enchilada"/>
            </div> */}
            <div class="booking_inputs col-lg-4">
              <input type="date" id="input_date" />
            </div>
          </div>
        </div>
      </div>
      <section className="tables scrollable-container">
        <div className="table__wrapper scrollable-container">
          <table className="booking_table">
            <thead className="table__header">
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Salary</td>
                <td>Address</td>
                <td>Document</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody className="table__body">
              {candidates?.map((candidate, i) => (
                <tr key={i}>
                  <td>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ paddingRight: 10 }}
                    >
                      <rect
                        width="40"
                        height="40"
                        rx="12.1951"
                        fill="white"
                        fillOpacity="0.08"
                      />
                      <g clipPath="url(#clip0_0_1)">
                        <path
                          d="M10.6665 10.6667V12.5334H11.5998V29.3334H18.1331V25.6H21.8665V29.3334H28.3998V12.5334H29.3331V10.6667H10.6665ZM16.2665 23.7334H14.3998V21.8667H16.2665V23.7334ZM16.2665 20H14.3998V18.1333H16.2665V20ZM16.2665 16.2667H14.3998V14.4H16.2665V16.2667ZM20.9332 23.7334H19.0665V21.8667H20.9332V23.7334ZM20.9332 20H19.0665V18.1333H20.9332V20ZM20.9332 16.2667H19.0665V14.4H20.9332V16.2667ZM25.5998 23.7334H23.7331V21.8667H25.5998V23.7334ZM25.5998 20H23.7331V18.1333H25.5998V20ZM25.5998 16.2667H23.7331V14.4H25.5998V16.2667Z"
                          fill="url(#paint0_linear_0_1)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="13.3332"
                          y1="9.7778"
                          x2="31.9998"
                          y2="30.2222"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0563A6" />
                          <stop offset="1" stopColor="#6ABCF7" />
                        </linearGradient>
                        <clipPath id="clip0_0_1">
                          <rect
                            width="18.6667"
                            height="18.6667"
                            fill="white"
                            transform="translate(10.6665 10.6667)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    {candidate.name}
                  </td>
                  <td></td>
                  <td>{candidate.email} </td>
                  <td>{candidate.salary} </td>
                  <td>{candidate.address} </td>
                  <td>
                    <a
                      href={`http://localhost:3001${candidate.image}`}
                      target="_blank"
                    >
                      document
                    </a>
                  </td>
                  <td className="d-flex gap-2">
                    <div className="close-btn"></div>
                    <div className="checkmark-btn"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
