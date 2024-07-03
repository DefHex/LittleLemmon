import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
                <Link onClick={toggleMenu} to="/Booking">
                  Booking
                </Link>
              </li>
              <li>
                {/* <a onClick={toggleMenu} href="#Home">Home</a> */}
                <HashLink onClick={toggleMenu} smooth to="/#Home">
                  Home
                </HashLink>
              </li>
              <li>
                {/* <a onClick={toggleMenu} href="#About">About</a> */}
                <HashLink onClick={toggleMenu} smooth to="/#About">
                  About
                </HashLink>
              </li>
              <li>
                {/* <a onClick={toggleMenu} href="#Menu">Menu</a> */}
                <HashLink onClick={toggleMenu} smooth to="/#Menu">
                  Menu
                </HashLink>
              </li>
              <li>
                {/* <a onClick={toggleMenu} href="#Contact">Contact</a> */}
                <HashLink onClick={toggleMenu} smooth to="/#Contact">
                  Contact
                </HashLink>
              </li>
              <li>
                {/* <a onClick={toggleMenu} href="#Testimonials">Testimonials</a> */}
                <HashLink onClick={toggleMenu} smooth to="/#Testimonials">
                  Testimonials
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
