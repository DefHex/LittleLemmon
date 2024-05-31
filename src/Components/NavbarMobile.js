import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbarMobile">
        {!isOpen && (
          <button onClick={toggleMenu} className="menu-button">
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        {isOpen && (
          <div>
            <button onClick={toggleMenu} className="menu-button">
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a onClick={toggleMenu} href="#Home">Home</a>
                </li>
                <li>
                  <a onClick={toggleMenu} href="#About">About</a>
                </li>
                <li>
                  <a onClick={toggleMenu} href="#Menu">Menu</a>
                </li>
                <li>
                  <a onClick={toggleMenu} href="#Reservations">Reservations</a>
                </li>
                <li>
                  <a onClick={toggleMenu} href="#Order online">Order online</a>
                </li>
                <li>
                  <a onClick={toggleMenu} href="#Login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        )}
    </div>
  );
}

export default NavbarMobile;
