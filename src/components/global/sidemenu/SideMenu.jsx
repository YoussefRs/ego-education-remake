import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import logoWhite2 from "../../../assets/images/logo-ego-white-2.png";
import { Link } from "react-router-dom";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const SideMenu = ({ show, handleShow }) => {
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
      <div className="d-flex justify-content-between align-items-center w-100">
        <a
          className="close"
          onClick={() => {
            handleShow((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <strong className="fixed_flex logo">
          <img src={logoWhite2} alt="Summit" loading="lazy" />
        </strong>
      </div>
      <br />
      <ul className="px-0">
        <li>
          <Link>Events</Link>
        </li>

        <li>
          <Link>Governance Structure</Link>
        </li>
        <li className="dropdown">
          <a onClick={toggleDropdown}>
            Policies
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{
                marginLeft: 28,
                marginTop: 5,
                transform: dropdownVisible ? "rotate(90deg)" : "none",
              }}
            />
          </a>
          {dropdownVisible && (
            <aside>
              <a href="#" className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ marginRight: 4, height: 5 }}
                />
                item 1
              </a>
              <a href="#" className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ marginRight: 4, height: 5 }}
                />
                item 2
              </a>
            </aside>
          )}
        </li>
        <li className="dropdown">
          <a onClick={toggleDropdown1}>
            Resources
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{
                marginLeft: 8,
                marginTop: 5,
                transform: dropdownVisible1 ? "rotate(90deg)" : "none",
              }}
            />
          </a>
          {dropdownVisible1 && (
            <aside>
              <a href="#" className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ marginRight: 4, height: 5 }}
                />
                item 1
              </a>
              <a href="#" className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ marginRight: 4, height: 5 }}
                />
                item 2
              </a>
            </aside>
          )}
        </li>
        <li className="dropdown">
          <a onClick={toggleDropdown2}>
            Admission
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{
                marginLeft: 10,
                marginTop: 5,
                transform: dropdownVisible2 ? "rotate(90deg)" : "none",
              }}
            />
          </a>
          {dropdownVisible2 && (
            <aside>
              <a href="#" className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ marginRight: 4, height: 5 }}
                />
                item 1
              </a>
              <a href="#" className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ marginRight: 4, height: 5 }}
                />
                item 2
              </a>
            </aside>
          )}
        </li>
        <li>
          <Link to={"/contact"}>
            Contact Us
          </Link>
        </li>
        {/* <li className="fixed_flex">
          <Link className="_btn btn_1 chat_popup">SignUp/LogIn</Link>
          <Link className="_btn btn_2 chat_popup">Admission</Link>
        </li> */}
      </ul>
    </menu>
  );
};

export default SideMenu;
