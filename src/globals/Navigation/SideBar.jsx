import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SideBar({ show, handleShow }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
  };
  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
  };

  return (
    <menu
      id="menu"
      className="side_menu"
      style={{ right: show ? 0 : "-400px" }}
    >
      <div className="d-flex justify-content-end align-items-center w-100">
        <a
          className="close"
          onClick={() => {
            handleShow((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </a>
      </div>
      <br />
      
      <ul className="px-0" id="_mobile-nav">
        <li>
        <a href="/">
          Home
          </a>
        </li>

        <li>
        <a href="/courses">
          Courses
          </a>
        </li>
        <li className="dropdown">
          <a href="/elearn">
            eLearn
          </a>
        </li>
        <li>
        <a href="/partners">
          Partners
          </a>
        </li>
        <li>
        <a href="/research">
          eGO Research
          </a>
        </li>
        <li>
        <a href="/confirm">
          Apply
          </a>
        </li>
        <li>
        <a href="/about">
          About Us
          </a>
        </li>
        {/* <li className="fixed_flex">
        <Link className="_btn btn_1 chat_popup">SignUp/LogIn</Link>
        <Link className="_btn btn_2 chat_popup">Admission</Link>
      </li> */}
      </ul>

      <ul className="px-0">
        <li>
          <Link>Events</Link>
        </li>

        <li>
          <Link>Governance Structure</Link>
        </li>
        <li className="dropdown">
          <a href="/policies-privacy">
            Policies & Privacy
          </a>
        </li>
        {/* <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li> */}
        {/* <li className="fixed_flex">
        <Link className="_btn btn_1 chat_popup">SignUp/LogIn</Link>
        <Link className="_btn btn_2 chat_popup">Admission</Link>
      </li> */}
      </ul>

    </menu>
  );
}

export default SideBar;
