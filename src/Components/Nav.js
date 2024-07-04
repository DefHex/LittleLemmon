import "../App.css";
import NavbarMobile from "./NavbarMobile";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize(); // Check screen size on initial render
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="TopLine" id="Home">
      <div>
        <header id="LogoTop">
          <img
            src="https://raw.githubusercontent.com/DefHex/LittleLemmon/70f83b8c222b126ec33dee84134a780f986bc5eb/src/IMG/Logo.svg"
            alt="Logo"
          />
        </header>
      </div>
      <div className="Nav">
        <nav>
          {isMobile ? (
            <div>
              <NavbarMobile />
            </div>
          ) : (
            <ul>
              <li>
                <Link to="/LittleLemmon/Booking">Booking</Link>
              </li>
              <li>
                {/* <a href="#Home">Home</a> */}
                <HashLink smooth to="/LittleLemmon/#Home">
                  Home
                </HashLink>
              </li>
              <li>
                {/* <a href="#About">About</a> */}
                <HashLink smooth to="/LittleLemmon/#About">
                  About
                </HashLink>
              </li>
              <li>
                {/* <a href="#Menu">Menu</a> */}
                <HashLink smooth to="/LittleLemmon/#Menu">
                  Menu
                </HashLink>
              </li>
              <li>
                {/* <a href="#Contact">Contact</a> */}
                <HashLink smooth to="/LittleLemmon/#Contact">
                  Contact
                </HashLink>
              </li>
              <li>
                {/* <a href="#Testimonials">Testimonials</a> */}
                <HashLink smooth to="/LittleLemmon/#Testimonials">
                  Testimonials
                </HashLink>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Nav;
